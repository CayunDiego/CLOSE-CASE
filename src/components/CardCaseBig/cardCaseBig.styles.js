import styled, {css} from 'styled-components';
import { colors , typography } from '../../themes';

export const CardCaseBigStyled = styled.div`
    width: 90%;
    height: 13.8125rem;
    background: ${colors.blue.base};
    border-radius: 10px;
    padding: 1.91rem .9rem .8125rem .9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const DisplayStyled = styled.div`
    width: 9.2575rem;
    height: 1.7175rem;
    background: ${colors.grey.light};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: .875rem;
    font-weight: ${typography.weights.regular};
    padding: .625rem 0;
`;

