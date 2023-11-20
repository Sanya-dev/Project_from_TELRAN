import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import { LINK } from '../../store/slice/productsSlice'

export default function CatalogItem({id, title, image}) {
  return (
    <div>
      <Link className={s.item} to={`/category_products/${id}`}>
            <img src={`${LINK}/${image}`} alt="" />
            <p className={s.title}>{title}</p>

      </Link>
    </div>
  )
}
