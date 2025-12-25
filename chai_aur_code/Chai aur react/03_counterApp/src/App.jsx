import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // It will increase the value of count by 1 only due to react batch update 
  // const handleIncrement = () => {
  //   setCount(count + 1)
  //   setCount(count + 1)
  //   setCount(count + 1)
  //   setCount(count + 1)
  // }

  // It will update all at once: we have to call the updated value
  let handleIncrement = () => {
      // setCount((previousCount) => {
      //   previousCount + 1
      // })
      setCount(previousCount => previousCount + 1)
      setCount(previousCount => previousCount + 1)
      setCount(previousCount => previousCount + 1)
      setCount(previousCount => previousCount + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='counterAPP'>
          <p>Count: {count}</p>  
          <button className='increment ' onClick={handleIncrement}>Increment</button>
          <button className='decrement ' onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
