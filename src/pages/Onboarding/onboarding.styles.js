import styled, {css} from 'styled-components';
import { colors, typography } from '../../themes';

export const OnboardingStyled = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr .2fr;
`;

export const OneStyled = styled.div`
  background: url('/assets/fotojet-2020-08-29t093710342.png') no-repeat;
  background-size: 100%;
  >button{
    border: none;
    background-color: transparent;
    outline: 0;
    position: absolute;
    top: 2.0625rem;
    right: 1rem;
    font-weight: ${typography.weights.regular};
    color: ${colors.blue.base};
    font-size: 1.125rem;
  }
`;

export const TwoStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  align-self: center;
  justify-self: center;
  >p{
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.3125rem;
    letter-spacing: 0em;
  }
`;

export const ThreeStyled = styled.div`
  display:  flex;
  justify-content: center;
  align-items: center;
`;

export const DotStyled = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${({color}) => color ? colors.blue.base : colors.grey.dark};
  border-radius: 50%;
  margin: .6875rem;
`;
