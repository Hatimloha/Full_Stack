import React from 'react'
import { useState } from 'react'

const LightBtn = () => {
    const [isLight, setLight] = useState(false);

    const handleChange = () => {
        const nextMode = !isLight;
        setLight(nextMode);
        document.body.style.backgroundColor = nextMode ? "white" : "black"
        document.body.style.color = nextMode ? "black" : "white"
    }

  return (
    <>
    <div className='container'>
        <h1>Change Theme</h1>
        <button onClick={handleChange}>Click Me</button>
    </div>
    </>
  )
}

export default LightBtn