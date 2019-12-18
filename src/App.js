import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/* begin - third party styles */
import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css/animate.min.css';
import 'chartist/dist/chartist.min.css';
/* end - third party styles */

/* begin - third paty scripts */
import 'chartist/dist/chartist.min';
/* end - third paty scripts */

import GlobalStyle from './styles/global';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideNav />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
