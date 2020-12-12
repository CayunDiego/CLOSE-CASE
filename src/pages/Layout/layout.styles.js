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
    border: 1px solid red;
    overflow-y: auto;
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
