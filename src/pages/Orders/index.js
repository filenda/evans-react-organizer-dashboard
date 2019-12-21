import React, { Component } from 'react';
// import M from 'materialize-css';

import './styles.css';

class Order extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    // M.AutoInit();
  }

  render() {
    return (
      <div id="main">
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
                        <h5 className="breadcrumbs-title mt-0 mb-0">Pedidos</h5>
                        <ol className="breadcrumbs mb-0">
                          <li className="breadcrumb-item">
                            <a href="index.html">Dashboard</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="#">Pedidos</a>
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
          <div className="col s12 paddingmobilezero">
            <div className="container">
              <div
                className="card"
                style={{ background: 'transparent', boxShadow: 'none' }}
              />
              <div className="card-content" style={{ padding: '0px' }}>
                <div className="custom-evans-section-panel features-content">
                  <div className="panel-content">
                    <div className="row">
                      <div className="col s12">
                        <form className="custom-evans-form row busca">
                          <div className="input-field col s12">
                            <input
                              placeholder="Procura algo específico?"
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
                {/* <p className="caption mb-0">Gerencie seus pedidos</p> */}
              </div>
            </div>

            <div className="custom-evans-section-panel features-content">
              <div className="panel-content">
                <div className="row">
                  <nav className="nav-extended nav-evans">
                    <div className="nav-content">
                      <ul className="tabs tabs-transparent">
                        <li className="tab">
                          <a className="active" href="#andamento">
                            EM ANDAMENTO
                          </a>
                        </li>
                        <li className="tab">
                          <a href="#retirado">RETIRADO</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div className="col s12 mtmb30">
                    <div className="switch">
                      <p className="col s10">
                        <strong>IMPRESSÃO AUTOMÁTICA</strong>
                      </p>
                      <label>
                        <input type="checkbox" />
                        <span className="lever"></span>
                      </label>
                    </div>
                  </div>
                  <div id="andamento" className="col s12">
                    <div
                      className="col s12 custom-evans-section-panel-pedidos"
                      id="detalhe"
                    >
                      <div className="col s12">
                        <p className="title-b2b-pedidos">Marcella Teixeira</p>
                        <p className="title-b2b-pedidos">CPF: 353.511.268-00</p>
                        <p className="title-b2b-pedidos">11 98340-5524</p>
                        <div className="col s6">
                          <p className="title-date-pedidos">
                            Nº do Pedido 3010
                          </p>
                          <p className="sub-title-date-pedidos">
                            Realizado às 13:37 - 13/09/2019
                          </p>
                        </div>
                        <div className="col s6">
                          <div className="col s12 top30">
                            <p className="title-compra-pedidos align-right">
                              <a href="">Ver Cardápio</a>
                            </p>
                          </div>
                        </div>
                        <div className="col s12 mtmb30">
                          <a
                            href=""
                            className="btn custom-evans-btn custom-evans-preparo-btn btn-large btn-carrinho"
                          >
                            Solicitar Preparo
                          </a>
                        </div>

                        <div className="col s12">
                          <p className="sub-title-date-pedidos align-right real-time-evans">
                            Atualizado em <br />
                            tempo real
                          </p>
                        </div>
                        <div className="col timeline">
                          <div className="col s3 hora1">
                            <p>17:48</p>
                          </div>
                          <div className="col s3 hora2">
                            <p>17:52</p>
                          </div>
                          <div className="col s3 hora3">
                            <p>-</p>
                          </div>
                          <div className="col s3 hora4">
                            <p>-</p>
                          </div>
                        </div>
                        <div className="col s4">
                          <div className="progress">
                            <div className="finale"></div>
                          </div>
                          <p className="status-on">AGUARDANDO ACEITE</p>
                        </div>
                        <div className="col s4">
                          <div className="progress">
                            <div className="indeterminate"></div>
                          </div>
                          <p className="status-on">AGUARDANDO PREPARO</p>
                        </div>
                        <div className="col s4">
                          <div className="progress">
                            <div className="determinate"></div>
                          </div>
                          <p className="status-off">AGUARDANDO RETIRADA</p>
                        </div>
                        <div className="col s12 top30">
                          <div className="col s2">
                            <div className="sonar-wrapper">
                              <div className="sonar-emitter">
                                <div className="sonar-wave"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col s10">
                            <p className="txt-preparo">
                              Seu pedido está aguardando sua solicitação de
                              preparo
                            </p>
                          </div>
                        </div>
                        <div className="col s12 custom-evans-section-panel-detalhe mtmb30 paddingmobilezero">
                          <div className="row">
                            <div className="col s12 paddingmobilezero">
                              <div className="custom-evans-section-panel panel-small ingressos ingressos-resumo paddingmobilezero">
                                <div className="panel-header">
                                  <h3>DETALHES DO PEDIDO</h3>
                                </div>
                                <div className="panel-content">
                                  <ul id="listaCompraResumo">
                                    <li>
                                      {' '}
                                      <strong>Camarotes</strong>
                                      <ul id="listaCompraItensResumo_0">
                                        <li>
                                          {' '}
                                          <strong>Masculino</strong>
                                          <p>R$ 30,00 (+ R$ 2,40 taxa)</p>{' '}
                                          <span className="menu">1</span>
                                          <p></p>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      {' '}
                                      <strong>Lanches</strong>
                                      <ul id="listaCompraItensResumo_1">
                                        <li>
                                          {' '}
                                          <strong>X-bacon</strong>
                                          <p>R$ 12,50 (+ R$ 0,50 taxa)</p>{' '}
                                          <span className="menu">1</span>
                                          <p></p>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="panel-footer">
                                  <div
                                    className="total-ingressos"
                                    id="divTotaisResumo"
                                  >
                                    {' '}
                                    <span
                                      className="right"
                                      style={{ fontSize: 'x-small' }}
                                    >
                                      (+ R$ 2,90 Total taxas variáveis)
                                    </span>
                                    <br />{' '}
                                    <span
                                      id="spanTotalTaxaBoletoResumo"
                                      className="right"
                                      style={{
                                        fontSize: 'x-small',
                                        display: 'none',
                                      }}
                                    >
                                      (+ R$ 1,00 Taxa do boleto)
                                    </span>
                                    <br
                                      id="brTotalTaxaBoletoResumo"
                                      style={{ display: 'none' }}
                                    />{' '}
                                    <span
                                      className="right"
                                      style={{ fontSize: 'x-small' }}
                                    >
                                      (+ R$ 0,99 Taxa fixa por transação)
                                    </span>
                                    <br />
                                    <p>
                                      {' '}
                                      <strong>TOTAL</strong>{' '}
                                      <strong id="spanTotalResumo">
                                        R$ 46,39
                                      </strong>{' '}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button id="ocultarDetalhe">
                          <i className="material-icons icon-voltar">
                            keyboard_backspace
                          </i>
                        </button>
                        <p className="align-right">
                          <strong>PAGO</strong>
                          <img src="../images/master.png" />
                        </p>
                        <div className="col s12 top30">
                          <div className="col s12 top30 align-center">
                            <a href="" className="print-b2b">
                              <i className="material-icons icon-print-b2b">
                                print
                              </i>
                              IMPRIMIR PEDIDO
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col s12 custom-evans-section-panel-pedidos"
                      id="detalheini"
                    >
                      <div className="col s6">
                        <p className="title-date-pedidos">
                          Sex 19 de Setembro 2019
                        </p>
                        <p className="sub-title-date-pedidos">Pedido 3010</p>
                        <p className="title-compra-pedidos">COMPRADO EM</p>
                        <p className="sub-title-compra-pedidos">23:10</p>
                      </div>
                      <div className="col s6 paddingmobilezero">
                        <div className="col s12 paddingmobilezero">
                          <p className="title-price-pedidos">R$ 34,10</p>
                          <button
                            id="mostrarDetalhe"
                            className="btn custom-evans-btn custom-evans-pedido-btn btn-large btn-carrinho align-right ajustmentbuttonmobile"
                          >
                            Ver Pedido
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="retirado" className="col s12">
                    <div className="col s12 custom-evans-section-panel-pedidos">
                      <img src="../images/noitens.jpg" className="displayed" />
                      <p className="title-noitens">Nenhum pedido retirado</p>
                      <p className="sub-title-noitens">
                        Quer conferir nossos eventos?
                        <br />É só clicar em ver cardápio
                      </p>
                      <div className="col s12 top30 align-center">
                        <a
                          href=""
                          className="btn custom-evans-btn custom-evans-pedido-btn btn-large btn-carrinho"
                        >
                          Ver Cardápio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-footer"></div>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Order;
