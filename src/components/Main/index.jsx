import React from 'react'
import Container from '../UI/Container'
import s from './style.module.css'
import src from './media/flower.png'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <main>
        <Container className={s.container}>
            <div className={s.main}>
                <div className={s.sale}>
                    <h1>Sale </h1>
                    <h2>New season</h2>
                    <Link to= '/AllSales'>Sale</Link>
                </div>
                <div>
                <img className={s.img} src={src} alt="" />
                </div>
            </div>
        </Container>
    </main>
  )
}
