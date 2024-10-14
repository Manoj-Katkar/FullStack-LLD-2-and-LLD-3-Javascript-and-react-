import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/Parent'
import Timer30Seconds from './components/Timer30Seconds'
import TimerPlayPauseReset from './components/TimerPlayPauseReset'
import ProductsContextProvider from './ContextApi/ProductsContextProvider'
import ConsumeContext from './components/ConsumeContext'
import CartRedux from './components/CartRedux'
import SettingsForm from './components/SettingsForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    {/* <ProductsContextProvider> */}
      {/* All 10 questions revision is there in the parent and child component refer that  */}

      {/* <Parent/> */}

      {/*  Implement a Timer that starts from 30s and ends at 0.*/}
      {/* <Timer30Seconds/> */}

      {/*  Implement Timer Component with Play, Pause, Reset functionality.  like stopWatch*/}
      {/* <TimerPlayPauseReset/> */}

      {/* implemented the context API  */}
      {/* <ConsumeContext/> */}


    {/* </ProductsContextProvider> */}


      <span>React Final Mock Practice</span>

      {/* <CartRedux/> */}
      <SettingsForm/>

    </div>
  )
}

export default App
