import { z } from "zod";

import { rateSchema } from "store/api/schema";

export type ExchangeRate = z.infer<typeof rateSchema>;

export interface DayOfExchangeRates {
    date: string;
    rates: string;
}

export interface ExchangeRatesRepository {
    date: string;
    rates: ExchangeRate[];
}
