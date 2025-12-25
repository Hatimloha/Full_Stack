import { useState } from 'react'
import './App.css'

function App() {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState('')



  const handleClick = () => {

    if (todo.trim() === '') {
      setMessage('Please enter the task..')
      return
    }
    setMessage('')

    setTodos([...todos, todo])
    setTodo('')

  }






  return (
    <>
      <div className='flex flex-col justify-center items-center p-5 bg-white w-[1000px] my-10 mx-auto shadow-2xl rounded-2xl'>

        <h1 className='text-3xl font-bold text-yellow-500'>Todo App</h1>

        <div className='mt-10 flex flex-wrap gap-5 text-2xl '>
          <input type="text"
            placeholder='Enter the task.....'
            className='border-2 p-2 rounded-lg cursor-text w-[600px] '
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          <button
            className='border-2 p-2 rounded-lg w-25 cursor-pointer'
            onClick={handleClick}
          >Add</button>
        </div>

        <div className='todoDisplay'>

          <ul className='flex flex-col mt-10 justify-center items-center gap-2'>
            {todos.map((task, index) => (
              <li key={index}
                className='text-2xl text-left w-[600px] p-2 bg-gray-500 text-white rounded-lg shadow-5xl flex justify-between'
              >{task}
                <span className='flex gap-5'>
                  <button className='py-1 px-2 text-xl bg-amber-300 rounded-2xl cursor-pointer'
                  
                  >Edit</button>
                  <button className='py-1 px-2 text-xl bg-amber-300 rounded-2xl cursor-pointer'
                    onClick={() => {

                    }}
                  >Delete</button>
                </span>
              </li>
            ))}
          </ul>

          <div className='mt-10 text-red-600 text-3xl'>{message}</div>
        </div>

      </div>
    </>
  )
}

export default App
