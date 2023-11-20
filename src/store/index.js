import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slice/categorySlice'
import productsReducer from './slice/productsSlice'
import cartReducer from './slice/cartSlice'


export const store = configureStore({
    reducer:{
        categories: categoryReducer,
        products: productsReducer,
        cart: cartReducer
    }
})