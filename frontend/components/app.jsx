import React from 'react';
import SessionFormContainer from './session/session_form_container';
import SplashContainer from './splash/splash_container';
import NavBarContainer from './navbar/navbar_container';
import SidebarContainer from './sidebar/sidebar_container';

const App = ({children}) => (
  <div className='app-container'>
    <SidebarContainer />
    <div className='app-children-container'>
      <NavBarContainer />
      {children}
    </div>
  </div>
);

export default App;
