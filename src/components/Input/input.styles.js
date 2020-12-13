import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const InputContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 4.1875rem;
`;

export const LabelStyled = styled.label`
    font-size: 1.125rem;
    font-weight:  ${typography.weights.regular};
    cursor: pointer;
`;

export const InputStyled = styled.input`
    background: ${colors.grey.base};
    border-radius: 5px;
    height: 2.875rem;
    width: 100%;
    border: none;
    padding: .75rem .625rem;
    outline: 0;
    transition: border-color 0.2s;
    font-size: 1.125rem;
    &&:focus {
        border: 2px solid ${colors.grey.dark};
    }
`;