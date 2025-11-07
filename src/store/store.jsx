import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from './slices/ProductsSlice';
import ProductDetailSlice from './slices/ProductDetailSlice';
import CartSlice from './slices/CartSlice'

const store = configureStore({
    reducer: {
        products: ProductsSlice,
        product: ProductDetailSlice,
        cart: CartSlice,
    }
});

export default store;