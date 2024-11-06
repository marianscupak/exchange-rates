import { useAtom } from "jotai";

import { LineChart } from "components/CurrencyChart/LineChart";
import { Wrapper } from "components/CurrencyChart/Wrapper";
import { exchangeRateAtom } from "state/exchange-rate";
import { useLastMonthExchangeRates } from "store/api/hooks";

const CurrencyChart = () => {
    const [exchangeRate] = useAtom(exchangeRateAtom);
    const { data } = useLastMonthExchangeRates();

    return <Wrapper>{exchangeRate && <LineChart exchangeRate={exchangeRate} ratesRepositories={data} />}</Wrapper>;
};

export { CurrencyChart };
