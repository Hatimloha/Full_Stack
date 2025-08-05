import React from 'react'
import { useState } from 'react'

const Toggle = () => {
    const [isOn, setIsOn] = useState(false)

    const handleChanges = () => {
       setIsOn(!isOn)
    }

  return (
    <>
    <div className='toggleBox'>
        <h1>Toggle Button</h1>
        <button onClick={handleChanges}>{isOn ? "ON" : "OFF"}</button>
    </div>
    </>
  )
}

export default Toggle