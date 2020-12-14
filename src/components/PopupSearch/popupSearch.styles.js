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

export const PopupContainerStyled = styled.div`
        width: 23.6925rem;
        height: 23.5625rem; 
        background: ${colors.white} 0% 0% no-repeat padding-box;
        border-radius: 20px;
        opacity: 1;
        padding: 1.125rem .9375rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        z-index: 251;
`;

export const IconStyled = styled.div`
    width: 1.43rem;
    height: 1.43rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    >svg{
        width: 1.4rem;
        height: 1.4rem;
        fill: ${colors.white};
    }
`;

export const SearchStyled = styled.div`
    width: 90%;
    min-height: 6.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1.5625rem;
`;

export const FilterContainerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ListCaseSearch = styled.div`
    width: 90%;
    height: 5rem;
    background-color: ${colors.grey.base}; 
`;
