import styled from 'styled-components'

export const HeaderStyle = styled.header`
  background-color: #eeeeee;
  height: 94px;
  position: sticky;
  top: 0;
  z-index: 2;
  max-width: 100vw;
  width: 100%;
  box-sizing: border-box;

  &::after {
    position: absolute;
    top: 93px;
    width: 100%;
    height: 1px;
    display: block;
    background-color: ${(props) => props.$is_active === 'true' ? '#000' : '#eeeeee'};
    content: '';
    transition: 0.2s ease-in-out;
    z-index: 2;

    @media (max-width: 768px) {
      top: 79px;
    }
  }

  @media (max-width: 768px) {
    height: 80px;
  }

  .container-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 0 16px;

    @media (min-width: 1232px) {
      padding: 0;
    }

    .logo {
      display: flex;
      img {
        width: 177px;

        @media (max-width: 768px) {
          width: 160px;
        }

        @media (max-width: 565px) {
          width: 130px;
        }
      }
    }

    .content-mobile {
      display: flex;
      gap: 25px;
      z-index: 2;
    }

    .search-cart {
      display: flex;
      align-items: center;
      z-index: 2;
    }
  }
`
