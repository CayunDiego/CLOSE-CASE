import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const CardUserStyled = styled.div`
    position: absolute;
    bottom: 0;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-size: 1rem;
    padding: .51625rem;
    cursor: pointer;
`;

export const TxtStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    h2{
        font-size: ${typography.sizes.h2};
        color: ${colors.blue.light};
    }
    p{
        font-size: ${typography.sizes.p};
        color: #5B5B5B;
    }
`;