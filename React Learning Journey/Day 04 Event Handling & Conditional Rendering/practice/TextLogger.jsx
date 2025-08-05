// Make a TextLogger input that logs the typed value in console.

import React, { useState } from 'react'

const TextLogger = () => {
    const textOutput = (e) => {
        console.log(e.target.value)
    }
  return (
    <div>
        <input type="text" placeholder='Enter the name...' onKeyDown={textOutput}/>
        
    </div>
  )
}

export default TextLogger