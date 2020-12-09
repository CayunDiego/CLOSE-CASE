import styled, {css} from 'styled-components';
import { colors } from '../../themes';

export const AvatarStyled = styled.div`
    background: #FFFFFF;
    border: 0.5px solid #898989;
    border-radius: 50%;
    overflow: hidden;
    ${({size}) => sizes(size)};
`;

export const ImgStyled = styled.img`
`;

const sizes = size => {
    switch (size) {
        case 'small':
            return (
                (css`
                    width: 7rem;
                    height: 1.625rem;
                `)
              )
        case 'medium':
            return (
               ( css`
                    width: 3.125rem;
                    height: 3.125rem;
                `)
            )
        case 'large':
            return (
                (css`
                    width: 6.25rem;
                    height: 6.25rem;
                `)
            )
        default: return (
                (css`
                    width: 2rem;
                    height: 2rem;
                `)
            )
    }
}