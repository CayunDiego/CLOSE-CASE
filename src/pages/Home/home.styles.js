import styled from 'styled-components';

export const HomeStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const ButtonsGridStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.375rem;
    row-gap: .8rem;
`;
