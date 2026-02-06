import React, { useEffect, useState } from 'react'
import api from './api'


const Taskboard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('')
  const [taskStatus, setTaskStatus] = useState('todo')

  // Fetch all the avaible task as per user login
  const fetchTasks = async () => {
    const res = await api.get('/api/tasks')
    setTasks(res.data)
  }


  // Add Tasks:
  const addTasks = async (e) => {
    e.preventDefault();
    await api.post('/api/tasks', {
      title: taskTitle,
      status: taskStatus
    });
    fetchTasks()
  }


  // Update Tasks: 
  const updateTasks = async (id, status) => {
    await api.put(`/api/tasks/${id}`, {
      status
    })

    fetchTasks()
  }


  const deleteTasks = async (id) => {
    await api.delete(`/api/tasks/${id}`)
    fetchTasks()
  }



  // useEffect -> mount the data when page load
  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div>
      <h1>Tasks</h1>


      {/* Form - Add Tasks */}
      <form onSubmit={addTasks}>

        {/* Add Tasks */}
        <input type="text"
          placeholder='Task Title'
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        {/* Select Tasks Status */}
        <select onChange={(e) => setTaskStatus(e.target.value)}>
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>

        <button>Add</button>
      </form>

      {
        tasks.map((t) => (
          <div key={t._id}>
            {console.log(t)}
            
            <b>{t.title}</b> - {t.status}

            <button onClick={() => updateTasks(t._id, "todo")}>Todo</button>
            <button onClick={() => updateTasks(t._id, "doing")}>Doing</button>
            <button onClick={() => updateTasks(t._id, "done")}>Done</button>
          </div>
        ))
      }


    </div>
  )
}

export default Taskboard