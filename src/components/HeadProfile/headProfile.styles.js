import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const HeadProfileContainer = styled.div`
    width: 100%;
    height: 8.5rem;
    > :last-child{
        align-self: center;
    }
    margin-bottom: 2rem;
`;

export const Background = styled.div`
    padding: 0.7rem 1rem;
    width: 100%;
    height: 80%;
    background-color: ${colors.blue.base};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TopContainer = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    margin-top: -2rem;
    background-color: ${colors.blue.base};
    > p{
        color: ${colors.white};
        font-size: ${typography.sizes.p};
        font-family: ${typography.fonts.base};
        font-weight: ${typography.weights.extraLight};
        line-height: 16px;
        align-self: flex-end;
    }
`;

export const StyledH1 = styled.h1`
    color: ${colors.white};
    font-size: ${typography.sizes.h1};
    font-family: ${typography.fonts.base};
    font-weight: ${typography.weights.light};
    text-align: center;
    margin-top: 5px;
`;

export const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p{
        color: ${colors.white};
        font-size: ${typography.sizes.p};
        font-family: ${typography.fonts.base};
        font-weight: ${typography.weights.regular};
    }
`;
