// 💻 Mini Task: Counter with useEffect
// Create a counter that:
// Increases every second using setInterval
// Shows “Stopped” when unmounted (cleanup)


import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
     const interval = setInterval(() => {
            setCount(prev => prev + 1)
            console.log("Count Change")
      }, 1000);

      return () => {
        clearInterval(interval)
        console.log("Stopped")
    }
    }, )
    


  return (
    <div className='container text-black'>
        <div className='innerContainer bg-white border-2 rounded-3xl w-100 m-auto'>
            <h1 className='font-bold text-black text-3xl'>Counter</h1>
            <h3 value={count} className='font-bold text-green-500 text-3xl'>{count}</h3>
        </div>
    </div>
  )
}

export default Counter