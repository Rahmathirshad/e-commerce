import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetail = createAsyncThunk('productDetail/fetchProductDetail', async (id) => {
    //const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const response = await axios.get(`https://fakestoreapiserver.reactbd.org/api/products/${id}`);
    return response.data;
})

const ProductDetailSlice = createSlice({
    name: 'productDetail',
    initialState: {
        item: [],
        status: 'idle',
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductDetail.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.status = 'succeeded',
                    state.item = action.payload
            })
            .addCase(fetchProductDetail.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export default ProductDetailSlice.reducer;
export const { addToCart } = ProductDetailSlice.actions;