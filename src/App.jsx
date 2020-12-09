import GlobalStyle from './themes/GlobalStyle';
import { Route } from 'wouter'
import { LayoutBase, 
         Splash, 
         Onboarding } from './pages';


function App() {
  return (
    <>
      <GlobalStyle/>
      <LayoutBase>
          <Route path="/" component={Splash}/>
          <Route path="/onboarding" component={Onboarding}/>
      </LayoutBase>
    </>
  );
}

export default App;
