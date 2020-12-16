import styled, {css} from 'styled-components';
import { colors, typography } from '../../themes';
import { Link } from 'wouter';

export const StyledNavbarContainer = styled.div`
    width: 100%;
`;

export const StyledUl = styled.ul`
    height: auto;
    display: flex;
    justify-content: space-between;
`;

export const StyledLi = styled.li`
`;

export const TheLink = styled(Link)(({active}) => {
    return css`
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        list-style: none;
        width: 100%;
        padding: 0.5rem 1.8rem;
        font-size: ${typography.sizes.p};
        color: ${colors.white};
        font-family: ${typography.fonts.base};
        background-color: ${active ? colors.blue.base : colors.grey.extraDark};
        &:active{
            background-color: ${colors.blue.base};
        }
    `;
});
