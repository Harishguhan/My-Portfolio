import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    value:300,
    data:[]
}

export const fetchData = createAsyncThunk("data/fetchData", ()=> {
     return axios
     .get('http://localhost:5000/userList')
     .then((response) => response.data)
})

export const userSlice = createSlice({
    name:'userList',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchData.fulfilled,(state,action) => {
            state.data = action.payload;
        })
    }
})


export default userSlice.reducer;