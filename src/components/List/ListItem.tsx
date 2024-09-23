import styled from "styled-components";

export const ListItem = styled.div`
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 1.5rem;
    border-bottom: 1px solid var(--grey200);

    &:hover {
        background-color: var(--ghost-white);
        border-color: var(--indigo);
    }
    &:last-child {
        border-bottom: none;
    }
`;
