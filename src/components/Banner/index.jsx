import React, { useState } from 'react'
import s from './style.module.css'
import Container from '../UI/Container'
import banner from './media/logo_banner.png'
import { LINK } from '../../store/slice/productsSlice'

export default function Banner() {

  const [response, setResponse] = useState({})

  const handler = (event) => {
    event.preventDefault();
      fetch(`${LINK}/sale/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(event.target.phoneNum.value)
      })
        .then(res => res.json())
        .then(json => setResponse(json))
    event.target.reset();
  }
console.log(response);
  return (
    <section>
        <Container className={s.container}>
                <img src={banner} alt="" />
                <form onSubmit={handler} className={s.discount}>
                    <h1>5% off on the first order</h1>
                    <input name='phoneNum' type="text" placeholder='+49'/>
                    <button>{response.status === 'OK' ? "Sent" : "Get discount"}</button>
                </form>
        </Container>
    </section>
  )
}
