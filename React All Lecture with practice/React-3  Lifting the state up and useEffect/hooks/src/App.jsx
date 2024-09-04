import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Form from './components/Form'
import TemperatureOutput from './components/TemperatureOutput'
import TemperatureInput from './components/TemperatureInput'
import Effect from './components/Effect'
import Profile from './components/profile'

function App() {

  //kepping the same state that is getting accesed by the two differant state writing inside the App.jsx 
  const [temperature, setTemperature] = useState(0);


  const handleTemperatureChange =( newTemperature) => {
      setTemperature(newTemperature);
  }

  

  return (
    <>
  
      {/* <Counter name = "Manoj"/> */}
      {/* <Form/> */}
      {/* <TemperatureInput handleTemperatureChange={handleTemperatureChange} temperature={temperature}/> 
      <TemperatureOutput temperature={temperature}/> */}
      {/* <Effect/> */}
      {/* <Profile/> */}
    </>
  )
}

export default App
