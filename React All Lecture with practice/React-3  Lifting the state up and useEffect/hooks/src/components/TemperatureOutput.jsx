import React, { useState } from 'react'


const TemperatureOutput = ({temperature}) => {


    const temperatureFahrenheit = (temperature * (9 / 5)) + 32;



  return (
    <div>
        <>
            <div>Temperature in celsius : {temperature}</div>
            <div>Temperature in fahrenheit : {temperatureFahrenheit}</div>
        </>
    </div>
  )
}

export default TemperatureOutput