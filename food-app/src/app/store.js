import { configureStore } from "@reduxjs/toolkit";
import comentsReducer from "../features/coments/comentsSlice"
import recipesReducer from "../features/recipes/recipesSlice"
import productsReducer from "../features/products/productsSlice"
export const store=configureStore({
    reducer:{
        coment:comentsReducer,
        recipe:recipesReducer,
        product:productsReducer,
    }
})