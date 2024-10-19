import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

export default function Todos() {

    const dispatch=useDispatch();
    const todos= useSelector(state=> state.todos)
    console.log(todos)
  return (
    <div>

        <div>Todos</div>
        <ul>
            {todos.map((todo)=>{
                return(
                <li key={todo.id}>{todo.text}
                <button onClick={()=> dispatch(removeTodo(todo.id))}>Del</button>
                
                </li>)

            })}
        </ul>
        

    </div>
  )
}
