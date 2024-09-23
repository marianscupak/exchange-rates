import { ExchangeRate } from "store/api/types";

/**
 *
 * @param targetCurrency to convert to
 * @param amount to convert
 */
export const convertCurrency = (targetCurrency: ExchangeRate, amount: number) => {
    return (amount / targetCurrency.rate) * targetCurrency.amount;
};
