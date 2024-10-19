import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodos from './Component/AddTodos'
import Todos from './Component/Todos'

function App() {
 

  return (
    <>
      
       <div>
        <h1>Learn about redux toolkit</h1>
        <AddTodos/>
        <Todos/>
       </div>
    </>
  )
}

export default App
