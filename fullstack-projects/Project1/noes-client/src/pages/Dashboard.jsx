import React from 'react'
import { useEffect, useState } from 'react'
import api from './api'

const logout =async () => {
    await api.post('/api/auth/logout')
    window.location.href = '/'
}

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

  const updateNote = async(id) => {
    await api.put(`/api/notes/${id}`)
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

      <button onClick={logout}>Logout</button>

      {notes.map((n) => (
        <div key={n._id}>
          <input type="text" 
          value={n.title}
          onChange={(e) => {
            const update = [...notes]
            update.find(x => x._id === n._id).title = e.target.value;
            setNotes(update)
          }}
          />

          <input type="text"
          value={n.description}
          onChange={(e) => {
            const update = [...description]
            update.find(x => x._id === n._id).description = e.target.value;
            setdescription(update)
          }}
          />

          <button onClick={() => updateNote(n._id)}>update</button>
          <button onClick={() => deleteNote(n._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Dashboard