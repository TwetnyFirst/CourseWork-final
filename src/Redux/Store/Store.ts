import { configureStore } from "@reduxjs/toolkit";
import productsSlice from '../Slice/products';


const store = configureStore({
    reducer:productsSlice,
})

export default store