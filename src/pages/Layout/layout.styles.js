import styled from 'styled-components';
import { breakpoints, colors } from '../../themes';

export const LayoutStyled = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const ContainerStyled = styled.div`
    box-shadow: 0 5px 25px rgba(0,0,0,.3);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
    box-sizing: border-box;
        @media (min-width: ${breakpoints.mobile}){
            height: 90vh;
            width: ${breakpoints.maxMobile};
            border-radius: 10px;
    }
`;

export const LayoutMainStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${({color}) => color ? colors.blue.gradient : colors.white};
`;

export const ContainerMainStyled = styled.main`
    height: 100%;
    width: 100%;
    border: 1px solid blue;
    overflow-y: auto;
    display:  flex;
    ::-webkit-scrollbar {
        -webkit-appearance: none;
    }
    ::-webkit-scrollbar:vertical {
        width:2px;
    }
    ::-webkit-scrollbar-button:increment {
        display: none;
    }
    ::-webkit-scrollbar-button {
        display: none;
    }
    ::-webkit-scrollbar:horizontal {
        height: 2px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${colors.grey};
        border-radius: 20px;
        /* border: 2px solid #f1f2f3; */
    }
    ::-webkit-scrollbar-track {
        border-radius: 8px;
    }
`;


export const LayoutAuthStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background:  ${colors.white};
`;

export const IconStyled = styled.div`
  
`;

export const HeaderStyled = styled.div`
    box-shadow: 0px 0px 6px -4px rgba(0,0,0,0.75);
    min-height: 7.5625rem;
    width: 100%;
    z-index: 100;
`;

export const ContaineHeaderStyled = styled.div`
    position: relative;
    top: 2.5625rem;
    width: 100%;
    height: 3.4375rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${colors.blue.base};
    padding: .8125rem .9375rem;
    border-top: 2px solid ${colors.white};
    border-bottom: 2px solid ${colors.white};
`;

export const FooterStyled = styled.div`
    height: 4.5625rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: .1em 1.125rem;
`;