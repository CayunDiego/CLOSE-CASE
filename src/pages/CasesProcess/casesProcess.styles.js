import styled, {css} from 'styled-components';
import { colors, typography } from '../../themes';

export const CasesProcessStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const ListCases = styled.div`
    padding: 1.6875rem 0;
    width: 100%;
    display: grid;
    row-gap: 1.5625rem;
    justify-items: center;
`;

