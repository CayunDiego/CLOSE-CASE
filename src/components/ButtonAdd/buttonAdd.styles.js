import styled, {css} from 'styled-components';
import { colors, typography } from '../../themes';

export const ButtonStyled = styled.button`
    font-family:  ${typography.fonts.base};
    font-weight:  ${typography.weights.regular};
    font-size: 1.125rem;
    color: ${colors.blue.light};
    padding: .625rem 1rem;
    border-radius: 1.375rem;
    border: 2px solid ${colors.white};
    width: 16.3125rem;
    height: 3.25rem;
    outline: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.white};
    cursor: pointer;
`;

export const IconStyled = styled.div`
    width: 2rem;
    height: 2rem;
    >svg{
        fill: ${colors.blue.light};
        width: 2rem;
        height: 2rem;
    }
`;
