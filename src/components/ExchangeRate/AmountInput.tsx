import { ChangeEvent, useCallback, useState } from "react";

import { Input } from "components/ui/Input";

type Props = {
    onChange: (amount: number | null) => void;
};
const AmountInput = (props: Props) => {
    const { onChange } = props;
    const [amount, setAmount] = useState("");
    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = (e.target as HTMLInputElement).value;
            setAmount(value);
            if (value === "") {
                onChange(null);
            } else {
                const parsed = parseFloat(value);
                if (!isNaN(parsed)) {
                    onChange(parsed);
                }
            }
        },
        [onChange],
    );

    return (
        <Input
            type="number"
            value={amount}
            onChange={handleChange}
            autoFocus={true}
            onFocus={(e) => e.target.select()}
        />
    );
};

export { AmountInput };
