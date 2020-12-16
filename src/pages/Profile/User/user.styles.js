import styled from 'styled-components';
import { colors, typography } from '../../../themes';

export const CaseProfileContainer = styled.div`
    width: 100%;
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
`;

export const StyledLi = styled.li`
    font-family: ${typography.fonts.base};
    font-weight: ${typography.weights.regular};
    font-size: ${typography.sizes.p};
    list-style: none;
    display: flex;
    align-items: center;
    line-height: 16px;
    color: ${colors.grey.extraDark};
    &::before{
        content: "•";
        color: ${colors.blue.base};
        width: 1rem;
        font-size: 1.8rem;
    }
`;
