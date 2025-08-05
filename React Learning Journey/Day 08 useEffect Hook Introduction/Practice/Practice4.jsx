// 4. Set the document title dynamically based on a state (e.g., You clicked X times).


import React, { useEffect, useState } from 'react'

const Practice4 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count]) // ✅ runs whenever `count` changes

  return (
    <div className='outerContainer'>
      <div className='innerContainer text-black text-center bg-white p-5 rounded-xl shadow-lg w-100 m-auto'>
        <h1 className='text-3xl font-bold mb-4'>Click Counter</h1>
        <p className='text-2xl mb-2'>You clicked {count} times</p>
        <button 
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => setCount(prev => prev + 1)}
        >
          Click Me
        </button>
      </div>
    </div>
  )
}

export default Practice4
