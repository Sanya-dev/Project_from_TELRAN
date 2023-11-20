import React, { useEffect, useState } from 'react'
import s from './style.module.css'
import Container from '../UI/Container'
import Checkbox from '../UI/Checkbox'
import { discountedItems, priceAction, resetFilter, sortAction } from '../../store/slice/productsSlice'
import { useDispatch} from 'react-redux'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function FilterContainer({visible}) {

    const dispatch = useDispatch()
    // console.log(products);

    const sortOptions = [
        {id: 1, value: 'default', label: 'default'},
        {id: 2, value: 'price', label: 'price'},
        {id: 3, value: 'title', label: 'title'}
       ]
        const [isChecked, setIsChecked] = useLocalStorage(false, 'isChecked')
        const [priceFilter, setPriceFilter] = useLocalStorage( {
        min:0,
        max:Infinity
        }, 'priceFilter')
        // console.log({...priceFilter, max:Infinity});

        const [ selectedSort, setSelectedSort ] = useLocalStorage('default', 'selectedSort')

       const selectHandler = e => {
        setSelectedSort(e.target.value)
        dispatch(sortAction(e.target.value));
       }


       let resetAll = () =>{
        setIsChecked(false);
        setPriceFilter({min:0, max:Infinity});
        setSelectedSort('default')
       }

       
       useEffect(() => {
           dispatch(discountedItems(isChecked))
    }, [dispatch, isChecked])
    
    useEffect(() => {
        dispatch(priceAction({...priceFilter, max: priceFilter.max || Infinity}))
 }, [dispatch, priceFilter])

       


        useEffect(() => {
            return () => {
                dispatch(resetFilter());
            }
        }, [dispatch])


  return (
    <div>
        <Container className={s.container}>
            <div className={s.price}> 
                <p>Price</p>
                <input value={priceFilter.min === 0 ? '' : priceFilter.min} type="number" placeholder='from' onChange={({target}) => setPriceFilter({...priceFilter, min: +target.value})}/>
                <input value={priceFilter.max ?? Infinity} type="number" placeholder='to' onChange={({target}) => setPriceFilter({...priceFilter, max: +target.value || Infinity})}/>
            </div>
            <div  className={visible ? s.disconted : s.disconted_none}>
                <p>Disconted items</p>
                <Checkbox 
                checked={isChecked}
                onChange={({target}) => setIsChecked(target.checked)}
                />
            </div>
            <div className={s.sorted}>
                <p>Sorted</p>
                <select onChange={selectHandler} value={selectedSort} className={s.options}>
                    {
                        sortOptions.map(({id, value, label}) => <option key={id} value={value} >{label}</option>)
                    }
                </select>
            </div>
            <button className={s.reset_button} onClick={resetAll}>Reset all filter</button>
        </Container>
    </div>
  )
}
