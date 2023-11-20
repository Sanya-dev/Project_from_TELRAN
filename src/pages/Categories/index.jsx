import React from 'react'
import Catalog from '../../components/Catalog'
import { useSelector } from 'react-redux'

export default function Categories() {

  const { list, status  } = useSelector(({categories}) => categories)

  return (
    <div>
      <Catalog show={false} title={'Categories'} list={list} status={status}/>
    </div>
  )
}
