import { useAtom } from "jotai";

import { Country } from "components/List/Country";
import { Flag } from "components/List/Flag";
import { ListItem, Rates } from "components/List/ListItem";
import { ListLayout } from "components/List/ListLayout";
import { Rate } from "components/List/Rate";
import { getFlagEmoji } from "components/List/list.helpers";
import { Loading } from "components/ui";
import { amountAtom } from "state/amount";
import { ExchangeRate } from "store/api/types";
import { convertCurrency } from "utils/exchange.helpers";

type Props = {
    exchangeRates?: ExchangeRate[];
};

const List = (props: Props) => {
    const { exchangeRates } = props;

    const [amount] = useAtom(amountAtom);

    if (!exchangeRates || exchangeRates.length === 0) {
        return <Loading height={"20rem"} />;
    }

    return (
        <ListLayout>
            {exchangeRates.map((exchangeRate) => (
                <ListItem key={exchangeRate.code}>
                    <Flag>{getFlagEmoji(exchangeRate.code.substring(0, 2))}</Flag>
                    <Country>{exchangeRate.country}</Country>
                    <Rates>
                        <Rate>
                            <strong>{exchangeRate.rate} CZK</strong>
                            <small>
                                for {exchangeRate.amount}{" "}
                                {exchangeRate.amount > 1 ? `${exchangeRate.currency}s` : exchangeRate.currency}
                            </small>
                        </Rate>
                        {amount && (
                            <Rate>
                                <strong>
                                    {convertCurrency(exchangeRate, amount).toFixed(2)} {exchangeRate.code}
                                </strong>
                                <small>for {amount} CZK</small>
                            </Rate>
                        )}
                    </Rates>
                </ListItem>
            ))}
        </ListLayout>
    );
};
export { List };
