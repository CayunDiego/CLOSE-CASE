import styled from 'styled-components';
import { colors, typography } from '../../../themes';

export const CaseProfileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const StyledLi = styled.li`
    font-family: ${typography.fonts.base};
    font-weight: ${typography.weights.regular};
    font-size: ${typography.sizes.p};
    list-style: none;
    display: flex;
    align-items: center;
    line-height: 16px;
    &::before{
        content: "•";
        color: ${colors.blue.base};
        width: 1rem;
        font-size: 1.8rem;
    }
`;

export const IconsContainer = styled.div`
    width: 90%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
`;

export const IconStyled = styled.button`
    width: 4.70rem;
    height: 4.47rem;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    >svg{
        fill: ${colors.blue.base};
        width: 100%;
        height: 100%;
    }
`;

export const LastContainer = styled.div`
    margin: 2rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ImgDocumentStyled = styled.img`
    margin-top: 2rem;
`;

export const MainButtonsContainer = styled.div`
    width: 100%;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FirstButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
`;
