import { ExchangeRate } from "components/ExchangeRate";
import { List } from "components/List";
import { Layout } from "components/ui";
import { useExchangeRates } from "store/api/hooks";

const App = () => {
    const { data: exchangeRates } = useExchangeRates();
    return (
        <>
            <Layout>
                <ExchangeRate />
                <List exchangeRates={exchangeRates} />
            </Layout>
        </>
    );
};

export { App };
