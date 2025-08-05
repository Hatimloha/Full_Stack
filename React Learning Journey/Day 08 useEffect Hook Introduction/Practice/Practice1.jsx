// 1. Log "Component loaded" only once using useEffect.
import React, { useEffect, useState } from 'react'

const Practice1 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Component loaded, only once using useEffect")
  }, []) // ✅ empty array means only on mount

  return (
    <div className='outerContainer'>
      <div className='innerContainer'>
        <h3>Component Loaded</h3>
        <h1>{count}</h1>
        <button 
          className='p-3 bg-green-500 text-white font-bold rounded-xl mt-4'
          onClick={() => setCount(prev => prev + 1)}
        >
          Increase Count
        </button>
      </div>
    </div>
  )
}

export default Practice1
