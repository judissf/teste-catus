import styled from 'styled-components'

export const ContainerHome = styled.main`
  display: flex;
  flex-direction: column;
  padding: 28px 16px 0;

  @media (min-width: 1232px) {
    padding: 28px 0;
  }

  .subtitle {
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: max-content;
    margin: 0 auto 17px;
    cursor: default;

    @media (max-width: 768px) {
      font-size: 22px;
    }

    @media (min-width: 501px) and (max-width: 600px) {
      font-size: 20px;
    }

    @media (max-width: 500px) {
      font-size: 18px;
    }
  }

  .line {
    position: relative;
    height: 1px;
    background-color: #cfcfcf;

    &::after {
      position: absolute;
      left: 0;
      right: 0;
      top: -1px;
      content: '';
      display: block;
      width: 200px;
      background-color: #a4bebf;
      height: 3px;
      margin: auto;
    }
  }

  .section-products {
    width: 100%;

    .list-products {
      overflow: auto hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 8px;
      max-width: 1200px;
      width: 100%;
      padding-top: 18px;
      padding-bottom: 12px;
      margin-bottom: 39px;

      @media (min-width: 1175px) {
        justify-content: center;
      }

      @media (max-width: 1175px) {
        padding: 18px 12px 12px;
      }

      &::before {
        position: absolute;
        z-index: 1;
        top: 238px;
        left: 0;
        content: '';
        background: url('./src/assets/left.svg');
        display: block;
        width: 20px;
        height: 33px;

        @media (max-width: 1200px) {
          display: none;
        }
      }

      &::after {
        position: absolute;
        z-index: 1;
        top: 238px;
        right: 0;
        content: '';
        background: url('./src/assets/right.svg');
        display: block;
        width: 20px;
        height: 33px;

        @media (max-width: 1200px) {
          display: none;
        }
      }
    }
  }
`

export const Mosaic = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  width: 100%;
  margin-bottom: 65px;
  gap: 2vw;

  @media (min-width: 1440px) {
   gap : 1vw;
  }

  @media (max-width: 920px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }

  figure {
    max-width: 380px;
    width: 100%;
    height: 100%;

    @media (max-width: 920px) {
      max-width: 100%;
    }

    img {
      max-width: 380px;
      width: 100%;
      height: 100%;

      @media (max-width: 920px) {
        max-width: 100%;
      }

      @media (max-width: 767px) {
        min-height: 30vh;
      }
    }
  }

  .picture-mosaic-0 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .picture-mosaic-1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .picture-mosaic-2 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;

    @media (max-width: 767px) {
      order: -1;
    }
  }
`
