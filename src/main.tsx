import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "normalize.css";
import { App } from "App";
import { GlobalStyles } from "components/ui";
import { StoreProvider } from "store/StoreProvider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StoreProvider>
            <GlobalStyles />
            <App />
        </StoreProvider>
    </StrictMode>,
);
