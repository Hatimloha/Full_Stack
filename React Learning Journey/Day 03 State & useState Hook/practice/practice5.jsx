import React from 'react'
import { useState } from 'react';

const Like = () => {
    const [value, setValue] = useState(0);

    const updateValue = () => {
        setValue(value + 5)
    }
  return (
    <div>
        <h1>Like: {value}</h1>
        <button onClick={updateValue}>Click Me</button>
    </div>
  )
}

export default Like