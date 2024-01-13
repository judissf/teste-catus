import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Header } from '../../components/Header'

import banner1 from '../../assets/banner01.png'
import banner2 from '../../assets/banner02.png'
import banner3 from '../../assets/banner03.png'
import banner4 from '../../assets/banner04.png'
import banner5 from '../../assets/banner05.png'

import cadeira from '../../assets/cadeira.png'
import relogio from '../../assets/relogio.png'
import limpeza from '../../assets/limpeza.png'
import poltrona from '../../assets/poltrona.png'

import { ContainerHome, Mosaic } from './style'
import { Footer } from '../../components/Footer'
import { CardProduct } from '../../components/CardProduct'

export const Home = () => {
  const [showSearchMobile, setShowSearchMobile] = useState(false)

  const [mosaicPictures, setMosaicPictures] = useState([
    { id: 1, url_img: banner1 },
    { id: 2, url_img: banner2 },
    { id: 3, url_img: banner3 },
    { id: 4, url_img: banner4 },
    { id: 5, url_img: banner5 },
  ])

  const [listProducts, setListProducts] = useState([
    {
      id: 1,
      url_img: cadeira,
      description:
        'Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.',
      old_value: 582.9,
      current_value: 238.41,
      promotion: 15,
      payment_options: {
        installments: 5,
        value_installment: 47.68,
        interest: false,
      },
    },
    {
      id: 2,
      url_img: relogio,
      description:
        'Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.',
      old_value: 582.9,
      current_value: 238.41,
      promotion: 23,
      payment_options: {
        installments: 5,
        value_installment: 47.68,
        interest: false,
      },
    },
    {
      id: 3,
      url_img: limpeza,
      description:
        'Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.',
      old_value: 582.9,
      current_value: 238.41,
      promotion: '',
      payment_options: {
        installments: 5,
        value_installment: 47.68,
        interest: false,
      },
    },
    {
      id: 4,
      url_img: poltrona,
      description:
        'Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.',
      old_value: 582.9,
      current_value: 238.41,
      promotion: '',
      payment_options: {
        installments: 5,
        value_installment: 47.68,
        interest: false,
      },
    },
  ])

  return (
    <>
      <Header />
      <ContainerHome>
        <Mosaic>
          {mosaicPictures.map((item, index) => (
            <figure className={`picture-mosaic-${index}`} key={uuid()}>
              <img src={item.url_img} />
            </figure>
          ))}
        </Mosaic>
        <h2 className='subtitle'>Oportunidades para economizar</h2>

        <div className='line'></div>

        <section className='section-products'>
          <ul className='list-products'>
            {listProducts.map((product) => (
              <CardProduct key={uuid()} product={product} />
            ))}
          </ul>
        </section>
      </ContainerHome>
      <Footer />
    </>
  )
}
