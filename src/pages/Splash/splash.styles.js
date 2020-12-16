import styled, {css} from 'styled-components';
import { colors } from '../../themes';

export const SplashStyled = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
`;

export const Row1 = styled.div`
  background: url('/assets/Vector1.svg') no-repeat;
  width: 100%;
  background-size: 117%;
`;

export const Row2 = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  >img{
    width: 90%;
  }
`;

export const Row3 = styled.div`
  background: url('/assets/Vector2.svg') no-repeat;
  width: 100%;
  background-size: 117%;
`;