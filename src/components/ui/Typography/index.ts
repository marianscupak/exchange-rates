import styled from "styled-components";

const Centered = styled.div`
    text-align: center;
`;

const Small = styled.small`
    color: var(--dim-grey);
    display: block;
`;

const Prompt = styled.div`
    margin: 0;
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: 0.04em;
    color: var(--black);
`;

const Hint = styled.em`
    font-style: normal;
    color: var(--dim-grey);
    font-weight: 500;
`;
const Typography = {
    Centered: Centered,
    Small: Small,
    Prompt: Prompt,
    Hint: Hint,
};

export { Typography };
