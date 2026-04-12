import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    
    //const response = await axios.get("https://fakestoreapi.com/products");
    const response = await axios.get("https://fakestoreapiserver.reactbd.org/api/products");
    console.log(response.data.data)
    return response.data.data;
})

console.log(fetchProducts);

const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle'
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending,(state) => {
            state.status = 'loading'
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded',
            state.items= action.payload
        })
        .addCase(fetchProducts.rejected, (state) =>{
            state.status = 'failed'
        })
    }
});

export default ProductsSlice.reducer;