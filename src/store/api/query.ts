import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient, QueryFunction } from "@tanstack/react-query";

import { DayOfExchangeRates } from "store/api/types";

/**
 * Default query fetching data from API.
 * As there is only one endpoint with no params, the default query is all we need.
 * Using it simplifies calling useQuery hook
 */
const defaultQueryFn: QueryFunction = async () => {
    const url = import.meta.env.VITE_APP_API_URL;
    if (!url) {
        throw new Error("`VITE_APP_API_URL` env variable not set. Check .env file or README.md for more information");
    }
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Network response failed: ${response.status} ${response.statusText}`);
    }
    return response.text();
};

export const fetchLastMonthExchangeRates: QueryFunction<DayOfExchangeRates[]> = async () => {
    const url = `${import.meta.env.VITE_APP_API_URL}/last-month`;
    if (!url) {
        throw new Error("`VITE_APP_API_URL` env variable not set. Check .env file or README.md for more information");
    }
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Network response failed: ${response.status} ${response.statusText}`);
    }
    return response.json();
};

export const getQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                queryFn: defaultQueryFn,
            },
        },
    });

export const getPersister = () => createSyncStoragePersister({ storage: window.localStorage });
