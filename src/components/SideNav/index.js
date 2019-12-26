import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

class SideNav extends Component {
  render() {
    return (
      <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square">
        <div className="brand-sidebar">
          <h1 className="logo-wrapper">
            <a className="brand-logo darken-1" href="index.html">
              <img
                src="app-assets/images/logo/materialize-logo-color.png"
                alt="materialize logo"
              />
              <span className="logo-text hide-on-med-and-down">EVANS</span>
            </a>
            <a className="navbar-toggler" href="#">
              <i className="material-icons">radio_button_checked</i>
            </a>
          </h1>
        </div>
        <ul
          className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow"
          id="slide-out"
          data-menu="menu-navigation"
          data-collapsible="menu-accordion"
        >
          <li className="navigation-header">
            <a className="navigation-header-text">Olá, Nome Perfil</a>
            <i className="navigation-header-icon material-icons">more_horiz</i>
          </li>
          <li className="active bold">
            <Link to="/" className="waves-effect waves-cyan ">
              <i className="material-icons">settings_input_svideo</i>
              <span className="menu-title" data-i18n="">
                Home
              </span>
            </Link>
          </li>
          <li className="bold">
            <Link to="/Menu" className="waves-effect waves-cyan ">
              <i class="material-icons">restaurant_menu</i>
              <span className="menu-title" data-i18n="">
                Cardápio
              </span>
            </Link>
          </li>
          <li className="bold">
            <Link to="/Orders" className="waves-effect waves-cyan ">
              <i class="material-icons">menu_book</i>
              <span className="menu-title" data-i18n="">
                Pedidos
              </span>
            </Link>
          </li>
          <li className="bold">
            <a className="collapsible-header waves-effect waves-cyan " href="#">
              <i className="material-icons">dvr</i>
              <span className="menu-title" data-i18n="">
                Financeiro
              </span>
            </a>
            <div className="collapsible-body">
              <ul
                className="collapsible collapsible-sub"
                data-collapsible="accordion"
              >
                <li>
                  <a
                    className="collapsible-body waves-effect waves-cyan"
                    href="#"
                    data-i18n=""
                  >
                    <i className="material-icons">radio_button_unchecked</i>
                    <span>Vendas a Receber</span>
                  </a>
                </li>
                <li>
                  <a
                    className="collapsible-body waves-effect waves-cyan"
                    href="#"
                    data-i18n=""
                  >
                    <i className="material-icons">radio_button_unchecked</i>
                    <span>Saques</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="bold">
            <a className="waves-effect waves-cyan " href="app-email.html">
              <i className="material-icons">agenda</i>
              <span className="menu-title" data-i18n="">
                Agenda
              </span>
            </a>
          </li>
          <li className="bold">
            <a className="waves-effect waves-cyan " href="app-chat.html">
              <i className="material-icons">links</i>
              <span className="menu-title" data-i18n="">
                Links
              </span>
            </a>
          </li>

          <li className="bold deskhidden">
            <a className="waves-effect waves-light btn mb-1 gradient-45deg-purple-deep-orange z-depth-4 mr-1 mb-2">
              <i
                className="material-icons left"
                style={{ fontSize: '16px', position: 'initial' }}
              >
                content_copy
              </i>{' '}
              Meu Cardápio
            </a>
          </li>
          <li className="bold deskhidden">
            <a
              className="waves-effect waves-light btn mb-1 z-depth-4 mr-1 mb-2"
              style={{ background: '#fff', color: '#6827a1' }}
            >
              <i
                className="material-icons left"
                style={{
                  fontSize: '16px',
                  position: 'initial',
                  color: '#6827a1',
                }}
              >
                add
              </i>{' '}
              Criar Evento
            </a>
          </li>
        </ul>
        <div className="navigation-background"></div>
        <a
          className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only"
          href="#"
          data-target="slide-out"
        >
          <i className="material-icons">menu</i>
        </a>
      </aside>
    );
  }
}

export default SideNav;
