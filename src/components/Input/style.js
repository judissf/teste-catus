import styled from 'styled-components'

export const InputSearch = styled.input`
  display: block;
  width: 242px;
  height: 32px;
  background-color: transparent;
  color: #000;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #000;
  padding-left: 2px;
  margin-right: 11px;
  transition: 0.2s;

  @media (max-width: 920px) {
    display: ${props => props.$search_activated == 'true' ? 'block' : 'none'};
    width: 160px;
  }

  &::placeholder {
    color: #8c8c8c;
    transition: 0.2s;
  }

  &:focus {
    border-bottom: 2px solid #000;
    outline: none;

    &::placeholder {
      color: #000;
    }
  }
`
