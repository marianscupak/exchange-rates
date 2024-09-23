import styled from "styled-components";

type Props = {
    height?: string;
};
export const Loading = styled.div<Props>`
    min-height: ${(props) => props.height || "2rem"};
    width: 100%;

    background: linear-gradient(110deg, var(--grey200) 8%, var(--white-smoke) 18%, var(--grey200) 33%);
    border-radius: 0.5rem;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;

    opacity: 0.5; // to have it a bit lighter

    @keyframes loading {
        0% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0 50%;
        }
    }

    @keyframes shine {
        to {
            background-position-x: -200%;
        }
    }
`;
