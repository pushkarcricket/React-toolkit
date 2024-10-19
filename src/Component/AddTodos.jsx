import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';




export default function AddTodos() {

    const[input, setInput]=useState("");
    const dispatch=useDispatch();

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

  return (
    <div>
        <form action="" onSubmit={addTodoHandler}>
            <input type="text"
             placeholder='enter todo' 

             value={input}

             onChange={(e)=>{
                setInput(e.target.value)
             }}
             
             />
            <button>Add</button>
        </form>

    </div>
  )
}
