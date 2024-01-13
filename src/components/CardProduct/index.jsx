import { AddCart } from '../ButtonAddCart'
import { ContainerCard, ContentCard } from './style'

export const CardProduct = ({ product }) => {
  return (
    <ContainerCard>
      <ContentCard href='/'>
        <figure className='product-img'>
          <img src={product.url_img} alt={product.description} />
        </figure>

        {product.promotion != '' && <span className='promotion'><p><strong>{product.promotion}%</strong> Off</p></span>}

        <p className='description'>{product.description}</p>

        <p className='old-value'>
          de{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.old_value)}
        </p>

        <p className='current-value'>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.current_value)}</p>

        <p className='payment-options'><strong>{product.payment_options.installments}x</strong> de <strong>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.payment_options.value_installment)}</strong> {product.payment_options.interest == true ? 'com juros' : 'sem juros'}</p>

        <AddCart />
      </ContentCard>
    </ContainerCard>
  )
}
