import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addAction } from '../../store/slice/cartSlice'
import { LINK } from '../../store/slice/productsSlice'

export default function Product({id, image, price, discount_price, title, visible}) {

  const dispatch = useDispatch()
  const percent = ((price - discount_price)/price) * 100

  

  return (
    <div className={s.general}>
      
    <Link to={`/product/${id}`}>
    <div className={s.block_img}>
      <div>
        <img className={s.img} src={`${LINK}/${image}`} alt={title} />
      </div>
    </div>
    <div>
      <div className={s.block_price}>
        <p className={s.price}>{(discount_price ?? price) + '$'}</p>
        <p className={s.sale}>{discount_price === null ? '' : price + '$'}</p>
        <p className={s.percent}>{discount_price === null ? '' : Math.trunc(percent) + '%'}</p>
      </div>
      <p className={s.description}>{title}</p>
    </div>
  </Link>
            <div className={visible ? s.img_overlay : s.img_overlay_hidden}>
              <button onClick={() => dispatch(addAction(id))} className={s.btn}>Add to cart</button>
            </div>
    </div>
       
  )
}




