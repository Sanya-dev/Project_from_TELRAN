import React from 'react'
import s from './style.module.css'
import Container from '../UI/Container'
import CatalogItem from '../CatalogItem'
import { Link } from 'react-router-dom'



export default function Catalog({list, status, title ,show}) {



  return (
    <section className={s.section_catalog}>
        <Container>
        <div className={s.header}>
        <h2>{ title }</h2>
        {
          show 
          ? <Link  to= '/Categories'>All categories</Link>
          : ''
        }
        </div>
            <div  className={s.container_inner}>
                {
                    status === 'loading'
                  ? <p>Идет Загрузка</p>
                  : status === 'error'
                  ? <p>Произошла ошибка</p>
                  : list.map(item => <CatalogItem key={item.id} {...item} />)
                }
            </div>
        </Container>
    </section>
  )
}
