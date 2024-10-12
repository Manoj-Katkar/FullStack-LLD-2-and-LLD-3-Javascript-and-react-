import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stopwatch from './components/Stopwatch'
import AutomatedImageCarousel from './components/AutomatedImageCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Machine Coding Questions</h1>
      {/* <Stopwatch/> */}
      <AutomatedImageCarousel/>
    </>
  )
}

export default App
