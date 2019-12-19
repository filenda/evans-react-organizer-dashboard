import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/* begin - third party styles */
import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css/animate.min.css';
import 'chartist/dist/chartist.min.css';
/* end - third party styles */

/* begin - third paty scripts */
import 'chart.js/dist/Chart.min';
import 'chartist/dist/chartist.min';
import 'chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min';
import 'chartist-plugin-fill-donut/dist/chartist-plugin-fill-donut.min';
import 'datatables.net/js/jquery.dataTables.min';
import 'datatables.net-responsive/js/dataTables.responsive.min';
import 'datatables.net-select/js/dataTables.select.min';
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
