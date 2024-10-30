import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './features/CounterSlice';
import { decrement } from './features/CounterSlice';
import { incrementBy2 } from './features/CounterSlice';

export default function Counter() {


    const dispatch=useDispatch();

    const count= useSelector((state)=> state.counter.value)

    const Inc=()=>{dispatch(increment())}
    const Dec=()=>{ dispatch(decrement())}
    const INC2= ()=>{
        dispatch(incrementBy2())
    }

    
  return (
    <div>
        <h1>Counter : {count}</h1>
        <button onClick={Inc}>Increment</button>
        <button onClick={Dec}>decrement</button>
        <button onClick={INC2}>INC2</button>
    </div>
  )
}
