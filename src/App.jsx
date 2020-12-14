import GlobalStyle from './themes/GlobalStyle';
import { Route } from 'wouter'
import { SearchContextProvider } from './context/searchContext';
import { 
         AddCase,
         AddressBook,
         Calendar,
         CaseHistory,
         CaseProfile,
         CasesProcess,
         Home,
         LayoutBase,
         Login,
         Notifications,
         Onboarding,
         RecoverAccount,
         Setting,
         Splash,
         Sigup,
         UserProfile
        } from './pages';

function App() {
  return (
    <>
      <GlobalStyle/>
      <LayoutBase>
          <SearchContextProvider>
            <Route path="/" component={Splash}/>
            <Route path="/auth/login" component={Login}/>
            <Route path="/auth/sigup" component={Sigup}/>
            <Route path="/auth/recover" component={RecoverAccount}/>
            <Route path="/home" component={Home}/>
            <Route path="/onboarding" component={Onboarding}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/caseHistory" component={CaseHistory}/>
            <Route path="/casesProcess" component={CasesProcess}/>
            <Route path="/addCase" component={AddCase}/>
            <Route path="/notifications" component={Notifications}/>
            <Route path="/addressBook" component={AddressBook}/>
            <Route path="/setting" component={Setting}/>
            <Route path="/profile/case" component={CaseProfile}/>
            <Route path="/profile/user" component={UserProfile}/>
          </SearchContextProvider>
      </LayoutBase>
    </> 
  );  
}

export default App;   
