import * as Select from "@radix-ui/react-select";

import { SelectContent } from "components/ui/Select/SelectContent";
import { SelectItem } from "components/ui/Select/SelectItem";
import { SelectTrigger } from "components/ui/Select/SelectTrigger";
import { SelectViewport } from "components/ui/Select/SelectViewport";

type Props = {
    placeholder?: string;
    onChange: (value: string) => void;
    items: { label: string; value: string }[];
};

/**
 * Name is slightly misleading as it is not styled as typical dropdown style select
 */
const _Select = (props: Props) => {
    const { items, onChange, placeholder } = props;
    return (
        <Select.Root onValueChange={onChange}>
            <SelectTrigger>
                <Select.Value placeholder={placeholder} />
            </SelectTrigger>

            <Select.Portal>
                <SelectContent position={"popper"}>
                    <SelectViewport>
                        {items.map((item) => (
                            <SelectItem key={item.value} label={item.label} value={item.value} />
                        ))}
                    </SelectViewport>
                </SelectContent>
            </Select.Portal>
        </Select.Root>
    );
};

export { _Select as Select };
