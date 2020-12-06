import GlobalStyle from './themes/GlobalStyle';
import { Route } from 'wouter'
import { LayoutBase } from './pages';
import { Button, ButtonIcon } from './components';
import { File } from './components/icons';

function App() {
  return (
    <>
      <GlobalStyle/>
      <LayoutBase>
        <Button>
          ACEPTAR
        </Button>
        <ButtonIcon>
          <File/>
        </ButtonIcon>
      </LayoutBase>
    </>
  );
}

export default App;
