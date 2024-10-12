import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import ToDo from './components/ToDo'

function App() {
  const [count, setCount] = useState(2)

  return (
    <>
      {/* <Welcome count={count}/> */}

      {/* to understand the class based lifecycle methods  */}
      {count > 0 ? <ToDo count={count} setCount={setCount}/> : "component Un-mounted"}
      {/* <ToDo/> */}
    </>
  )
}

export default App
