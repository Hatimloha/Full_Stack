// Feedback Box	textarea, min length

import React, { useState } from 'react'

const FeedbackBox = () => {
    const [feedback, setFeedback] = useState("") 
    const [message, setMessage] = useState("") 
    const [color, setColor] = useState("") 

    const handleChange = (e) => {
        const value = e.target.value;
        setFeedback(value)

        if(!value.trim()){
            setMessage("Enter the feedback")
            setColor("red")
        }else{
            setMessage(`Word Limit: 100 - ${100 - value.length}`)
            setColor("green")
        }
    }

   
    

  return (
    <div className='outerContainer'>
        <div className='innerContainer w-200 p-5 bg-white rounded-2xl h-auto text-black m-auto'>
            <h1 className='text-3xl font-bold'>Feedback Box</h1>
            <textarea className='w-100 mt-5 rounded-2xl border-2 border-black p-3 text-2xl' placeholder='Enter the feedback.........'
            value={feedback}
            onChange={handleChange}
            maxLength={100}
            ></textarea>
            <p className='text-xl mt-3 font-bold' style={{color:color}}>{message}</p>
        </div>
    </div>
  )
}

export default FeedbackBox