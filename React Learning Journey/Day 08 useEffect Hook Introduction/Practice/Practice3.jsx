// 3.Watch a text state and console log whenever it changes.

import React, { useEffect, useState } from 'react'

const Practice3 = () => {
  const [str, setStr] = useState("")

  const handleChange = (e) => {
    setStr(e.target.value);
  }

  useEffect(() => {
    console.log("Value has been changed")
  }, [str])
  

  return (
    <div className='outerContaienr'>
      <div className='innerContainer bg-white text-black w-100 m-auto rounded-3xl'>
        <h1 className='font-bold text-2xl'>Console When Text Change</h1>
        <input type="text" value={str}
        className='border-2 border-black rounded-xl p-2 text-xl m-3'
        placeholder='Enter the feedback'
        onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Practice3