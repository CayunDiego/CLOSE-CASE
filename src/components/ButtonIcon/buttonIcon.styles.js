import styled, {css} from 'styled-components';
import { colors } from '../../themes';

export const ButtonStyled = styled.button`
    border: none;
    width: 100%;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    ${({size}) => sizes(size)};
`;

export const IconStyled = styled.div`
    width: 100%;
    >svg{
        fill: ${({color}) => changeColors(color)};
    }
`;

const changeColors = color => {
    switch (color) {
        case 'primary':
            return (`${colors.white}`)
        case 'secondary':
            return ( `${colors.grey.dark}`)
        case 'tertiary':
            return (`${colors.blue.base}`)
    }
}

const sizes = size => {
        switch (size) {
            case 'small':
                return (
                    (css`
                        width: 1.9rem;
                        height: 1.9rem;
                    `)
                  )
            case 'medium':
                return (
                   ( css`
                        width: 3.1875rem;
                        height: 3.1875rem;
                    `)
                )
            case 'large':
                return (
                    (css`
                        width: 4.8125rem;
                        height: auto;
                    `)
                )
            default: return (
                    (css`
                        width: 1.9rem;
                        height: 1.9rem;
                    `)
                )
        }
}