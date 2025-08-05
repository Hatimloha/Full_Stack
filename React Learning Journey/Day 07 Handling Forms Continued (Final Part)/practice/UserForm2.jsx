// 5. Gender Radio Form	type="radio" options

import React, { useState } from 'react'

const UserForm2 = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [color, setColor] = useState("")
    const [city, setCity] = useState("")
    const [selectedGame, setSelectedGame] = useState("");

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !city) {
            setMessage("Please enter the name, email & city")
            setColor("red")
        } else if (!email.includes("@")) {
            setMessage("Invalid Email")
            setColor("red")
        } else {
            setMessage("Successfully submited")
            setColor("green")
        }
    }

    return (
        <div className='outerContainer'>
            <div className='innerContainer border-2 rounded-2xl w-150 m-auto h-auto bg-cyan-200 text-black p-5'>
                <h1 className='font-bold text-3xl'>User Form</h1>
                <div className='details flex flex-col justify-center items-center'>
                    <input value={name} onChange={handleName} type="text" placeholder='Enter your name' className='border-2 broder-black rounded-xl w-100 p-2 text-xl mt-5' />
                    <input value={email} onChange={handleEmail} type="text" placeholder='Enter your email' className='border-2 broder-black rounded-xl w-100 p-2 text-xl mt-5' />
                    <select className='mt-5 w-100 border-2 rounded-xl' value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value="" className='font-bold'>Select City</option>
                        <option value="Udaipur">Udaipur</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Ajmer">Ajmer</option>
                        <option value="Dahod">Dahod</option>
                    </select>
                </div>
                <div className="p-2">
                    <h3 className='font-bold text-left ml-20 text-2xl'>Choose Game</h3>
                    <div className='radioBtn mt-5 flex gap-10 ml-20'>
                        {["Cricket", "Hockey", "Volleyball"].map((game) => (
                            <label key={game} className='flex items-center gap-2 text-xl font-semibold'>
                                <input
                                    type="radio"
                                    name="game"
                                    value={game}
                                    checked={selectedGame === game}
                                    onChange={(e) => setSelectedGame(e.target.value)}
                                />
                                {game}
                            </label>
                        ))}
                    </div>

                    {selectedGame && (
                        <p className="ml-20 mt-5 mr-22 text-green-700 font-bold text-xl">
                            Selected Game: {selectedGame}
                        </p>
                    )}
                </div>


                <button className='font-bold text-2xl border-2 bg-red-500 rounded-2xl p-2 cursor-pointer mt-5 hover:bg-green-400' onClick={handleSubmit} >Submit</button>
                <p className='font-bold text-xl mt-5' style={{ color: color }}>{message}</p>


            </div>
        </div>
    )
}

export default UserForm2