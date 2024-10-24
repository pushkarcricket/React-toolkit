import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState=["breakfast", "lunch"];

const todoslice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            state.push({
                id: nanoid(),
            text: action.payload,

            })
            
        },

        removeTodo: (state,action)=>{
            state=state.filter((todo)=> todo.id !== action.payload)
        }



        

    }
})

export   const{addTodo}=todoslice.actions

export default todoslice.reducer