import React from 'react'
import s from './style.module.css'

export default function Checkbox({...props}) {
  return (
    <div className={s.container}>
        <input className={s.checkbox} type="checkbox" {...props} />
    </div>
  )
}
