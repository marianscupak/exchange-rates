import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { PropsWithChildren } from "react";

import { getPersister, getQueryClient } from "store/api/query";

const queryClient = getQueryClient();
const persister = getPersister();

export const StoreProvider = ({ children }: PropsWithChildren) => {
    return (
        <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </PersistQueryClientProvider>
    );
};
