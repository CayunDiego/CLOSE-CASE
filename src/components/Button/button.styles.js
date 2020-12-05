import styled, {css} from 'styled-components';
import { colors, typography } from '../../themes';

export const ButtonStyled = styled.button`
    font-family:  ${typography.fonts.base};
    font-weight:  ${typography.weights.regular};
    font-size: 1.125rem;  
    padding: .625rem 2.875rem;
    border-radius: 5px;
    border: none;
    width: 100%;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({color}) => changeColors(color)};
    ${({size}) => sizes(size)}
`;

const changeColors = color => {
    switch (color) {
        case 'primary':
            return (
                (css`
                    background-color: ${colors.yellow.base};
                    color: ${colors.white};
                    &:hover{
                        /* background-color: ${colors.secondary}; */
                    }
                `)
              )
        case 'secondary':
            return (
                (css`
                    background-color: ${colors.blue.base};
                    color: ${colors.white};
                    &:hover{
                        /* background-color: ${colors.grey}; */
                    }
                `)
            )
    }
}

const sizes = size => {
        switch (size) {
            case 'small':
                return (
                    (css`
                        padding: .625rem .1875rem;
                        width: 7rem;
                        height: 1.625rem;
                    `)
                  )
            case 'medium':
                return (
                   ( css`
                        padding: .625rem 1.8125rem;
                        width: 8.125rem;
                        height: 2.625rem;
                    `)
                )
            case 'large':
                return (
                    (css`
                        padding: .625rem 2.9375rem;
                        width: 10.6875rem;
                        height: 2.625rem;
                    `)
                )
            default: return (
                    (css`
                        padding: .625rem .1875rem;
                        width: 7rem;
                        height: 1.625rem;
                    `)
                )
        }
}