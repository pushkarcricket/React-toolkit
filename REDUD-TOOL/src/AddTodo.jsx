import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './TodoSlice/todoSlice';

export default function AddTodo() {


    const[input, setInput]=useState("");
    const dispatch=useDispatch();


    const handleSubmit=(e)=>{
        e.preventDefault();

        dispatch(addTodo(input))

        setInput("")

    }

    const handleChange=(e)=>{
        setInput(e.target.value)

        console.log(input)

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
  <div className="form-group">
   
    <input type="text" className="form-control" 
     placeholder="Enter Todo"
     value={input}

     onChange={handleChange}
    
    />
    
  </div>
 
  <button type="submit" className="btn btn-primary">Add</button>
</form>
    </div>
  )
}
