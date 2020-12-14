import styled from 'styled-components';
import { colors } from '../../themes';

export const CardAddressBookStyled = styled.div`
    background: ${colors.blue.light};
    border-radius: 5px;
    height: 2.625rem;
    width: 17.125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .625rem .9375rem;
`;

export const DeleleStyled = styled.button`
    background: #FF0000;
    border: 0.5px solid #FFFFFF;
    min-width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    padding: .1rem;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextStyled = styled.p`
    font-size: 1.125rem;
    width: 100%;
    text-align: center;
    color: ${colors.white};
    line-height: 21px;
`;

export const IconStyled = styled.div`
    width: 100%;
    height: 100%;
    >svg{
        width: .7rem;
        height: .7rem;
        fill: ${colors.white};
    }
`;