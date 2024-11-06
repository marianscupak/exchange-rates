import { useMemo } from "react";

import { ExchangeRate, ExchangeRatesRepository } from "store/api/types";

interface Props {
    exchangeRate: ExchangeRate;
    ratesRepositories: ExchangeRatesRepository[];
}

const LineChart = (props: Props) => {
    const { exchangeRate, ratesRepositories } = props;

    const chartData = useMemo(
        () =>
            ratesRepositories.map((repo) => ({
                date: repo.date,
                rate: repo.rates.find((r) => r.code === exchangeRate.code),
            })),
        [exchangeRate.code, ratesRepositories],
    );

    console.log(chartData);

    return <div>Hello</div>;
};

export { LineChart };
