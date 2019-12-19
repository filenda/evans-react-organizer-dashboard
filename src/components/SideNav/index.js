import React, { Component } from 'react';

// import { Container } from './styles';

class SideNav extends Component {
  render() {
    return (
      <aside class="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square">
        <div class="brand-sidebar">
          <h1 class="logo-wrapper">
            <a class="brand-logo darken-1" href="index.html">
              <img
                src="app-assets/images/logo/materialize-logo-color.png"
                alt="materialize logo"
              />
              <span class="logo-text hide-on-med-and-down">EVANS</span>
            </a>
            <a class="navbar-toggler" href="#">
              <i class="material-icons">radio_button_checked</i>
            </a>
          </h1>
        </div>
        <ul
          class="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow"
          id="slide-out"
          data-menu="menu-navigation"
          data-collapsible="menu-accordion"
        >
          <li class="navigation-header">
            <a class="navigation-header-text">Olá, Nome Perfil</a>
            <i class="navigation-header-icon material-icons">more_horiz</i>
          </li>
          <li class="active bold">
            <a class="waves-effect waves-cyan " href="#">
              <i class="material-icons">settings_input_svideo</i>
              <span class="menu-title" data-i18n="">
                Dashboard
              </span>
            </a>
          </li>
          <li class="bold">
            <a class="collapsible-header waves-effect waves-cyan " href="#">
              <i class="material-icons">dvr</i>
              <span class="menu-title" data-i18n="">
                Financeiro
              </span>
            </a>
            <div class="collapsible-body">
              <ul
                class="collapsible collapsible-sub"
                data-collapsible="accordion"
              >
                <li>
                  <a
                    class="collapsible-body waves-effect waves-cyan"
                    href="#"
                    data-i18n=""
                  >
                    <i class="material-icons">radio_button_unchecked</i>
                    <span>Vendas a Receber</span>
                  </a>
                </li>
                <li>
                  <a
                    class="collapsible-body waves-effect waves-cyan"
                    href="#"
                    data-i18n=""
                  >
                    <i class="material-icons">radio_button_unchecked</i>
                    <span>Saques</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="bold">
            <a class="waves-effect waves-cyan " href="app-email.html">
              <i class="material-icons">agenda</i>
              <span class="menu-title" data-i18n="">
                Agenda
              </span>
            </a>
          </li>
          <li class="bold">
            <a class="waves-effect waves-cyan " href="app-chat.html">
              <i class="material-icons">links</i>
              <span class="menu-title" data-i18n="">
                Links
              </span>
            </a>
          </li>

          <li class="bold deskhidden">
            <a class="waves-effect waves-light btn mb-1 gradient-45deg-purple-deep-orange z-depth-4 mr-1 mb-2">
              <i
                class="material-icons left"
                style={{ fontSize: '16px', position: 'initial' }}
              >
                content_copy
              </i>{' '}
              Meu Cardápio
            </a>
          </li>
          <li class="bold deskhidden">
            <a
              class="waves-effect waves-light btn mb-1 z-depth-4 mr-1 mb-2"
              style={{ background: '#fff', color: '#6827a1' }}
            >
              <i
                class="material-icons left"
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
        <div class="navigation-background"></div>
        <a
          class="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only"
          href="#"
          data-target="slide-out"
        >
          <i class="material-icons">menu</i>
        </a>
      </aside>
    );
  }
}

export default SideNav;
