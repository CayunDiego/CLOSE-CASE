import styled from 'styled-components';
import { colors } from '../../themes';

export const FooterNavbarStyled = styled.nav`
    height: 4.5625rem;
    /* border-top: 2px solid #eee;  */
    position: sticky;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .1em;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const ContainerStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
`;
