// Countdown Timer (Auto Decrement Every Second)

import React, { useEffect, useState } from 'react'

const CountdownTimer = () => {
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        if(seconds === 0) return;

        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    })
  return (
    <div>
        <h2>⏱️ {seconds} seconds left</h2>
    </div>
  )
}

export default CountdownTimer