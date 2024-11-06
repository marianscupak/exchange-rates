import { atom } from "jotai";

import { ExchangeRate } from "store/api/types";

export const exchangeRateAtom = atom<ExchangeRate | null>(null);
