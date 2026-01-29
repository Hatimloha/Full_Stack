import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import api from './api'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submitHandler = async(e) => {
    e.preventDefault()
    await api.post('/api/auth/login', {email, password})
    navigate('/dashboard')
  }


  return (
    <form onSubmit={submitHandler}>

      <h2>Login</h2>
      
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

      <button >Login</button>
    </form>
  )
}

export default Login