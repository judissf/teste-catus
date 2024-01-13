import { useState } from 'react'

import logo from '../../assets/logo.svg'

import { HeaderStyle } from './style'
import { InputSearch } from '../Input/style'
import { Button, MenuBurguer } from '../ButtonHeader/style'
import { LinkPage, NavbarDesktop, NavbarMobile } from '../Navbar/style'

export const Header = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false)
  const [showSearchMobile, setShowSearchMobile] = useState(false)

  return (
    <HeaderStyle
      $background_after={
        showMenuMobile || showSearchMobile ? '#000' : '#eeeeee'
      }
      $is_active={showMenuMobile || showSearchMobile ? 'true' : 'false'}
    >
      <div className='container-header'>
        <figure className='logo'>
          <img src={logo} alt='Logo Catus' />
        </figure>

        <NavbarDesktop>
          <ul className='navbar-links-desktop'>
            <li>
              <LinkPage href='/loja'>Loja</LinkPage>
            </li>
            <li>
              <LinkPage href='/login'>Login</LinkPage>
            </li>
            <li>
              <LinkPage href='/sobre'>Sobre</LinkPage>
            </li>
            <li>
              <LinkPage href='/contato'>Contato</LinkPage>
            </li>
          </ul>
        </NavbarDesktop>

        <div className='content-mobile'>
          <div className='search-cart'>
            <InputSearch
              placeholder='Digite aqui sua busca'
              type='text'
              $search_activated={showSearchMobile ? 'true' : 'false'}
            />

            <Button
              className='button-search'
              $desktop_margin_right='30px'
              $mobile_margin_right={showSearchMobile ? '0' : '20px'}
              onClick={() => {
                setShowMenuMobile(false)
                setShowSearchMobile(!showSearchMobile)
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='37'
                height='35'
                viewBox='0 0 37 35'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M2.05859 13.7628C2.05859 7.82245 7.26457 2.88379 13.844 2.88379C20.4234 2.88379 25.6294 7.82245 25.6294 13.7628C25.6294 19.7031 20.4234 24.6418 13.844 24.6418C7.26457 24.6418 2.05859 19.7031 2.05859 13.7628ZM13.844 0.883789C6.30104 0.883789 0.0585938 6.58193 0.0585938 13.7628C0.0585938 20.9436 6.30104 26.6418 13.844 26.6418C17.273 26.6418 20.4332 25.4642 22.8604 23.5051L34.933 34.7218C35.3376 35.0977 35.9703 35.0744 36.3462 34.6698C36.7222 34.2652 36.6989 33.6325 36.2943 33.2566L24.3227 22.1337C26.3796 19.892 27.6294 16.9758 27.6294 13.7628C27.6294 6.58193 21.3869 0.883789 13.844 0.883789Z'
                  fill='#000'
                />
              </svg>
            </Button>

            <Button
              className='button-cart'
              $search_activated={showSearchMobile ? 'true' : 'false'}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='42'
                height='37'
                viewBox='0 0 42 37'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M1.74902 0C1.19674 0 0.749023 0.447715 0.749023 1C0.749023 1.55228 1.19674 2 1.74902 2H6.39768L8.90469 11.2613C9.0227 11.6973 9.41829 12 9.86994 12H39.5761L34.884 25H15.2839C14.3253 25 13.3915 25.351 12.6913 25.9976C11.9885 26.6467 11.5769 27.5449 11.5769 28.5C11.5769 29.4539 11.9874 30.351 12.6886 30.9999C12.0097 31.6239 11.5767 32.498 11.5767 33.5C11.5767 35.5064 13.3128 37 15.2837 37C17.2546 37 18.9907 35.5064 18.9907 33.5C18.9907 32.9557 18.8629 32.4492 18.6374 32H29.5255C29.3 32.4492 29.1722 32.9557 29.1722 33.5C29.1722 35.5064 30.9083 37 32.8792 37C34.8501 37 36.5862 35.5064 36.5862 33.5C36.5862 32.9557 36.4584 32.4492 36.2329 32H36.9397C37.492 32 37.9397 31.5523 37.9397 31C37.9397 30.4477 37.492 30 36.9397 30H32.8792H15.2839C14.8066 30 14.3634 29.8242 14.0482 29.5331C13.7358 29.2446 13.5769 28.871 13.5769 28.5C13.5769 28.129 13.7358 27.7554 14.0482 27.4669C14.3634 27.1758 14.8066 27 15.2839 27H35.5862C36.0076 27 36.3837 26.7359 36.5268 26.3395L41.9408 11.3395C42.0514 11.0331 42.0057 10.6919 41.8185 10.4253C41.6313 10.1587 41.3259 10 41.0001 10H10.6352L8.12823 0.738707C8.01022 0.302744 7.61462 0 7.16297 0H1.74902ZM32.8792 32C31.8601 32 31.1722 32.745 31.1722 33.5C31.1722 34.255 31.8601 35 32.8792 35C33.8983 35 34.5862 34.255 34.5862 33.5C34.5862 32.745 33.8983 32 32.8792 32ZM15.2837 32C14.2646 32 13.5767 32.745 13.5767 33.5C13.5767 34.255 14.2646 35 15.2837 35C16.3028 35 16.9907 34.255 16.9907 33.5C16.9907 32.745 16.3028 32 15.2837 32Z'
                  fill='#000'
                />
              </svg>
            </Button>
          </div>

          <MenuBurguer
            className='menu-mobile'
            onClick={() => setShowMenuMobile(!showMenuMobile)}
            $mobile='true'
            $search_activated={showSearchMobile ? 'true' : 'false'}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='35'
              viewBox='0 0 40 35'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d={
                  showMenuMobile
                    ? 'M4.24049 29.446C3.17161 30.5148 3.17161 32.2478 4.24049 33.3167C5.30937 34.3856 7.04236 34.3856 8.11124 33.3167L20 21.428L31.8887 33.3167C32.9576 34.3856 34.6906 34.3856 35.7595 33.3167C36.8284 32.2479 36.8284 30.5149 35.7595 29.446L23.8707 17.5572L35.7595 5.66848C36.8283 4.5996 36.8283 2.86661 35.7595 1.79773C34.6906 0.728847 32.9576 0.72885 31.8887 1.79773L20 13.6865L8.11125 1.79776C7.04237 0.728876 5.30938 0.728875 4.2405 1.79775C3.17162 2.86663 3.17162 4.59963 4.2405 5.66851L16.1292 17.5572L4.24049 29.446Z'
                    : 'M0 2.9878C0 1.33769 1.33769 0 2.98781 0H37.0122C38.6623 0 40 1.33769 40 2.9878C40 4.63792 38.6623 5.97561 37.0122 5.97561H2.9878C1.33768 5.97561 0 4.63792 0 2.9878ZM0 17.5C0 15.8499 1.33769 14.5122 2.98781 14.5122H37.0122C38.6623 14.5122 40 15.8499 40 17.5C40 19.1501 38.6623 20.4878 37.0122 20.4878H2.9878C1.33768 20.4878 0 19.1501 0 17.5ZM2.98781 29.0244C1.33769 29.0244 0 30.3621 0 32.0122C0 33.6623 1.33768 35 2.9878 35H37.0122C38.6623 35 40 33.6623 40 32.0122C40 30.3621 38.6623 29.0244 37.0122 29.0244H2.98781Z'
                }
                fill='#000'
              />
            </svg>
          </MenuBurguer>
        </div>

        <NavbarMobile
          $height={showMenuMobile ? '140px' : '0'}
          $is_active={showMenuMobile ? 'true' : 'false'}
        >
          <ul className='navbar-links-mobile'>
            <li>
              <LinkPage href='/loja'>Loja</LinkPage>
            </li>
            <li>
              <LinkPage href='/login'>Login</LinkPage>
            </li>
            <li>
              <LinkPage href='/sobre'>Sobre</LinkPage>
            </li>
            <li>
              <LinkPage href='/contato'>Contato</LinkPage>
            </li>
          </ul>
        </NavbarMobile>
      </div>
    </HeaderStyle>
  )
}
