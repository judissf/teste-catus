import { FooterStyle } from './style'

import seal_google from '../../assets/seal.svg'
import seal_secure_store from '../../assets/selo_lojaprotegida.png'
import boleto from '../../assets/boleto.svg'
import pix from '../../assets/pix.svg'
import visa from '../../assets/visa.svg'
import mastercard from '../../assets/mastercard.svg'
import amex from '../../assets/amex.svg'
import diners from '../../assets/diners.svg'
import discover from '../../assets/discover.svg'

export const Footer = () => {
  return (
    <FooterStyle>
      <div className='container-footer'>
        <div className='contact-information'>
          <p className='title-footer'>Central de Atendimento</p>

          <nav className='navbar-footer'>
            <ul>
              <li>
                <a className='link-footer' href='/ajuda&suporte'>
                  Ajuda e suporte
                </a>
              </li>
              <li>
                <a className='link-footer' href='/faleconosco'>
                  Fale conosco
                </a>
              </li>
              <li>
                <a className='link-footer' href='/faq'>
                  Faq
                </a>
              </li>
            </ul>
          </nav>

          <a className='whatsapp' href='https://wa.me/5511999999999'>
            Whatsapp: (11) 99999-9999
          </a>

          <p className='title-opening-hours'>Nossos horários</p>
          <p className='opening-hours'>Segunda a sexta das 9h às 18h</p>
        </div>

        <div className='security-seal'>
          <p className='title-footer'>Selos de segurança</p>

          <div className='seals'>
            <figure>
              <img src={seal_google} alt='Selo de segurança Google' />
            </figure>

            <figure>
              <img src={seal_secure_store} alt='Selo de loja segura' />
            </figure>
          </div>
        </div>

        <div className='payment-methods'>
          <p className='title-footer'>Formas de pagamento</p>

          <ul className='list-payment-methods'>
            <li>
              <figure>
                <img src={visa} alt='Visa' />
              </figure>
            </li>
            <li>
              <figure>
                <img src={mastercard} alt='Mastercard' />
              </figure>
            </li>
            <li>
              <figure>
                <img src={amex} alt='Amex' />
              </figure>
            </li>
            <li>
              <figure>
                <img src={diners} alt='Diners' />
              </figure>
            </li>
            <li>
              <figure>
                <img src={discover} alt='Discover' />
              </figure>
            </li>
            <li>
              <figure>
                <img src={boleto} alt='Boleto bancário' />
              </figure>
            </li>
            <li>
              <figure>
                <img src={pix} alt='Pix' />
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </FooterStyle>
  )
}
