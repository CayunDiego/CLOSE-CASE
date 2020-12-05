import GlobalStyle from './themes/GlobalStyle';
import { Route } from 'wouter'
import { LayoutBase } from './pages';
import { Button } from './components';

function App() {
  return (
    <>
      <GlobalStyle/>
      <LayoutBase>
        <Button>
          ACEPTAR
        </Button>
      </LayoutBase>
    </>
  );
}

export default App;
