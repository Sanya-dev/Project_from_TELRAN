import React from 'react'
import s from './style.module.css'
import CartItem from '../CartItem';
import { useCartProducts } from '../../hooks/useCartProducts';
import Container from '../UI/Container';
import CartCalculation from '../CartCalculation';

export default function CartContainer() {

    const result = useCartProducts();

    console.log(result);

  return (
        <Container className={s.container}>
        {
            result.length !==0 
            ?
            <>
            <div>
                {
                    result.map(item => <CartItem key={item.id} {...item}/>)
                }
            </div>
            <CartCalculation />
            </>
            : <p>Корзина пуста</p>
        }
        </Container>
  )
}
