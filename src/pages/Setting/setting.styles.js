import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const SettingStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const ContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 2.3125rem;
    > :nth-child(2){
        border-top: 0.5px solid #656565;
    }
    >h2{
        font-size: 1.5rem;
        font-weight: ${typography.weights.light};
        line-height: 1.75rem;
        align-self: flex-start;
        padding: 1rem 2.3125rem; 
    }
`;

export const ButtonStyled = styled.button`
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    outline: 0;
    width: 100%;
    border-bottom: 0.5px solid #656565;
    background-color: transparent;
    padding: .8125rem 2.3125rem;
    >p{
        font-size: 1.125rem;
        font-weight: ${typography.weights.light};
        line-height: 1.3125rem;
        letter-spacing: 0em;
        color: #777777;
    }
    :hover{
        border-bottom: 0.6px solid ${colors.grey.dark};
    }
    :active {
        background-color: ${colors.grey.light};
    }
`;

export const ButtonsLogout = styled.button`
    outline: 0;
    width: auto;
    background-color: transparent;
    padding: .5rem; 
    font-size: 1.125rem;
    font-weight: ${typography.weights.regular};
    line-height: 1.3125rem;
    letter-spacing: 0em;
    color: #777777;
    align-self: flex-end;
    position: absolute;
    bottom: 0;
    border: none;
    :hover{
        color: ${colors.grey.dark};
    }
    :active{
        background-color: ${colors.grey.light};
    }
`;