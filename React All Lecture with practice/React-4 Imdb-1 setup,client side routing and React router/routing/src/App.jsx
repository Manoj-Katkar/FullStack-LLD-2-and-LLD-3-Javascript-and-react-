import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes , Link, Navigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Settings from './components/Settings'
import NotFound from './components/NotFound'
import Parent from './components/Parent'
import Users from './components/Users'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
            {/* here I have to create the differant routes */}
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/settings' element={<Settings/>}></Route>
            <Route path='/users/:id' element={<Users/>}></Route>

            {/* code for redirecting navigating to some other path params  */}
            <Route path='/abc' element={<Navigate to={'/'}></Navigate>}></Route>

            <Route path='*' element={<NotFound/>}></Route>


      </Routes>

      <nav>
        <ul>
          <li><Link to={'/home'}>Home Link</Link></li>
          <li><Link to={'/about'}>About Link</Link></li>
          <li><Link to={'/settings'}>Settings Link</Link></li>
          

        </ul>
      </nav>


      {/* <Parent/> */}
    </>
  )
}

export default App
