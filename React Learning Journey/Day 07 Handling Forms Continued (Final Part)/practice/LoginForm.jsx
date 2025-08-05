import React, { useState } from 'react'

const LoginForm = () => {
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = () => {
        if(name === "Hatim" && pass === "12345"){
            setMessage("Login Successful")
            setColor('green');
        }else{
            setMessage('Login Fail!');
            setColor('red');
        }
    }



  return (
    <>
    <div className='bg-purple-300 h-auto w-150 m-auto rounded-3xl'>
        <h1 className='font-bold text-orange-600 text-3xl mt-20'>Login</h1>
        <input type="text" placeholder='Enter Username' className='border-3 w-100 my-3 border-black text-black p-2 text-xl' value={name} onChange={handleName}/>
        <input type="password" placeholder='Enter Password' className='border-3 w-100 my-3 border-black text-black p-2 text-xl' value={pass} onChange={handlePass}/>
        <div>
        <button className='mb-10 cursor-pointer' onClick={handleSubmit}>Submit</button>
        <p className='output font-bold text-xl pb-3' style={{color:color}} >{message}</p>
        </div>

    </div>
    </>
  )
}

export default LoginForm