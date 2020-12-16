import styled from 'styled-components';
import { colors, typography } from '../../themes';


export const PopupSearchStyled = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    z-index: 250;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PopupClickCancel = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 251;
`;

export const PopupContainerStyled = styled.div`
        width: 20.88rem;
        height: 17.1344rem; 
        background: ${colors.blue.base} 0% 0% no-repeat padding-box;
        border-radius: 22px;
        opacity: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        z-index: 252;
        overflow: hidden;
`;

export const HeaderStyled = styled.div`
    width: 100%;
    min-height: 2.5625rem;
    border-bottom: 2px solid ${colors.white};
    display: flex;
    align-items: center;
    >p{
        font-size: 1.25rem;
        line-height: 21px;
        color: ${colors.white};
    }
`;

export const ContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 1.2rem;
    display: flex;
    flex-direction: column;
`;

export const FooterStyled = styled.div`
    width: 100%;
    min-height: 2.5625rem;
    border-top: 2px solid ${colors.white};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    >p{
        font-size: .75rem;
        line-height: 21px;
        color: ${colors.white};
        margin-right: 1.625rem;
        line-height: 14px;
        letter-spacing: 0em;
    }
`;

export const IconStyled = styled.div`
    width: 1.51rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 1.625rem;
    margin-right: .5rem;
    >svg{
        width: 1.2rem;
        height: auto;
        fill: ${colors.white};
    }
`;

export const SharedGridStyled = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    row-gap: 1.1rem;
`;

export const UserSharedStyled = styled.div`
    display: flex;
    align-items: center;
    >p{
        color: ${colors.white};
        font-size: 1rem;
        margin-left: 1.5rem;
    }
`;

export const SelectTypeStyled = styled.div`
        color: ${colors.white};
        font-size: .75rem;
        text-align: end;
        width: 100%;
`;

export const CircleStyled = styled.div`
    width: 1.47375rem;
    height: 1.47375rem;
    background: #AD0000;
    font-size: .75rem;
    color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

export const InvitationStyled = styled.div`
    width: 100%;
    display:  flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 2.1875rem;
`;  

export const InputStyled = styled.div`
    background: ${colors.white};
    border: 1px solid ${colors.white};
    border-radius: 1px;
    width: 13rem;
    height: 1.5625rem;
    padding: .3125rem .625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >input{
        width: 100%;
        border: none;
        outline: none;
        :focus{
            border: none;
        }
    }
`;