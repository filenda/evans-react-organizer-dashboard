import React from 'react';

// import { Container } from './styles';

export default function Header() {
  return (
    <header className="page-topbar" id="header">
      <div className="navbar navbar-fixed">
        <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow">
          <div className="nav-wrapper">
            <div className="header-search-wrapper hide-on-med-and-down">
              <i className="material-icons">search</i>
              <a className="waves-effect waves-light btn mb-1 gradient-45deg-purple-deep-orange z-depth-4 mr-1 mb-2">
                <i
                  className="material-icons left"
                  style={{ fontSize: '16px', position: 'initial' }}
                >
                  content_copy
                </i>{' '}
                Meu Cardápio
              </a>
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
            </div>
            <ul className="navbar-list right">
              <li className="hide-on-med-and-down">
                <a
                  className="waves-effect waves-block waves-light toggle-fullscreen"
                  href="javascript:void(0);"
                >
                  <i className="material-icons">settings_overscan</i>
                </a>
              </li>
              <li>
                <a
                  className="waves-effect waves-block waves-light profile-button"
                  href="javascript:void(0);"
                  data-target="profile-dropdown"
                >
                  <span className="avatar-status avatar-online">
                    <img
                      src="app-assets/images/avatar/avatar-7.png"
                      alt="avatar"
                    />
                    <i></i>
                  </span>
                </a>
              </li>
            </ul>

            <ul className="dropdown-content" id="profile-dropdown">
              <li>
                <a
                  className="grey-text text-darken-1"
                  href="user-profile-page.html"
                >
                  <i className="material-icons">person_outline</i> Perfil
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a className="grey-text text-darken-1" href="user-login.html">
                  <i className="material-icons">keyboard_tab</i> Sair
                </a>
              </li>
            </ul>
          </div>
          <nav className="display-none search-sm">
            <div className="nav-wrapper">
              <form>
                <div className="input-field">
                  <a className="waves-effect waves-light btn mb-1 gradient-45deg-purple-deep-orange z-depth-4 mr-1 mb-2">
                    <i
                      className="material-icons left"
                      style={{ fontSize: '16px', position: 'initial' }}
                    >
                      content_copy
                    </i>{' '}
                    Meu Cardápio
                  </a>
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
                </div>
              </form>
            </div>
          </nav>
        </nav>
      </div>
    </header>
  );
}
