import React, { useState } from 'react'
import s from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import Container from '../UI/Container'
import src from './media/logo.png'
import { Link } from 'react-router-dom'
import { useCartProducts } from '../../hooks/useCartProducts'


export default function Nav() {

  const [menuActive, setMenuActive] = useState(false)
  const nav_classes = [s.list, menuActive ? s.active : ''].join(' ')

  const basket = useCartProducts()
  // console.log(basket);
  const result = basket.reduce((acc) => acc + 1, 0)



  return (
    <nav>
        <Container className={s.container}>
        <div className={s.left_side}>
        <a href="#">
            <img src={src} alt="" />
        </a>
        <Link className={s.link} to= '/Categories'>Catalog</Link>
        </div>
        <div className={nav_classes}>
          <div className={s.pages}>
        <Link to= '/'>MainPage</Link>
        <Link to= '/Allproducts'>All products</Link>
        <Link to= '/Allsales'>All sales</Link>
          </div>
        <div className={s.block_icon}>
          <Link to={'/cart'}>
        <p className={s.icon}><FontAwesomeIcon icon={faBasketShopping} fade style={{color: "#339933",}} /></p>
        <p className={s.quantity}>{result}</p>
          </Link>
        </div>
        </div>
        <p className={s.icon_menu} onClick={() => setMenuActive(!menuActive)}>=</p>
        </Container>
    </nav>
  )
}
