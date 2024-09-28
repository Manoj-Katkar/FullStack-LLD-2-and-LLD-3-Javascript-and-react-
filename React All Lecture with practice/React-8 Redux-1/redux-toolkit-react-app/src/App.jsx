import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import CounterRedux from './Components/CounterRedux'
import ToDoRedux from './components/ToDoRedux'

function App() {


  return (

    <>
        {/* <Counter/> */}
        {/* <CounterRedux/> */}
        <ToDoRedux/>
    </>


  )
}

export default App
