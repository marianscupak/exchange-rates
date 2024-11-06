import { CurrencyChart } from "components/CurrencyChart";
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
                <CurrencyChart />
                <List exchangeRates={exchangeRates} />
            </Layout>
        </>
    );
};

export { App };
