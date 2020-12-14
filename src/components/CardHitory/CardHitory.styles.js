import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const CardHitoryStyled = styled.button`
    border-radius: 5px 5px 0px 0px;
    width: 90%;
    height: 4.375rem;
    outline: 0;
    display: flex;
    background-color: ${colors.blue.light};
    border: none;
    cursor: pointer;
`;

export const ContainerStyled = styled.div`
    height: 100%;
    width: 100%; 
    border-radius: 5px 5px 0px 0px;
    background-color: ${colors.blue.base};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: .78125rem .9375rem;
`;

export const RowStyled = styled.div`
    font-family:  ${typography.fonts.base};
    font-weight:  ${typography.weights.regular};
    font-size: .875rem;  
    color: ${colors.white};
`;

export const IconStyled = styled.div`
    min-width: 4.375rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    >svg{
        fill: ${colors.white};
        height: 2.375rem;
    }
`;
