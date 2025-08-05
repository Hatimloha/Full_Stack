// 2. Newsletter Signup	Email validation

import React, { useState } from 'react'

const Newsletter = () => {
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("red");
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = () => {
        if(!input){
            setMessage("Enter the Email!");
            setColor("red")
        }else if(!input.includes("@")){
            setMessage("Invalid email format");
            setColor("red")
        }else{
            setMessage("Subscribed successfully!")
            setColor('green')
        }
    }
    
  return (
    <div className='outerContainer'>
        <div className='innerContainer bg-white w-200 m-auto text-black h-auto rounded-3xl shadow-2xl p-5'>
            <h2 className='font-bold text-4xl p-5'>Join Our Newsletter</h2>
            <p className='text-xl pb-5'>Stay up-to-date with the latest news and updates.</p>
            <input type="text" placeholder='Enter your Email address' className='border-2 broder-black p-3 rounded-2xl w-100 text-xl' 
            value={input}
            onChange={handleChange}
            />
            <button className='font-bold ml-10 cursor-pointer text-white' onClick={handleSubmit}>Suscribe</button>
            <p className='text-xl mt-3 font-bold' style={{color : color}}>{message}</p>
        </div>
    </div>
  )
}

export default Newsletter