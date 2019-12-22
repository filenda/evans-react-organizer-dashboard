import styled from 'styled-components';
import bulletPromo from '../../assets/images/bullet-promo.png';

export const Main = styled.div`
  button {
    background: none;
    border: 0;
  }
  .icon-voltar {
    font-size: 46px !important;
    color: #ff0a4c;
  }
  .custom-evans-btn.btn-large {
    height: 47px;
    line-height: 47px;
    border-radius: 0px 6px 6px 0px;
  }
  @media (min-width: 761px) {
    .deskhidden {
      display: none;
    }
  }
  @media (max-width: 1000px) {
    .sidenav-main .brand-sidebar .brand-logo {
      padding: 0px 12px 20px 12px !important;
    }
    .brand-sidebar .logo-wrapper a.brand-logo img {
      height: 50px !important;
      margin-left: 100px;
    }
  }
  @media (max-width: 760px) {
    .custom-evans-section-panel .panel-content {
      padding: 0px;
    }
    .container {
      margin: 0 auto;
      max-width: 1280px;
      width: 100%;
      padding: 0px;
    }
    .col .row {
      margin-right: 0rem;
      margin-left: 0rem;
    }
    .custom-evans-section-panel-pedidos {
      box-shadow: 0 0px 15px rgba(255, 255, 255, 0.26);
    }
    .custom-evans-section-panel-pedidos {
      padding: 0px !important;
    }
    body {
      background-color: #ffffff;
    }
    .custom-evans-section-panel {
      box-shadow: 0 2px 20px rgba(255, 255, 255, 0.24);
      padding: 0px;
      margin: 0px;
    }
    .paddingmobilezero {
      padding: 0px !important;
    }
    .custom-evans-section-panel {
      border-radius: 0px;
    }
    .ajustmentbuttonmobile {
      width: 100%;
      padding: 0px !important;
      font-size: 13px !important;
    }
    .custom-evans-pedido-btn.btn-large {
      font-size: 13px !important;
    }
    .custom-evans-btn.btn-large {
      height: 43px;
      line-height: 43px;
      border-radius: 0px 6px 6px 0px;
    }
  }
  .owl-carousel-super .item .img {
    background-color: #e7dff0;
    background-size: cover;
    background-position: center center;
    border-radius: 10px;
    height: 115px;
    width: 230px;
  }
  .owl-carousel-super .item .item-content:hover .img,
  .owl-carousel .item.ativo .item-content .img {
    border: 2px solid #ff0a4c;
  }
  .owl-carousel .item p {
    font-size: 12px;
    line-height: 14px;
    padding: 10px 20px 0;
    text-align: center;
    width: 230px;
  }
  .section {
    background-color: #0000 !important;
  }
  .owl-carousel-super .item span.promo {
    background: url(${bulletPromo});
    background-size: cover;
    color: #fff;
    display: block;
    height: 60px;
    position: absolute;
    top: -10px;
    left: -12px;
    width: 68px;
  }
  .owl-carousel-cat .item .img {
    height: 70px;
    width: 120px;
  }
  .owl-carousel-cat .item .img {
    background-color: #e7dff0;
    background-size: cover;
    background-position: center center;
    border-radius: 10px;
    height: 70px;
    width: 120px;
  }
  .owl-carousel-cat .item .item-content:hover .img,
  .owl-carousel .item.ativo .item-content .img {
    border: 2px solid #ff0a4c;
  }
  .owl-carousel .item p {
    font-size: 12px;
    line-height: 14px;
    padding: 10px 20px 0;
    text-align: center;
    width: 120px;
  }
  .section {
    background-color: #0000 !important;
  }
  .owl-carousel-cat .item span.promo {
    background: url(../images/bullet-promo.png);
    background-size: cover;
    color: #fff;
    display: block;
    height: 60px;
    position: absolute;
    top: -10px;
    left: -12px;
    width: 68px;
  }

  .evans-edit-cat a.editar {
    border: none !important;
    background: #ff0a4c !important;
    border-radius: 5px !important;
    color: #fff !important;
    display: block !important;
    height: 20px !important;
    padding: 0 !important;
    position: sticky !important;
    right: 10px !important;
    text-align: center !important;
    top: -10px !important;
    width: 20px !important;
    margin-left: 80px;
    box-shadow: 2px 2px 1px #00000055;
    z-index: 0;
  }
`;
