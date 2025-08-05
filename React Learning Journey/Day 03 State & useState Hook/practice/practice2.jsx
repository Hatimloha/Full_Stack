// Create a Counter component that has + and - buttons to change the count.


import { use, useState } from 'react'
import './App.css'

function App(){
  const [value, setValue] = useState(0);
  return(
    <div>
      <h1 className='countValue'>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment ++</button>
      <button onClick={() => setValue(value - 1)}>decrement --</button>
    </div>
  )
}

export default App
