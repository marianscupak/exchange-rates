import { describe, expect, it } from "vitest";

import { ExchangeRate } from "store/api/types";
import { convertCurrency } from "utils/exchange.helpers";

const australianDollar = {
    country: "Australia",
    currency: "dollar",
    amount: 1,
    code: "AUD",
    rate: 15.11,
} satisfies ExchangeRate;

const icelandigKrona = {
    country: "Iceland",
    currency: "krona",
    amount: 100,
    code: "ISK",
    rate: 16.78,
} satisfies ExchangeRate;

describe("Calculating exchange rates", () => {
    it("Should calculate valid currencies", () => {
        const result = convertCurrency(australianDollar, 123);
        expect(result).toBeCloseTo(8.14, 2); // The expected result might vary depending on your exchange rates data
    });

    it("Should calculate when amount to convert is 0", () => {
        const result = convertCurrency(australianDollar, 0);
        expect(result).toBe(0);
    });

    it("Should calculate when amount to convert is negative", () => {
        const result = convertCurrency(australianDollar, -123);
        expect(result).toBeCloseTo(-8.14, 2); // The expected result might vary depending on your exchange rates data
    });

    it("Should calculate when input currency exchange rate amount > 1", () => {
        const result = convertCurrency(icelandigKrona, 213);
        expect(result).toBeCloseTo(1269.37, 2); // The expected result might vary depending on your exchange rates data
    });
});
