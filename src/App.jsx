import GlobalStyle from './themes/GlobalStyle';
import { Route } from 'wouter'
import { Calendar,
         Home,
         LayoutBase, 
         Splash, 
         Onboarding } from './pages';


function App() {
  return (
    <>
      <GlobalStyle/>
      <LayoutBase>
          <Route path="/" component={Splash}/>
          <Route path="/home" component={Home}/>
          <Route path="/onboarding" component={Onboarding}/>
          <Route path="/calendar" component={Calendar}/>
      </LayoutBase>
    </>
  );
}

export default App;
