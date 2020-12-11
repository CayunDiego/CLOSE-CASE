import styled, {css} from 'styled-components';
import { colors, typography } from '../../themes';

export const TitleStyled = styled.div`
    background: ${colors.blue.base};
    border-radius: 3px;
    width: 90%;
    height: 2.0625rem;
    color: ${colors.white};
    font-size: 1.5rem;
    font-weight: ${typography.weights.regular};
    line-height: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
