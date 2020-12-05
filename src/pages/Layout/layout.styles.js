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
