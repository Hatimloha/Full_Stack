// 5. Use a timer to count seconds since component mounted.

import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1)
      console.log("Timer Start")
    }, 1000)

    // 🔁 Cleanup when component unmounts
    return () => clearInterval(timer)
  }, []) // ✅ Runs only once on mount

  return (
    <div className='outerContainer'>
      <div className='innerContainer text-black bg-white w-100 m-auto rounded-2xl p-5 text-center shadow-xl'>
        <h1 className='text-3xl font-bold mb-3'>Timer</h1>
        <p className='text-2xl'>⏱️ Seconds since mount: <span className='text-green-600'>{seconds}</span></p>
      </div>
    </div>
  )
}

export default Timer
