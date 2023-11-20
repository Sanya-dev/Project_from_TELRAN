import React, { useState } from 'react'
import s from './style.module.css'
import { useCartProducts } from '../../hooks/useCartProducts';
import { LINK } from '../../store/slice/productsSlice';

export default function CartCalculation() {

    const result = useCartProducts();

    const totalSum = result.reduce((acc, {price, count}) => acc + price * count, 0).toFixed(2);


    const [response, setResponse] = useState({})

  const handler = (event) => {
    event.preventDefault();
      fetch(`${LINK}/sale/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(event.target.number.value)
      })
        .then(res => res.json())
        .then(json => setResponse(json))
    event.target.reset();
  }
  console.log(response);

  return (
    <div className={s.order}>
        <p className={s.text}>Order details</p>
        <div className={s.total}>
            <p>Total</p>
            <p>{totalSum} $</p>
        </div>
        <form onSubmit={handler}  className={s.number}>
          <input type="number" name='number'  placeholder='Phone number' />
          <button>{response.status === 'OK' ? "Sent" : "Order"}</button>
        </form>
        
    </div>
  )
}