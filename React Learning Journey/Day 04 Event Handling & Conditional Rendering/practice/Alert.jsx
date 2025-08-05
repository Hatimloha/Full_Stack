// Create a ClickAlert button that shows an alert when clicked.

import React from 'react'
import { useState } from 'react'

const Alert = () => {
    const popUp = () => {
        alert("Hey, You Clicked Me!!!")
    }
  return (
    <div>
        <button onClick={popUp}>Click Me</button>
    </div>
  )
}

export default Alert