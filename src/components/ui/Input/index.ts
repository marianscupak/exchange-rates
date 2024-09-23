import styled from "styled-components";

export const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--indigo);
    outline: none;
    display: inline;
    margin: 0 1rem;
    text-align: right;
    letter-spacing: 0.03rem;
    color: var(--indigo);
    font-size: 1.8rem;

    @media (max-width: 566px) {
        max-width: 150px;
    }
`;
