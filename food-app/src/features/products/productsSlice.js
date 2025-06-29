import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    loading:false,
    productb:[],
    error:''
}

export const fetchProducts=createAsyncThunk('product/fetchProducts',(query)=>{ // cambio  () por (query)
    return axios.get('https://api.spoonacular.com/food/products/search', {
        params:{
            apiKey:process.env.REACT_APP_SPOONACULAR_KEY,
            query:query //cambio 'protein' por query
        }
    })
    .then(resp=>resp.data.products)
    .catch(err=> console.log(err))
})

const produtsSlice=createSlice({
    name:'product',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchProducts.fulfilled,(state, action)=>{
                state.loading=false
                state.productb=action.payload
                state.error=''
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
                state.loading=false
                state.productb=[]
                state.error=action.error.message
        })
        }

})

export default produtsSlice.reducer;