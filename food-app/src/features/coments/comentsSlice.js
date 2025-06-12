import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState={
    loading:false, 
    coments:[],
    error:''
}

export const fetchComents=createAsyncThunk('coment/fetchComents', ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.data)
    .catch(err=> console.log(err))
})
const comentsSlice=createSlice({
    name:'coment',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchComents.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchComents.fulfilled,(state,action)=>{
            state.loading=false
            state.coments=action.payload
            state.error=''
        })
        builder.addCase(fetchComents.rejected,(state,action)=>{
            state.loading=false
            state.coments=[]
            state.error=action.error.message

        })

    }
})
export default comentsSlice.reducer;