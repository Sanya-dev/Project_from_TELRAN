import React from 'react'
import s from './style.module.css'
import Product from '../Product'
import Container from '../UI/Container'

export default function ProductsContainer({category, title, list, visible}) {

  const output_category = category 
  ? list.filter(item => item.categoryId === +category)
  : list
  return (
    <section className={s.section_product}>
        <Container >
          <h2 className={s.h2}>{title}</h2>
          <div className={s.container}>
            {
              output_category
              .filter(({show}) => Object.values(show).every(item => item))
              .map(item => <Product visible={visible} key={item.id} {...item}/>)
            }
           </div>
        </Container>
    </section>
  )
}
