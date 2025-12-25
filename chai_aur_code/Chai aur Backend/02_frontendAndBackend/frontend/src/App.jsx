import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes, setjokes] = useState([]);
  

  useEffect(() => {
    // we have use proxy here other we have to use the full url "http://localhost:3000/api/jokes"
    axios.get('/api/jokes')
      .then((res) => {
        setjokes(res.data)
      }).catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <h1>Chai aur full stack</h1>
      <p>Jokes: {jokes.length}</p>
      

      {jokes.map((joke) => (
        <div key={joke.id} className='text-red-500'>
          <h3>{joke.title}</h3>
          <h3>{joke.content }</h3>
        </div>
      ))}
    </>
  )
}

export default App
