import * as Select from "@radix-ui/react-select";
import styled from "styled-components";

export const SelectViewport = styled(Select.Viewport)`
    display: grid;
    gap: 0.2rem;
    grid-template-columns: repeat(3, 1fr);
`;
