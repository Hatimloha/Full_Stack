// 2. Show an alert when a button is clicked and a state changes.

import React, { useEffect, useState } from 'react'
    
const Practice2 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      alert("Count Change")
    }, [count])
    

  return (
    <div className='outerContainer'>
        <div className='innerContainer bg-white w-100 m-auto rounded-3xl text-black flex flex-col gap-2 items-center p-3'>
            <h1 className='text-2xl font-bold'>Alert When Component load</h1>
            <h2 className='font-bold text-3xl' value={count}>{count}</h2>
            <button className='p-2 border-2 border-black rounded-2xl text-xl w-50'
            onClick={() => setCount(prev => prev + 1)}
            >Click</button>
        </div>
    </div>
  )
}

export default Practice2