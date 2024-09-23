import * as Select from "@radix-ui/react-select";
import styled from "styled-components";

export const SelectTrigger = styled(Select.Trigger)`
    background-color: transparent;
    padding: 1rem;
    margin-right: -1rem;
    border: none;
    letter-spacing: 0.04em;
    font-size: 1.2rem;
    color: var(--black);
    cursor: pointer;
`;
