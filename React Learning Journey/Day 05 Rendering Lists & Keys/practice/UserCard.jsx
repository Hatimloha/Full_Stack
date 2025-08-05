// 5. BONUS: Create a list of user cards (UserCard) with name and email.
import React from 'react';

export const UserCard = () => {
  const users = [
    { name: "Hatim", email: "xyz@gmail.com" },
    { name: "Jafar", email: "jafar@gmail.com" },
    { name: "Jumana", email: "jumana@gmail.com" },
    { name: "Rahul", email: "rahul@gmail.com" },
    { name: "Binod", email: "binod@gmail.com" }
  ];

  return (
    <div className='text-center flex flex-col items-center gap-4'>
      <h1 className='text-2xl font-bold'>User Cards</h1>

      {users.map((user, index) => (
        <div
          key={index}
          className='bg-amber-300 border-2 border-black rounded-2xl p-4 w-80 text-left shadow'
        >
          <h2 className='font-semibold'>{user.name}</h2>
          <p className='text-sm text-gray-800'>{user.email}</p>
        </div>
      ))}
    </div>
  );
};


export default UserCard
