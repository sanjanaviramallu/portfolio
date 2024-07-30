import React, { useState } from 'react';
import Navbar from './Navbar';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, like sending it to a server
    console.log({ email, password, message });
  };

  return (
    <div className="bg-customColor3 flex items-center justify-center min-h-screen p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-slate-800 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2 text-white">Email</label>
          <input 
            type="email" 
            id="email" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-slate-700" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold mb-2 text-white">Password</label>
          <input 
            type="password" 
            id="password" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-slate-700" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2 text-white">Message</label>
          <textarea 
            id="message" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-slate-700" 
            placeholder="Enter your message" 
            rows="4" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button 
            type="submit" 
            className="bg-slate-700 hover:bg-customColor3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Let's collaborate
          </button>
        </div>
      </form>
      <Navbar />
    </div>
  );
}

export default Form;
