import React from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import SubmittedScreen from './components/SubmittedScreen';
import Masthead from './components/Masthead';

import AppContext, {useApplicationData} from './store';

const Page = () => {
  const {activeStep, applicationSubmitted} = useApplicationData();

  if(applicationSubmitted) return <SubmittedScreen />

  return (
    <div className='Main-layout'>
      <Masthead />
      {activeStep === null ? <WelcomeScreen /> :  <div className='Page-layout'>
        <Sidebar />
        <Main />
      </div>}
    </div>
  )
}

function App() {
  return (
    <AppContext>
      <Page />
    </AppContext>
  );
}

export default App;
