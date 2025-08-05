// Create a form with name and email inputs

import React, { useState } from 'react'

const Form2 = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

  return (
    <>
    <div className='bg-cyan-600 w-100 flex-row items-center text-2xl m-auto p-10 rounded-2xl'>
        <h1 className='text-2xl font-bold '>User's Form</h1>
    <div>
        <input className='bg-white flex-row border-2 rounded-2xl p-3 mt-5 text-black' placeholder='Enter the name' type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
        <br />
        <input className='bg-white flex-row border-2 rounded-2xl p-3 mt-5 text-black' placeholder='Enter the email' type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} />

    </div>
    </div>
    </>
  )
}

export default Form2