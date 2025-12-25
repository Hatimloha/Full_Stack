import React from 'react'
import { useReducer } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'

const App = () => {

    const [length, setLength] = useState(8);
    const [numberAllow, setNumberAllow] = useState(false);
    const [charAllow, setCharAllow] = useState(false);
    const [password, setPassword] = useState('');


    // useCallback => Here we are taking about optimization
    const passwordGenerator = useCallback(function () {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuxyz';
        if (numberAllow) str += '0123456789'
        if (charAllow) str += '!@#$%^&*()_-~`'

        for (let i = 0; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length) + 1;
            pass += str.charAt(char)
        }

        setPassword(pass)
    }, [length, charAllow, numberAllow, setPassword])

    // useCallback => Here we are tracking the changes and running it again
    useEffect(() => {
        passwordGenerator()
    }, [length,numberAllow, charAllow, passwordGenerator])


    // useRef hook:
    const passwordRef = useRef(null);
    const copyPasswordToClipboard = useCallback(() => {
        // window.navigator.clipboard.writeText(password)
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,999);
        window.navigator.clipboard.writeText(password)
    }, [password])

    return (
        <>
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 h-[30vh]'>
                <h1 className='text-2xl text-center mt-10'>Password Generator</h1>
                <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
                    <input type="text"
                        value={password}
                        className='outline-none w-full py-1 px-3'
                        placeholder='Password'
                        readOnly
                        ref={passwordRef}
                    />

                    <button
                        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
                        onClick={copyPasswordToClipboard}
                    >Copy</button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label>Lenght: {length}</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input type="checkbox"
                            defaultChecked={numberAllow}
                            id='numberInput'
                            onChange={() => {
                                setNumberAllow((prev) => !prev)
                            }}
                        />
                        <label htmlFor="numberInput">Number</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input type="checkbox"
                            defaultChecked={charAllow}
                            id='charInput'
                            onChange={() => {
                                setCharAllow((prev) => !prev)
                            }}
                        />
                        <label htmlFor="charInput">Characters</label>
                    </div>
                </div>

            </div>

        </>
    )
}

export default App