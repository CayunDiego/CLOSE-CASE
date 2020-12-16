import styled from 'styled-components';
import { colors } from '../../themes';

export const SearchStyled = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #898989;
    border-radius: 6px;
    height: 1.9375rem;
    overflow: hidden;
`;

export const InputStyled = styled.input.attrs({ type: 'text' })`
  cursor: pointer;
  margin-bottom: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  transition: .3s;
  padding: 0 1rem;
  padding-left: 4rem;
  &:focus {
    
  }
`
export const IconStyled = styled.div`
    position: absolute;
    left: 0;
    padding: 1rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 1.8rem;
    height: 1.8rem;
    border-right: 1px solid #898989;
    >svg{
        fill: #898989;
        width: 1.43rem;
        height: 1.43rem;
    }
`;
