// 1. Create a Cities component that renders a list of 5 city names.

import React from 'react'

const Cities = () => {
    const cities = ["Delhi", "Hydrabad", "Bengaluru", "Sikkim", "Kashmir"]

  return (
    <>
    <ul>
        {cities.map((city, index) => {
            return <li key={index}>{city}</li>
        })}
    </ul>
    </>
  )
}

export default Cities