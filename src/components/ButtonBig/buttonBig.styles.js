import styled, {css} from 'styled-components';
import { colors, typography } from '../../themes';

export const ButtonStyled = styled.button`
    font-family:  ${typography.fonts.base};
    font-weight:  ${typography.weights.regular};
    font-size: .8rem;  
    color: ${colors.white};
    padding: 1.25rem 1rem;
    border-radius: 22px;
    border: 2px solid ${colors.white};
    width: 8.875rem;
    height: 8.875rem;
    outline: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.blue.base};
`;

export const IconStyled = styled.div`
    width: 80%;
    >svg{
        fill: ${colors.white};
    }
`;
