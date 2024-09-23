import { ratesSchema } from "store/api/schema";
import { ExchangeRate } from "store/api/types";

const EXPECTED_HEADER = "Country|Currency|Amount|Code|Rate";
/**
 * expected response schema from API:
 * line with date
 * line with header
 * lines with exchange rates in format: Australia|dollar|1|AUD|15.137
 * see more: https://www.cnb.cz/en/faq/Format-of-the-foreign-exchange-market-rates/
 */
export const parseResponse = (input: string): ExchangeRate[] => {
    const lines = input.split("\n").filter((line) => line !== "");
    const header = lines[1];

    // when header format differs from expected, we can't parse response and be sure it's valid
    if (header !== EXPECTED_HEADER) {
        throw new Error(`Unexpected response format: ${header}`);
    }

    // optimistically parse response
    const rates = lines.slice(2).map((line) => {
        const [country, currency, amount, code, rate] = line.split("|");
        return {
            country,
            currency,
            amount,
            code,
            rate,
        };
    });

    // check if parsed response matches expected schema
    const parsedResponse = ratesSchema.safeParse(rates);
    if (!parsedResponse.success) {
        throw new Error(`Unexpected response format: ${parsedResponse.error}`);
    }
    return parsedResponse.data;
};
