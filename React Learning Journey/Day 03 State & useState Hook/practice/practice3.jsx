// Make an InputTracker that shows what the user types in real-time.

import { use, useState } from 'react'
import './App.css'

function App(){
  const [value, setValue] = useState("");
  return(
    <div className='InputTracer'>
      <input type="text" id="userInput" placeholder='Enter the string..' onKeyDown={(e) => setValue(e.target.value)}/>
      <h1 className='result'>{value}</h1>
    </div>
  )
}

export default App
