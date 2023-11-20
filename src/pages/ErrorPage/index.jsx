import React from 'react'
import Container from '../../components/UI/Container'
import img from './media/404.png'
import s from './style.module.css'

export default function ErrorPage() {
  return (
    <div>
      <Container>
        <img className={s.img} src={img} alt="pageNotFound" />
      </Container>
    </div>
  )
}
