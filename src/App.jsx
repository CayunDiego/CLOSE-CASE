import GlobalStyle from './themes/GlobalStyle';
import { Route } from 'wouter'
import { LayoutBase } from './pages';
import { Footer, Header } from './components';
import { File } from './components/icons';

function App() {
  return (
    <>
      <GlobalStyle/>
      <LayoutBase>
        <Header/>
        <Footer/>
      </LayoutBase>
    </>
  );
}

export default App;
