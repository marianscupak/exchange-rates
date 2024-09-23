import { describe, expect, it } from "vitest";

import { parseResponse } from "store/api/helpers";

describe("Parsing API response", () => {
    it("Should parse valid input", () => {
        const validInput =
            "29 Jan 2024 #20\n" +
            "Country|Currency|Amount|Code|Rate\n" +
            "Australia|dollar|1|AUD|15.137\n" +
            "Brazil|real|1|BRL|4.672\n" +
            "Bulgaria|lev|1|BGN|12.687";
        const expectedOutput = [
            {
                country: "Australia",
                currency: "dollar",
                amount: 1,
                code: "AUD",
                rate: 15.137,
            },
            {
                country: "Brazil",
                currency: "real",
                amount: 1,
                code: "BRL",
                rate: 4.672,
            },
            {
                country: "Bulgaria",
                currency: "lev",
                amount: 1,
                code: "BGN",
                rate: 12.687,
            },
        ];

        const validInputWithEmptyLine =
            "29 Jan 2024 #20\n" +
            "Country|Currency|Amount|Code|Rate\n" +
            "\n" +
            "Australia|dollar|1|AUD|15.137\n" +
            "Brazil|real|1|BRL|4.672\n" +
            "Bulgaria|lev|1|BGN|12.687\n";

        const result1 = parseResponse(validInput);
        expect(result1).toEqual(expectedOutput);

        const result2 = parseResponse(validInputWithEmptyLine);
        expect(result2).toEqual(expectedOutput);
    });

    it("Should throw when missing date row", () => {
        const inputWithoutDate =
            "Country|Currency|Amount|Code|Rate\n" +
            "Australia|dollar|1|AUD|15.137\n" +
            "Brazil|real|1|BRL|4.672\n" +
            "Bulgaria|lev|1|BGN|12.687\n";

        expect(() => parseResponse(inputWithoutDate)).toThrow(Error);
    });

    it("Should throw when missing header row", () => {
        const inputWithoutHeader =
            "29 Jan 2024 #20\n" +
            "Australia|dollar|1|AUD|15.137\n" +
            "Brazil|real|1|BRL|4.672\n" +
            "Bulgaria|lev|1|BGN|12.687\n";

        expect(() => parseResponse(inputWithoutHeader)).toThrow(Error);
    });

    it("Should throw when missing header and date row", () => {
        const inputWithoutDateAndHeader =
            "Australia|dollar|1|AUD|15.137\n" + "Brazil|real|1|BRL|4.672\n" + "Bulgaria|lev|1|BGN|12.687\n";

        expect(() => parseResponse(inputWithoutDateAndHeader)).toThrow(Error);
    });

    it("Should throw with unexpected columns", () => {
        const swappedOrderInput =
            "29 Jan 2024 #20\n" +
            "Country|Amount|Currency|Code|Rate\n" +
            "Australia|dollar|1|AUD|15.137\n" +
            "Brazil|real|1|BRL|4.672\n" +
            "Bulgaria|lev|1|BGN|12.687\n";

        expect(() => parseResponse(swappedOrderInput)).toThrow(Error);

        const differentHeaderInput =
            "29 Jan 2024 #20\n" +
            "Country|Test|Amount|Code|Rate\n" +
            "Australia|dollar|1|AUD|15.137\n" +
            "Brazil|real|1|BRL|4.672\n" +
            "Bulgaria|lev|1|BGN|12.687\n";

        expect(() => parseResponse(differentHeaderInput)).toThrow(Error);
    });
});
