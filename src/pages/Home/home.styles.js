import styled from 'styled-components';

export const HomeStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media (max-height: 640px) {
        margin: 0 0 2rem 0;
        height: 80vh;
    }
    @media (max-height: 623px) {
        margin: 2rem 0 3rem 0;
        height: 80vh;
    }
`;

export const ButtonsGridStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.375rem;
    row-gap: .8rem;
    padding: 1rem 0;
`;
