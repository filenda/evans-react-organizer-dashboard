import React from 'react';

// import { Container } from './styles';

export default function Header() {
  return (
    <header class="page-topbar" id="header">
      <div class="navbar navbar-fixed">
        <nav class="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow">
          <div class="nav-wrapper">
            <div class="header-search-wrapper hide-on-med-and-down">
              <i class="material-icons">search</i>
              <a class="waves-effect waves-light btn mb-1 gradient-45deg-purple-deep-orange z-depth-4 mr-1 mb-2">
                <i
                  class="material-icons left"
                  style={{ fontSize: '16px', position: 'initial' }}
                >
                  content_copy
                </i>{' '}
                Meu Cardápio
              </a>
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
            </div>
            <ul class="navbar-list right">
              <li class="hide-on-med-and-down">
                <a
                  class="waves-effect waves-block waves-light toggle-fullscreen"
                  href="javascript:void(0);"
                >
                  <i class="material-icons">settings_overscan</i>
                </a>
              </li>
              <li>
                <a
                  class="waves-effect waves-block waves-light profile-button"
                  href="javascript:void(0);"
                  data-target="profile-dropdown"
                >
                  <span class="avatar-status avatar-online">
                    <img
                      src="app-assets/images/avatar/avatar-7.png"
                      alt="avatar"
                    />
                    <i></i>
                  </span>
                </a>
              </li>
            </ul>

            <ul class="dropdown-content" id="profile-dropdown">
              <li>
                <a
                  class="grey-text text-darken-1"
                  href="user-profile-page.html"
                >
                  <i class="material-icons">person_outline</i> Perfil
                </a>
              </li>
              <li class="divider"></li>
              <li>
                <a class="grey-text text-darken-1" href="user-login.html">
                  <i class="material-icons">keyboard_tab</i> Sair
                </a>
              </li>
            </ul>
          </div>
          <nav class="display-none search-sm">
            <div class="nav-wrapper">
              <form>
                <div class="input-field">
                  <a class="waves-effect waves-light btn mb-1 gradient-45deg-purple-deep-orange z-depth-4 mr-1 mb-2">
                    <i
                      class="material-icons left"
                      style={{ fontSize: '16px', position: 'initial' }}
                    >
                      content_copy
                    </i>{' '}
                    Meu Cardápio
                  </a>
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
                </div>
              </form>
            </div>
          </nav>
        </nav>
      </div>
    </header>
  );
}
