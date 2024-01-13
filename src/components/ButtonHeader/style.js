import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: ${(props) => props.$desktop_margin_right};
  transition: 0.2s;
  display: ${(props) => (props.$mobile == 'true' ? 'none' : 'block')};

  @media (max-width: 920px) {
    display: ${(props) => (props.$mobile == 'true') || (props.$search_activated == 'true') ? 'none' : 'block'};
    margin-right: ${(props) => props.$mobile_margin_right};
  }

  svg {
    @media (max-width: 768px) {
      width: 28px;
    }
  }
`

export const MenuBurguer = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: ${(props) => props.$desktop_margin_right};
  transition: 0.2s;

  @media (max-width: 920px) {
    display: ${(props) => props.$search_activated == 'true' ? 'none' : 'block'};
  }

  svg {
    @media (max-width: 768px) {
      width: 28px;
    }
  }
`
