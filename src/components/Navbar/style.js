import styled from 'styled-components'

export const LinkPage = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  transition: 0.2s;

  @media (max-width: 920px) {
    color: #fff;
  }

  &:hover {
    color: #a4bebf;
  }
`

export const NavbarDesktop = styled.nav`
  display: block;
  z-index: 2;

  @media (max-width: 920px) {
    display: none;
  }

  .navbar-links-desktop {
    display: flex;
    align-items: center;
    gap: 30px;
    width: 100%;
  }
`

export const NavbarMobile = styled.nav`
  display: none;
  position: absolute;
  top: 94px;
  right: 0;
  left: 0;
  width: calc(100vw - 32px);
  margin: 0 auto;
  min-height: ${(props) => (props.$is_active === 'true' ? '100%' : '0')};
  border-radius: 0 0 6px 6px;
  border: 1px solid #000;
  border-top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 5px 4px 8px rgba(0, 0, 0, 0.4), 
    -3px 0 8px rgba(0, 0, 0, 0.4),
    0 5px 8px rgba(0, 0, 0, 0.4);
  z-index: ${(props) => (props.$is_active === 'true' ? '1' : '-1')};
  opacity: ${(props) => (props.$is_active === 'true' ? '1' : '0')};
  transition: 0.2s ease-in-out;

  @media (max-width: 920px) {
    display: block;
  }

  @media (max-width: 768px) {
    top: 80px;
  }

  .navbar-links-mobile {
    display: ${(props) => (props.$is_active === 'true' ? 'flex' : 'none')};
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    opacity: ${(props) => (props.$is_active === 'true' ? '1' : '0')};
    z-index: ${(props) => (props.$is_active === 'true' ? '1' : '-1')};
    transition: 0.2s ease-in-out;
    height: ${(props) => (props.$is_active === 'true' ? '100%' : '0')};

    li {
      display: ${(props) => (props.$is_active === 'true' ? 'block' : 'none')};
      text-transform: uppercase;
      border-bottom: 1px solid rgba(250, 250, 250, 0.3);
      padding: 12px 0;

      &:last-child {
        border-bottom: 0;
      }

      a {
        width: 100%;
        display: block;
        font-weight: 300;
      }
    }
  }
`
