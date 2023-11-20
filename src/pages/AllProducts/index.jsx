import React from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import FilterContainer from '../../components/FilterContainer'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function AllProducts() {

  const { list } = useSelector(({products}) => products)
  const { category } = useParams();

  const individualCategory = useSelector(state => state.categories.list.find(({id}) => id === +category))

  return (
    <div>
      <FilterContainer visible={true} />
      <ProductsContainer visible={true} list={list} category={category} title={individualCategory === undefined ? 'All product' : individualCategory.title}/>
    </div>
  )
}
