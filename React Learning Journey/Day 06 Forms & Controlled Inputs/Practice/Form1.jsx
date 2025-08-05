// 1. Create a component with a controlled input (name)

import React from 'react'
import { useState } from 'react'

const Form1 = () => {
    const [name, setName] = useState("")
  return (
    <>
    <h1 className='font-bold text-2xl'>Enter Your Name</h1>
    <input placeholder='Enter you name:' className='text-black text-3xl p-3 bg-white mt-5 w-100 border-2 rounded-2xl' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    </>
  )
}

export default Form1