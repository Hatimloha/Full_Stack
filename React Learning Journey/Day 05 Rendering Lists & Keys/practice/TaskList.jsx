// 3. Create a TaskList component to render tasks with checkbox for each.

import React from 'react'

const TaskList = () => {
    const tasks = [
    "Even Filter",
    "Live Greeting",
    "Toggle Text",
    "User Cards",
    "Theme Switch"
  ];
  return (
    <>
    <ul>
      {tasks.map((task, index) => {
        return <li className='text-2xl' key={index}>{task}<input type="checkbox" className='ml-5'/></li>
      })}
    </ul>
    </>
  )
}

export default TaskList