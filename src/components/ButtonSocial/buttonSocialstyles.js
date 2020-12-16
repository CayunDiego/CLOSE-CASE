import styled, {css} from 'styled-components';
import { colors, typography } from '../../themes';

export const ButtonStyled = styled.button`
    font-family:  ${typography.fonts.base};
    font-weight:  ${typography.weights.regular};
    font-size: .875rem;
    color: ${colors.white};
    padding: .625rem 1rem;
    width: 14.125rem;
    height: 2.8125rem;
    outline: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #7A7A7A;
    cursor: pointer;
    border: 1px solid #DCDCDC;
    box-shadow: -2px 4px 4px rgba(7, 70, 138, 0.2);
    border-radius: 5px;
    line-height: 16px;
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
