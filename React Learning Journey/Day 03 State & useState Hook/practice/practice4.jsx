import React from 'react'
import { useState } from 'react'

const HiddenName = () => {
    const [show, setShow] = useState(false)

    const handleChange = () => {
        setShow(!show);
    }

  return (
    <div>
        <h1>Show Name:{show ? " Hatim": ""}</h1>
        <button onClick={handleChange}>Click Me</button>
    </div>
  )
}

export default HiddenName