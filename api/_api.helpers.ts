import fetch from "node-fetch";

import { DayOfExchangeRates } from "../src/store/api/types";

export const fetchExchangeRates = async () => {
    const url = process.env.EXCHANGE_RATES_API;
    if (!url) {
        throw new Error("Missing EXCHANGE_RATES_API env variable");
    }
    return fetch(url)
        .then((response) => {
            return response.text();
        })
        .catch((error) => {
            console.error(error);
        });
};

export const fetchLastMonthExchangeRates = async () => {
    const url = process.env.EXCHANGE_RATES_API;
    if (!url) {
        throw new Error("Missing EXCHANGE_RATES_API env variable");
    }
    const rates: DayOfExchangeRates[] = [];
    for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const formattedDate = date.toLocaleDateString("en-GB").split("/").reverse().join(".");
        const response = await fetch(`${url}?date=${formattedDate}`);
        const data = await response.text();
        rates.push({ date: formattedDate, rates: data });
    }

    return rates;
};
