import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LINK } from "./productsSlice"

const initialState = {
    list: []
}


const URL = `${LINK}/categories/all`;


export const fetchCategories = createAsyncThunk(
    '/category/fetchCategories',
    async () => {
        const response = await fetch (URL)
        const data = await response.json()
        return data
    }
)


export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
            state.status = 'loading'
            })
            .addCase(fetchCategories.fulfilled, (state, {payload}) => {
            state.status = 'ready';
            state.list = payload
            })
            .addCase(fetchCategories.rejected, (state) => {
            state.status = 'rejected'
            })
    }
})

export default categorySlice.reducer;