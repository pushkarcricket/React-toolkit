import { createSlice } from "@reduxjs/toolkit";






const countSlice=createSlice({
    name: 'counter',
    initialState: {value:1},
    reducers:{
        increment: (state)=>{
            state.value= state.value+1;
        },
        decrement: (state)=>{
            state.value= state.value-1;
        },
        incrementBy2: (state)=>{
            state.value= state.value*state.value;
        }
    }

})

export default countSlice.reducer
export const{increment,decrement,incrementBy2}=countSlice.actions