import styled, {css} from 'styled-components';
import { colors } from '../../themes';
import { Link } from 'wouter';

export const LoginStyled = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 3.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    >p{
        font-size: 1.125rem;
        color: #8D8D8D;
        line-height: 16px;
        letter-spacing: 0em;    
    }
`;

export const FormStyled = styled.form`
    margin-top: 1.5625rem;
    margin-bottom: 3.1258rem;
    width: 90%;
    display: grid;
    row-gap: 1.5625rem;
    justify-items: center;
`;


export const LinkSigup = styled(Link)(()=>{
    return css`
        text-decoration: underline ${colors.yellow.base};
        color: #8D8D8D;
        font-size: 1.125rem;
        margin-bottom: 3.25rem;
`
});

export const LinkRecover = styled(Link)(()=>{
    return css`
        text-decoration: none;
        color: #4D639D;
        font-size: .875rem;
        margin-bottom: 2.3125rem;
`
});