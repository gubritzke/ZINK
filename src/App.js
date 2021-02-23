import React from 'react';
import Routes from './routes'; 

import './assets/scss/main.scss'
import './assets/scss/main-responsive.scss'
import './assets/scss/bootstrap/bootstrap.scss'
import './assets/scss/bootstrap/bootstrap-reboot.scss'
import './assets/scss/bootstrap/bootstrap-grid.scss'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";




function App() {
  return (
    <body>
      <Routes />
    </body>
    
  );
}

export default App;

