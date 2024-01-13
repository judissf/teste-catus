import styled from 'styled-components'

export const ContainerCard = styled.li`
  width: 280px;
  height: 511px;
  padding: 15px 10px;
  box-shadow: 0 0 4px 2px #fff;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 4px 2px #e8e8e8;

    img {
      transform: rotateY(180deg);
    }
  }
`

export const ContentCard = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;

  .product-img {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 260px;
    background-color: #f7f7f7;
    margin-bottom: 10px;

    img {
      max-width: 100%;
    }
  }

  .promotion {
    position: absolute;
    top: 21px;
    left: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: #a4bebf;
    color: #404040;

    p {
      font-size: 12px;
      font-style: normal;
      line-height: 12px;
      font-weight: 400;
      width: 28px;
      height: 24px;
      text-align: center;

      strong {
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 14px;
      }
    }
  }

  .description {
    color: #404040;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
  }

  .old-value {
    color: #484848;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 23px;
    text-decoration: line-through;
  }

  .current-value {
    color: #484848;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 5px;
  }

  .payment-options {
    color: #484848;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    margin-bottom: 32px;

    strong {
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
    }
  }
`
