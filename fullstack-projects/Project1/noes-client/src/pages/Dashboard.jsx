import React, { useSyncExternalStore } from 'react'
import { useEffect, useState } from 'react'
import api from './api'

const logout = async () => {
  await api.post('/api/auth/logout')
  window.location.href = '/'
}

const Dashboard = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [description, setdescription] = useState('')
  const [image, setImage] = useState(null)
  const [user, setUser] = useState({})
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)

  // Profile Image: 

  const fetchProfile = async () => {
    const res = await api.get('/api/auth/me')
    setUser(res.data);
  }

  // Notes
  const fetchNotes = async () => {

    const res = await api.get(
      `/api/notes?search=${search}&page=${page}`
    );

    setNotes(res.data.notes)
    setPages(res.data.pages)

    // ## Code with pagingation
    // const res = await api.get('/api/notes')
    // setNotes(res.data)
  }

  const addNote = async (e) => {
    e.preventDefault()
    await api.post('/api/notes', { title, description })
    fetchNotes()
  }

  const deleteNote = async (id) => {
    await api.delete(`/api/notes/${id}`)
    fetchNotes()
  }

  const updateNote = async (id) => {
    const noteToUpdate = notes.find(n => n._id === id)
    await api.put(`/api/notes/${id}`, {
      title: noteToUpdate.title,
      description: noteToUpdate.description,
    })
    fetchNotes()
  }

  // Upload Function

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('image', image)

    const res = await api.post('/api/auth/upload', formData)
    setUser(res.data)
  }


  useEffect(() => {
    fetchNotes()
    fetchProfile()
  }, [page, search])

  return (
    <div className='flex flex-col min-h-screen justify-center items-center border-3 rounded-3xl p-2 shadow-2xl bg-white text-black'>

      {/* Profile Photo Upload */}
      <div className='flex flex-col justify-center items-center gap-2'>

        <h2 className='font-bold text-3xl'>Profile</h2>

        {user.avatar && (
          <img src={user.avatar} width={150} className='rounded-full ' />
        )}

        <div className='border-2 p-2 rounded-2xl'>
          <input type="file" onChange={(e) => setImage(e.target.files[0])}
            className=''
          />
          <button onClick={uploadImage}
            className='text-white cursor-pointer'
          >Upload</button>

        </div>
      </div>

      {/* Notes Add Sections */}
      <div>
        <h2 className='font-bold text-3xl mt-10 mb-3'>DashBoard</h2>
        <form onSubmit={addNote}
          className='border-2 p-2 rounded-2xl flex gap-2'>
          <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}
            className='border-2 p-1 rounded-xl'
          />
          <input type="text" placeholder='Description' value={description} onChange={(e) => setdescription(e.target.value)}
            className='border-2 p-1 rounded-xl'
          />
          <button className='text-white cursor-pointer'>Add</button>
        </form>
      </div>


      {/* Logout Button */}

      <button onClick={logout}
        className='text-white bottom-135 fixed cursor-pointer rounded-4xl ml-110'
      >Logout</button>


      {/* Search Section: filter list */}
      <div className='border-4 p-2 m-3 flex gap-2 justify-center items-center'>

        <label className='text-2xl'>Search</label>

        <input type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search the item'
          className='border-2 p-2 w-100 cursor-text'
        />

      </div>

      {/* Dashboard Content Section */}
      <div className='flex flex-col gap-3 border-2 p-2 rounded-2xl'>
        {notes.map((n) => (
        <div key={n._id}
        className='flex gap-2'
        >
          <input
            value={n.title}
            onChange={(e) => {
              const updated = [...notes];
              updated.find(x => x._id === n._id).title = e.target.value;
              setNotes(updated);
            }}
            className='border-2 p-1 rounded-2xl'
          />

          <input
            value={n.description}
            onChange={(e) => {
              const updated = [...notes];
              updated.find(x => x._id === n._id).description = e.target.value;
              setNotes(updated);
            }}
            className='border-2 p-1 rounded-2xl'
          />

          <div className='flex justify-center items-center gap-2 mt-3'>
            <button onClick={() => updateNote(n._id)}
              className='text-white'
              >Update</button>
          <button onClick={() => deleteNote(n._id)}
            className='text-white'
            >Delete</button>
          </div>
        </div>
      ))}
      </div>


      {/* Page Change Option */}
      <div className='flex justify-center items-center text-white gap-2 mt-10'>

        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <button disabled={page === pages} onClick={() => setPage(page + 1)}>Next</button>

      </div>
    </div>
  )
}

export default Dashboard