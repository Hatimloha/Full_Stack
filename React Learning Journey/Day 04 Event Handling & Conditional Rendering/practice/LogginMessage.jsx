// Create a LoginMessage component with a button to switch between "Login" and "Logout".

import React, { useState } from 'react'


const LogginMessage = () => {
    const [message, setMessage] = useState(false);
    const handleState = () => {
        setMessage(!message)
    }
  return (
    <div>
        <button onClick={handleState}>{message ? "Login":"Logout"}</button>
    </div>
  )
}

export default LogginMessage