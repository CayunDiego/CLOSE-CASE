import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const CardInformationContainer = styled.div`
    border: 3px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    background-color: ${colors.white};
    width: 90%;
    height: 50%;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;
    > :last-child {
        margin-left: 10%;
    }
`;

export const IconStyled = styled.div`
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 1rem;
    >svg{
        fill: ${colors.white};
        width: 1.8rem;
        height: 1.8rem;
    }
`;

export const H2Styled = styled.h2`
    font-family: ${typography.fonts.base};
    font-weight: ${typography.weights.regular};
    font-size: ${typography.sizes.h2};
`;

export const Icon2Styled = styled.button`
    width: 1.8rem;
    height: 1.8rem;
    align-self: flex-end;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    >svg{
        fill: ${colors.white};
        width: 1.8rem;
        height: 1.8rem;
    }
`;
