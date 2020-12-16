import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const BackdropStyled = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background: rgba(0,0,0,0.3);
    z-index: 100;
`;

export const SideDrawerStyled = styled.nav`
    height: 100%;
    background: ${colors.white};
    position: fixed;
    top: 0;
    left: 0;
    width: 12.9375rem;
    max-width: 300px;
    z-index: 200;
    transform: ${({show}) => show ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
`;

export const ContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FooterStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .5625em;
    >button{
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        outline: 0;
        width: 100%;
        background-color: transparent;
        padding: .8125rem; 
        font-size: 1.125rem;
        font-weight: ${typography.weights.regular};
        line-height: 1.3125rem;
        letter-spacing: 0em;
        color: #777777;
        :hover{
            color: ${colors.grey.dark};
        }
        :active{
            background-color: ${colors.grey.light};
        }
    }
`;

export const HeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 8.5rem;
    width: 100%;
    padding: .5625em;
    background: url('/assets/Rectangle4.svg') no-repeat;
    position: relative;
`;
