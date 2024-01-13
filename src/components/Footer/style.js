import styled from 'styled-components'

export const FooterStyle = styled.footer`
  max-width: 100vw;
  width: 100%;
  background-color: #404040;

  .container-footer {
    padding: 49px 16px;
    display: flex;
    align-items: start;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    margin: auto;
    flex-wrap: wrap;
    gap: 25px;

    @media (max-width: 1006px) {
      justify-content: start;
    }

    @media (min-width: 1232px) {
      padding: 49px 0;
    }
  }

  .title-footer {
    position: relative;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 100%;
    border-bottom: 1px solid #cfcfcf;
    padding-bottom: 7px;

    &::after {
      position: absolute;
      bottom: -2px;
      content: '';
      display: block;
      width: 100px;
      height: 3px;
      background-color: #32bcad;
    }
  }

  .contact-information {
    max-width: 275px;
    width: 100%;
    height: 213px;

    .navbar-footer {
      margin: 15px 0;
    }

    .link-footer,
    .opening-hours {
      color: #f6f6f6;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }

    .whatsapp,
    .title-opening-hours {
      color: #f6f6f6;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
    }

    .title-opening-hours {
      margin-top: 12px;
    }
  }

  .security-seal {
    max-width: 303px;
    width: 100%;
    height: 213px;

    @media (max-width: 634px) {
      height: 100px;
    }

    .seals {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 12px;
    }
  }

  .payment-methods {
    width: 347px;
    height: 213px;

    @media (max-width: 634px) {
      height: 120px;
    }

    .list-payment-methods {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-top: 17px;
      flex-flow: row wrap;

      figure {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 2px;
        width: 44px;
        height: 32px;
      }
    }
  }
`
