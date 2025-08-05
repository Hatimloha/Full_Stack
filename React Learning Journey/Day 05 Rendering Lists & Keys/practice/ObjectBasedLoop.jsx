// 4. Add key using id in all object-based loops.

import React from 'react'

export const ObjectBasedLoop = () => {
    const users = [
        {id: 1, name: "Hatim"},
        {id: 2, name: "Jafar"},
        {id: 3, name: "Jumana"},
        {id: 4, name: "Ali"},
        {id: 5, name: "Fatema"}
    ] 

  return (
   <>
    <h2>User List</h2>
    <div>
        {users.map((user) => {
            return <li className='text-red-500 list-none' key={user.id}>{user.id}. {user.name}</li>
        })}
    </div>
   </>
  )
}


export default ObjectBasedLoop