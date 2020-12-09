import GlobalStyle from './themes/GlobalStyle';
import { Route } from 'wouter'
import { LayoutBase, Splash } from './pages';


function App() {
  return (
    <>
      <GlobalStyle/>
      <LayoutBase>
        <Route path="/" component={Splash}/>
      </LayoutBase>
    </>
  );
}

export default App;
