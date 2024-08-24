import React, { useState } from 'react'

const TemperatureInput = ({handleTemperatureChange, temperature}) => {



    return (

        <div>
            <label>
                Enter Temperature : 
            </label>
            <input type="text" 
                    value={temperature}
                    onChange={(event) => {
                        handleTemperatureChange(event.target.value)
                    }}
            />
        </div>


    )
}

export default TemperatureInput