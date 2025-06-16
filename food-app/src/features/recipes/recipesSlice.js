import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    loading:false,
    recipes:[],
    error:''
}

export const fetchRecipes=createAsyncThunk('recipes/fetchRecipes', (diet)=>{
    return axios.get('https://api.spoonacular.com/recipes/complexSearch',{
        params:{
            apiKey:process.env.REACT_APP_SPOONACULAR_KEY,
            diet:diet,
        }
        })
    .then(res=>res.data.results)
    .catch(err=> console.log(err))
})
const recipesSlice=createSlice({
    name:'recipe',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchRecipes.pending,(state)=>{
           state.loading=true
        })
        builder.addCase(fetchRecipes.fulfilled,(state, action)=>{
            state.loading=false
            state.recipes=action.payload
            state.error=''
        })
        builder.addCase(fetchRecipes.rejected,(state,action)=>{
            state.loading=false
            state.recipes=[]
            state.error=action.error.message
        })
    }

})

export default recipesSlice.reducer;