import React from 'react'
import s from './style.module.css'
import Container from '../UI/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addAction } from '../../store/slice/cartSlice'
import { LINK } from '../../store/slice/productsSlice'

export default function IndividualProduct() {

  const { productId } = useParams();

  const dispatch = useDispatch();

  const product = useSelector(({products}) => products)
  const newProduct = {...product, list : product.list.find(({id}) => id === +productId)}
  const percent =  newProduct.status === 'ready' ? ((newProduct.list.price - newProduct.list.discount_price)/newProduct.list.price) * 100 : ''

  return (
    <section>
      {
        newProduct.status === 'ready'
        ? 
        <>
         <h2 className={s.productTitle}>{newProduct.list.title}</h2>
      <Container className={s.container}>
        <div><img className={s.img} src={`${LINK}/${newProduct.list.image}`} alt={newProduct.list.title} /></div>
        <div className={s.info}>
        <div className={s.block_price}>
            <p className={s.price}>{(newProduct.list.discount_price ?? newProduct.list.price) + '$'}</p>
            <p className={s.sale}>{newProduct.list.discount_price === null ? '' : newProduct.list.price + '$'}</p>
            <p className={s.percent}>{newProduct.list.discount_price === null ? '' : Math.trunc(percent) + '%'}</p>
        </div>
        <div>
          <button onClick={() => dispatch(addAction(newProduct.list.id))} className={s.btn}>To cart</button>
        </div>
          <div>
            <p className={s.titleDescription}>Description</p>
             <p className={s.description}>{newProduct.list.description}</p>
          </div>
          
        </div>
      </Container>
        </>
        : ''
      }
     
     
    </section>
  )
}
