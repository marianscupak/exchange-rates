import { Select } from "components/ui/Select";
import { ExchangeRate } from "store/api/types";

type Props = {
    currencies: ExchangeRate[];
    onSelect: (currency: ExchangeRate) => void;
};
const CurrencySelector = (props: Props) => {
    const { currencies, onSelect } = props;

    if (currencies.length === 0) {
        return null;
    }

    const items = currencies.map((currency) => ({ label: currency.code, value: currency.code }));

    const handleSelect = (value: string) => {
        const currency = currencies.find((currency) => currency.code === value);
        if (currency) {
            onSelect(currency);
        }
    };

    return <Select onChange={handleSelect} items={items} placeholder={"👉 Select currency"} />;
};

export { CurrencySelector };
