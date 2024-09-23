import { useQuery } from "@tanstack/react-query";

import { parseResponse } from "store/api/helpers";
import { ExchangeRate } from "store/api/types";

// todo - only fetch data once a day
export const useExchangeRates = () => {
    const queryInfo = useQuery<string>({
        queryKey: ["exchangeRates"],
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
