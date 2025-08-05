import React, { useEffect, useState } from 'react'

const MouseTracker = () => {
    const [position, setPosition] = useState({x:0, y:0});

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({x:e.clientX, y:e.clientY});
        }

        window.addEventListener("mousemove", updatePosition);
        return() => window.removeEventListener("mousemove", updatePosition)
    }, [])

  return (
    <div>
        <h2>Mouse: {position.x}, {position.y}</h2>
    </div>
  )
}

export default MouseTracker