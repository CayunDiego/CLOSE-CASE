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
