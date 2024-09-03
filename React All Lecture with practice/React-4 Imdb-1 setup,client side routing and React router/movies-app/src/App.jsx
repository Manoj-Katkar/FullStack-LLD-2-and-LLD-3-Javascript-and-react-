import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './assets/components/NavBar'
import Home from './assets/components/Home'
import Watchlist from './assets/components/Watchlist'
import { Routes , Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/watchlist' element={<Watchlist/>}></Route>
        
      </Routes>
{/* 
      <Home/>
      <Watchlist/>
      <NavBar/> */}

    </>
  )
}

export default App
