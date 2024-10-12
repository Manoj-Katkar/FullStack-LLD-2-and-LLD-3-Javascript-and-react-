import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FocusInput from './components/FocusInput'
import Timer from './components/Timer'

function App() {


  return (
    <>
      <h1>UseRef() hook</h1>

      {/* To Focus element using t he useRef() */}
      {/* <FocusInput/> */}

      <Timer/>
      
    </>
  )
}

export default App
