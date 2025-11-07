import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        tempItems: [],
        totalPrice: 0,
    },
    reducers: {
        addToCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            existingItem ? existingItem.quantity += 1 : state.items.push({ ...action.payload, quantity: 1 });
            state.tempItems = [...state.items];
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        removeFromCart(state, action) {
            const indexValue = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(indexValue, 1);
            state.tempItems = [...state.items];
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        quantityIncrement(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) existingItem.quantity += 1;
            state.tempItems = [...state.items];
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        quantitydecrement(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) existingItem.quantity -= 1;
            state.tempItems = [...state.items];
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        clearCart() {
            return {
                items: [],
                tempItems: [],
                totalPrice: 0,
            }
        }
    }
});

export default CartSlice.reducer;
export const { addToCart, removeFromCart, quantityIncrement, quantitydecrement, clearCart } = CartSlice.actions;