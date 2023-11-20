import React from 'react'
import Main from '../../components/Main'
import Catalog from '../../components/Catalog'
import Banner from '../../components/Banner'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'

export default function MainPage() {

  const { list } = useSelector(({products}) => products)
  
 const sale_list = list
  .filter(item => item.discount_price !== null)
  .slice(0, 3)

  const categories = useSelector(({categories}) => categories.list)
  const main_categories = categories.slice(0,4)



  return (
    <div>
    <Main />
    <Catalog list={main_categories} title={'Catalog'} show={true} />
    <Banner />
    <ProductsContainer visible={false}  title={'Sale'} list={sale_list}/>
    </div>
  )
}
