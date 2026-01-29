import api from './api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault()
    await api.post('/api/auth/register', { name, email, password })
    navigate('/')
  }

  return (
    <form onSubmit={submitHandler}>

      <h2>Regiter</h2>

      <input type="text"
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />


      <input type="text"
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />


      <input type="text"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Register</button>

    </form>
  )
}

export default Register