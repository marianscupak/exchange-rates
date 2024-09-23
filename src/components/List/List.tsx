import { Country } from "components/List/Country";
import { Flag } from "components/List/Flag";
import { ListItem } from "components/List/ListItem";
import { ListLayout } from "components/List/ListLayout";
import { Rate } from "components/List/Rate";
import { getFlagEmoji } from "components/List/list.helpers";
import { Loading } from "components/ui";
import { ExchangeRate } from "store/api/types";

type Props = {
    exchangeRates?: ExchangeRate[];
};

const List = (props: Props) => {
    const { exchangeRates } = props;

    if (!exchangeRates || exchangeRates.length === 0) {
        return <Loading height={"20rem"} />;
    }

    return (
        <ListLayout>
            {exchangeRates.map((exchangeRate) => (
                <ListItem key={exchangeRate.code}>
                    <Flag>{getFlagEmoji(exchangeRate.code.substring(0, 2))}</Flag>
                    <Country>{exchangeRate.country}</Country>
                    <Rate>
                        <strong>{exchangeRate.rate} CZK</strong>
                        <small>
                            for {exchangeRate.amount}{" "}
                            {exchangeRate.amount > 1 ? `${exchangeRate.currency}s` : exchangeRate.currency}
                        </small>
                    </Rate>
                </ListItem>
            ))}
        </ListLayout>
    );
};
export { List };
