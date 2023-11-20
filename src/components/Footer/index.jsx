import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Container from '../UI/Container';
import s from './style.module.css'

export default function Footer() {
  return (
    <footer>
      <Container className={s.container}>
        <div className={s.contacts}>
            <div className={s.contact_block}>
                <p className={s.title}>Contact</p>
                <a className={s.tel} href="tel:+49015735996746">+49 157 35996746</a>
                <div className={s.icon_block}>
                  <div className={s.icon_inner}>
                <p className={s.icon}>
                  <BsInstagram /> 
                </p>
                <p>
                Instagram
                </p>
                  </div>
                  <div className={s.icon_inner}>
                <p className={s.icon}>
                  <BsWhatsapp />
                </p>
                <p>
                  Whatsapp
                </p>
                  </div>
                </div>
            </div>
            <div className={s.address_block}>
                <p className={s.title}>Address</p>
                <a className={s.address} href="https://goo.gl/maps/Sf1Kh3RdfX5TMFRQ9">Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
                <p className={s.working_title}>Working Hours:</p>
                <p className={s.working_time}>24 hours a day</p>
            </div>
        </div>
        <div className={s.map}> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9713.636886541603!2d13.3750447!3d52.5079329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1690373306128!5m2!1sru!2sde" title='myFrame' loading="lazy" ></iframe>
        </div>
            
      </Container>
    </footer>
  )
}


