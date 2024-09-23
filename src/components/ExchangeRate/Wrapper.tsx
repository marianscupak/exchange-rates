import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(36px, 76px) 1fr;
    gap: 0.8rem;
    margin: 0 auto;
    max-width: 492px;

    small {
        display: block;
        margin: 0.5rem 0;
    }

    @media (min-width: 566px) {
        gap: 1.6rem;
        align-items: center;
    }
`;
