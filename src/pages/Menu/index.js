import React, { Component } from 'react';
// import M from 'materialize-css';
import { Main } from './styles';
import promoEvans from '../../assets/images/promocoes_evans.jpg';
import maisVendidos from '../../assets/images/mais_vendidos.jpg';

class Menu extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    // M.AutoInit();
  }

  render() {
    return (
      <Main id="main">
        <div className="row">
          <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
          <div className="col s12">
            <div className="container">
              <div className="section section-data-tables">
                <div
                  className="breadcrumbs-dark pb-0 pt-4"
                  id="breadcrumbs-wrapper"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col s10 m6 l6">
                        <h5 className="breadcrumbs-title mt-0 mb-0">
                          Cardápio
                        </h5>
                        <ol className="breadcrumbs mb-0">
                          <li className="breadcrumb-item">
                            <a href="index.html">Dashboard</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="#">Cardápio</a>
                          </li>
                        </ol>
                      </div>
                      <div className="col s2 m6 l6">
                        <a
                          className="btn dropdown-settings waves-effect waves-light breadcrumbs-btn right"
                          href="#!"
                          data-target="dropdown1"
                        >
                          <i className="material-icons hide-on-med-and-up">
                            settings
                          </i>
                          <span className="hide-on-small-onl">Pedidos</span>
                          <i className="material-icons right">
                            arrow_drop_down
                          </i>
                        </a>
                        <ul
                          className="dropdown-content"
                          id="dropdown1"
                          tabIndex="0"
                        >
                          <li tabIndex="0">
                            <a
                              className="grey-text text-darken-2"
                              href="pedido.html"
                            >
                              Pedidos
                            </a>
                          </li>
                          <li tabIndex="0">
                            <a
                              className="grey-text text-darken-2"
                              href="cardapio.html"
                            >
                              Visão Geral
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="custom-evans-section-panel features-content">
            <div
              className="panel-header"
              style={{ borderBottom: '1px solid #ffffff' }}
            >
              <div className="row">
                <div className="col s4 m4 l4">
                  <a
                    onClick="LimparCardapio();"
                    href="JavaScript:void(0)"
                    className="btn custom-evans-btn btn-large btn-mobile isAdm disabled limparCardapio"
                    style={{ width: 'calc(100% - 50px)' }}
                  >
                    <i className="material-icons left">delete_forever</i>
                    <span>Limpar cardápio</span>
                  </a>
                </div>
                <div className="col s4 m4 l4">
                  <a
                    href="JavaScript:void(0)"
                    className="btn custom-evans-btn btn-large  btn-mobile isAdm maisBtnCardapio"
                    style={{ width: 'calc(100% - 50px)' }}
                  >
                    <i className="material-icons left">add</i>
                    <span>Novo item</span>
                  </a>
                </div>

                <div className="col s4 m4 l4">
                  <a
                    onClick="showImportMenuOptions();"
                    href="JavaScript:void(0)"
                    className="btn custom-evans-btn btn-large modal-trigger btn-mobile isAdm"
                    style={{ width: 'calc(100% - 50px)' }}
                  >
                    <i className="material-icons left">import_export</i>
                    <span>Importar</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{ background: 'transparent', boxShadow: 'none' }}
            >
              <div className="card-content" style={{ padding: '0px' }}>
                <div className="custom-evans-section-panel features-content">
                  <div className="panel-content">
                    <div className="row">
                      <div className="col s12">
                        <form className="custom-evans-form row busca">
                          <div className="input-field col s12">
                            <input
                              placeholder="O que está procurando?"
                              id="inputBusca"
                              type="text"
                              className="autocomplete"
                            />
                            <a
                              href=""
                              className="btn custom-evans-btn btn-large"
                            >
                              <i className="material-icons">search</i>
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="caption mb-0">Gerencie seus pedidos</p>
              </div>
            </div>
            <div className="row">
              <div
                className="col s12"
                style={{
                  paddingRight: '0px',
                  paddingLeft: '50px',
                  paddingRight: '50px',
                }}
              >
                <div
                  className="custom-evans-event features-content"
                  style={{ padding: '0px 0 0' }}
                >
                  <div className="owl-carousel-super owl-carousel myCategoriasComerciais">
                    <div
                      id="divCategoria_0"
                      className="item evans-edit divCategoria divCategoria_0"
                    >
                      <a href="JavaScript:void(0)" className="item-content">
                        <div
                          className="img myCategoriaImg_${IdCategoria}"
                          style={{
                            backgroundImage: `url(${promoEvans})`,
                          }}
                        >
                          <span className="promo" />
                          <em />
                        </div>
                      </a>

                      <p>Mais Vendidos</p>
                    </div>
                    <div
                      id="divCategoria_1"
                      className="item evans-edit evans-edit-cat divCategoria divCategoria_1"
                    >
                      <a href="JavaScript:void(0)" className="item-content">
                        <div
                          className="img myCategoriaImg_${IdCategoria}"
                          style={{
                            backgroundImage: `url(${maisVendidos})`,
                          }}
                        />
                      </a>

                      <p>Mais Vendidos</p>
                    </div>
                  </div>

                  <div className="col s12">
                    <h4>Categorias</h4>
                    <div className="owl-carousel-cat owl-carousel myCategoriasCardapios">
                      <div
                        id="divCategoria_2"
                        className="item evans-edit evans-edit-cat divCategoria divCategoria_2"
                      >
                        <a
                          className="editar btnAdmEditarFotoCategoriaCardapio_2"
                          onClick="document.getElementById('btnEditarFotoCategoriaCardapio_2').click();"
                        >
                          <i className="material-icons">edit</i>
                        </a>
                        <a href="JavaScript:void(0)" className="item-content">
                          <div
                            className="img myCategoriaImg_2"
                            style={{
                              backgroundImage:
                                'url(https://s3-sa-east-1.amazonaws.com/appevans/category/GQlnbSvLxcIWfzx%2b5rs%2bDg%3d%3d.jpg?Time=14%2f09%2f2019+11%3a18%3a39)',
                            }}
                          >
                            <em />
                          </div>
                        </a>

                        <p>Cervejas</p>
                      </div>
                      <div
                        id="divCategoria_2"
                        className="item evans-edit evans-edit-cat divCategoria divCategoria_2"
                      >
                        <a
                          className="editar btnAdmEditarFotoCategoriaCardapio_2"
                          onClick="document.getElementById('btnEditarFotoCategoriaCardapio_2').click();"
                        >
                          <i className="material-icons">edit</i>
                        </a>
                        <a href="JavaScript:void(0)" className="item-content">
                          <div
                            className="img myCategoriaImg_2"
                            style={{
                              backgroundImage:
                                'url(https://s3-sa-east-1.amazonaws.com/appevans/category/4hwwmK3A1Wafr%2b40cn68jA%3d%3d.jpg?Time=9%2f9%2f2019+11%3a02%3a09+PM)',
                            }}
                          >
                            <em />
                          </div>
                        </a>

                        <p>Lanches</p>
                      </div>
                      <div
                        id="divCategoria_2"
                        className="item evans-edit evans-edit-cat divCategoria divCategoria_2"
                      >
                        <a
                          className="editar btnAdmEditarFotoCategoriaCardapio_2"
                          onClick="document.getElementById('btnEditarFotoCategoriaCardapio_2').click();"
                        >
                          <i className="material-icons">edit</i>
                        </a>
                        <a href="JavaScript:void(0)" className="item-content">
                          <div
                            className="img myCategoriaImg_2"
                            style={{
                              backgroundImage:
                                'url(https://s3-sa-east-1.amazonaws.com/appevans/category/GQlnbSvLxcIWfzx%2b5rs%2bDg%3d%3d.jpg?Time=14%2f09%2f2019+11%3a18%3a39)',
                            }}
                          >
                            <em />
                          </div>
                        </a>

                        <p>Sucos</p>
                      </div>
                    </div>
                  </div>
                  <div className="col s12" style={{ marginBottom: '80px' }}>
                    <h3 className="subtitle">Menu</h3>
                    <div className="myItensCardapio">
                      <p
                        className="myMsgItensCardapio"
                        style={{ color: 'grey', display: 'none' }}
                      >
                        Não encontrado item do cardápio.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col s12 headerCategoriaMenu headerCategoriaMenu_Cervejas">
                        <h4>Cervejas</h4>{' '}
                      </div>
                      <div className="col s12 m12 l12">
                        <ul className="menu-cardapio">
                          <li
                            className="evans-edit col s12 m6 l6 liCategoriaMenu_245"
                            data-categoria="Cervejas"
                          >
                            {' '}
                            <a
                              href="JavaScript:void(0)"
                              onClick="openInformacaoCardapio(358 , 245 );"
                              className="editar isAdm"
                            >
                              <i className="material-icons">edit</i>
                            </a>
                            <a
                              href="JavaScript:void(0)"
                              onClick="document.getElementById('qtdSolic_245').value = 1;$('.modalSOLICITAR_SERVICO_245').modal('open');"
                            >
                              {' '}
                              <span
                                style={{
                                  fontsize: 'x-small',
                                  color: '#ff0a4c',
                                }}
                              >
                                Inativo
                              </span>
                              <div
                                className="img"
                                style={{ display: 'none' }}
                              />
                              <div
                                className="descricao"
                                style={{ marginleft: '0px' }}
                              >
                                <p>
                                  {' '}
                                  <strong className="preco">
                                    R$ 3,00
                                  </strong>{' '}
                                  <strong>Itaipava</strong>{' '}
                                </p>
                                <p style={{ minheight: '20px' }}>
                                  {' '}
                                  <span className="desc">250ml</span>{' '}
                                </p>
                              </div>
                            </a>
                          </li>
                          <li
                            className="evans-edit col s12 m6 l6 liCategoriaMenu_240"
                            data-categoria="Cervejas"
                          >
                            {' '}
                            <a
                              href="JavaScript:void(0)"
                              onClick="openInformacaoCardapio(358 , 240 );"
                              className="editar isAdm"
                            >
                              <i className="material-icons">edit</i>
                            </a>
                            <a
                              href="JavaScript:void(0)"
                              onClick="document.getElementById('qtdSolic_240').value = 1;$('.modalSOLICITAR_SERVICO_240').modal('open');"
                            >
                              <div
                                className="img"
                                style={{
                                  backgroundImage:
                                    'url(https://s3-sa-east-1.amazonaws.com/appevans/menu/QWBez3jkMRM%3d.jpg?Time=8%2f30%2f2019+2%3a22%3a50+PM)',
                                }}
                              />
                              <div className="descricao">
                                <p>
                                  {' '}
                                  <strong className="preco">
                                    R$ 0,99
                                  </strong>{' '}
                                  <strong>Skol</strong>{' '}
                                </p>
                                <p style={{ minHeight: '20px' }}>
                                  {' '}
                                  <span className="desc">300mlkk</span>{' '}
                                  <span className="sale">80% OFF </span>{' '}
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                        <div className="row divisor" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    );
  }
}

export default Menu;
