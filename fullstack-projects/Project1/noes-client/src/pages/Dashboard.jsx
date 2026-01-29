import React from 'react'
import { useEffect, useState } from 'react'
import api from './api'

const Dashboard = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [description, setdescription] = useState('')

  const fetchNotes = async () => {
      const res = await api.get('/api/notes')
      setNotes(res.data)
  }

  const addNote = async (e) => {
    e.preventDefault()
    await api.post('/api/notes', {title, description})
    fetchNotes()
  }

  const deleteNote = async (id) => {
    await api.delete(`/api/notes/${id}`)
    fetchNotes()
  }

  useEffect(() => {
    fetchNotes()
  }, [])
  
  return (
    <div>

      <h2>DashBoard</h2>
      
      
      <form onSubmit={addNote}>
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder='Description' value={description} onChange={(e) => setdescription(e.target.value)}/>
        <button>Add</button>
      </form>

      {notes.map((n) => (
        <div key={n._id}>
          <h4>{n.title}</h4>
          <p>{n.description}</p>
          <button onClick={() => deleteNote(n._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Dashboard