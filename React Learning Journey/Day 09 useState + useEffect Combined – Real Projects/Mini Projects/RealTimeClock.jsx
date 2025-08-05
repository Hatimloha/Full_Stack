import React, { useEffect, useState } from 'react'

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-3xl font-bold text-green-600">
      Current Time: {time}
    </div>
  )
}

export default RealTimeClock


