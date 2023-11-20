import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'
import FilterContainer from '../../components/FilterContainer'

export default function AllSales() {

  const { list  } = useSelector(({products}) => products)
  const sale_list = list.filter(item => item.discount_price !== null)

return (
    <div>
      <FilterContainer visible={false}/>
      <ProductsContainer visible={true} title={'Product with sale'} list ={sale_list}/>
    </div>
  )
}
