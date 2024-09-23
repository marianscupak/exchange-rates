import * as Select from "@radix-ui/react-select";
import styled from "styled-components";

const SelectItemStyled = styled(Select.Item)`
    padding: 0.5rem 0.5rem 0.4rem;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    outline: none;
    border-radius: 0.2rem;

    &[data-state="checked"] {
        background-color: var(--indigo);
        color: var(--white);
    }

    &:focus-visible {
        background-color: var(--indigo-bg);
    }
`;

type Props = {
    label: string;
    value: string;
};

const SelectItem = (props: Props) => {
    const { label, value } = props;
    return (
        <SelectItemStyled value={value}>
            <Select.ItemText>{label}</Select.ItemText>
        </SelectItemStyled>
    );
};

export { SelectItem };
