import { useQuery } from "@tanstack/react-query";

import { parseResponse } from "store/api/helpers";
import { fetchLastMonthExchangeRates } from "store/api/query";
import { DayOfExchangeRates, ExchangeRate, ExchangeRatesRepository } from "store/api/types";

const ONE_DAY = 1000 * 60 * 60 * 24;

export const useExchangeRates = () => {
    const queryInfo = useQuery<string>({
        queryKey: ["exchangeRates"],
        staleTime: ONE_DAY,
        gcTime: ONE_DAY,
    });

    let parsedData: ExchangeRate[] | undefined = [];
    if (queryInfo.isSuccess && queryInfo.data) {
        parsedData = parseResponse(queryInfo.data);
    }

    return {
        ...queryInfo,
        data: parsedData,
    };
};

export const useLastMonthExchangeRates = () => {
    const queryInfo = useQuery<DayOfExchangeRates[]>({
        queryKey: ["exchangeRates", "lastMonth"],
        queryFn: fetchLastMonthExchangeRates,
        staleTime: ONE_DAY,
        gcTime: ONE_DAY,
    });

    let parsedData: ExchangeRatesRepository[] | undefined = [];
    if (queryInfo.isSuccess && queryInfo.data) {
        parsedData = queryInfo.data.map((data) => ({ ...data, rates: parseResponse(data.rates) }));
    }

    return {
        ...queryInfo,
        data: parsedData,
    };
};
