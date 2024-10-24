import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



export default function Todos() {

    const dispatch=useDispatch();
     const todos= useSelector(state => state.todo )
  return (
    <div>
        <div>Todos</div>
        {
            todo.map((todo)=>(
                <li key={nanoid}>
                    {todo.text}
                </li>
            ))
        }

    </div>
  )
}
