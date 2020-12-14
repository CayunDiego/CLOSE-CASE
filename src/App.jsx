import GlobalStyle from './themes/GlobalStyle';
import { Route } from 'wouter';
import {
  Calendar,
  CaseProfile,
  Home,
  LayoutBase,
  Login,
  Onboarding,
  RecoverAccount,
  Splash,
  Sigup,
  UserProfile
} from './pages';


function App() {
  return (
    <>
      <GlobalStyle/>
      <LayoutBase>
          <Route path="/" component={Splash}/>
          <Route path="/auth/login" component={Login}/>
          <Route path="/auth/sigup" component={Sigup}/>
          <Route path="/auth/recover" component={RecoverAccount}/>
          <Route path="/home" component={Home}/>
          <Route path="/onboarding" component={Onboarding}/>
          <Route path="/calendar" component={Calendar}/>
          <Route path="/profile/case" component={CaseProfile}/>
          <Route path="/profile/user" component={UserProfile}/>
      </LayoutBase>
    </>
  );
}

export default App;
