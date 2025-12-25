import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color, setColor] = useState('olive')
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
              <button className='outline-none px-4 py-1 rounded-xl' style={{backgroundColor: 'red'}}
              onClick={() => setColor('red')}
              >Red</button>
              <button className='outline-none px-4 py-1 rounded-xl' style={{backgroundColor: 'green'}}
              onClick={() => setColor('green')}
              >Green</button>
              <button className='outline-none px-4 py-1 rounded-xl' style={{backgroundColor: 'blue'}}
              onClick={() => setColor('blue')}
              >Blue</button>
              <button className='outline-none px-4 py-1 rounded-xl' style={{backgroundColor: 'yellow'}}
              onClick={() => setColor('yellow')}
              >Yellow</button>
            </div>
        </div>
    </div>
  )
}

export default App