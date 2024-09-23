import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren } from "react";

import { getQueryClient } from "store/api/query";

export const StoreProvider = ({ children }: PropsWithChildren) => {
    return (
        <QueryClientProvider client={getQueryClient()}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};
