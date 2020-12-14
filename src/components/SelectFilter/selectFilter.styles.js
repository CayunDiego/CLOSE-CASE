import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const SelectFilterStyled = styled.div`
    min-width: 10.1875rem;
    height: 1.75rem;
    cursor: pointer;
    user-select: none;
    appearance: none;
    outline: none;
    z-index: 10;
`;

export const SelectStyled = styled.div`
    font-size: .875rem;
    font-weight: ${typography.weights.regular};
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: ${colors.white};
    background-color: ${({show}) => show ? colors.blue.base : colors.blue.base};
    border-radius: ${({show}) => show ? '6px 6px 0 0' : '6px 6px 6px 6px'};
`;

export const SelectedOption = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;


export const SelectBox = styled.nav`
    z-index: 200;
    display: ${({show}) => show ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-between;
`;

export const OptionsStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonOptionStyled = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${colors.blue.light};
  border: 2px solid #898989;
  font-size: .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  :last-child{
    border-radius: 0 0 6px 6px;
  }
`;


//button
export const ArrowStyled = styled.i`
    box-sizing: border-box;
    text-align: center;
    font-size: 1.2rem;
    padding-right: .5rem;
    transition: all 1s;
`;

export const IconStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 0 .5rem;
    > svg {
        width: 18px;
        height: 18px;
    }
`;

export const NameStyle = styled.p`
   
`;

export const LabelStyled = styled.label`
    font-size: 1.125rem;
    font-weight:  ${typography.weights.regular};
    cursor: pointer;
`;