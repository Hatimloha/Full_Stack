// 5. BONUS: Add basic validation (e.g., email should contain @)

import React, { useState } from 'react';

const Form4 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email.includes("@")) {
      setError("❌ Invalid email: missing '@' symbol.");
      setSubmitted(false);
    } else {
      setError("");
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setSubmitted(false);
    setError("");
  };

  return (
    <>
      <div className='bg-cyan-600 w-110 flex-row items-center text-2xl m-auto p-10 rounded-2xl'>
        <h1 className='text-2xl font-bold'>User's Form</h1>

        <div>
          <input
            className='bg-white flex-row border-2 rounded-2xl p-3 mt-5 text-black'
            placeholder='Enter the name'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            className='bg-white flex-row border-2 rounded-2xl p-3 mt-5 text-black'
            placeholder='Enter the email'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className='mt-5 p-3 w-40 cursor-pointer font-bold text-3xl mb-10'
          onClick={handleSubmit}
        >
          Submit
        </button>

        <button
          className='mt-5 p-3 w-40 cursor-pointer font-bold text-3xl mb-10 ml-5'
          onClick={handleReset}
        >
          Reset
        </button>

        {error && (
          <p className='text-red-700 font-semibold mt-3'>{error}</p>
        )}

        {submitted && (
          <div className='text-left text-black mt-5'>
            <h4 className='font-bold mb-2'>Output:</h4>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p className='mt-2 text-green-600 font-semibold'>
              ✅ Thank you for submitting!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Form4;
