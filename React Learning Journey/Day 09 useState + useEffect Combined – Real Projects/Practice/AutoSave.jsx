import React, { useEffect, useState } from 'react'

const AutoSave = () => {
    const [text, setText] = useState("");

    useEffect(() => {
      const save = setInterval(() =>{
        console.log("Text Message:", text)
      }, 3000)
    
      return () => {
        clearInterval(save)
      }
    }, [text])
    

  return (
    <div className='outerContainer bg-white text-black p-2 w-100 m-auto'>
        <textarea 
        value={text}
        className='border-2 p-3 text-xl rounded-2xl w-70'
        onChange={(e) => setText(e.target.value)}
        placeholder='Enter the value'
        ></textarea>
    </div>
  )
}

export default AutoSave