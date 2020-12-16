import styled from 'styled-components';
import { colors } from '../../themes';

export const HeaderStyled = styled.header`
    min-height: 7.5625rem;
    width: 100%;
    z-index: 100;
`;

export const ContainerStyled = styled.div`
    position: relative;
    top: 2.5625rem;
    width: 100%;
    height: 3.4375rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.blue.base};
    padding: .8125rem .9375rem;
    border-top: 2px solid ${colors.white};
    border-bottom: 2px solid ${colors.white};
`;

export const ImgStyled = styled.img`
    width: 8rem;
    height: auto;
`;