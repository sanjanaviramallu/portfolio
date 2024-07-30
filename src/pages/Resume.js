import React from 'react';
import res from '../images/res.jpeg';

function Resume() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100 overflow-hidden'>
      <div className='relative w-full h-full flex items-center justify-center'>
        <img 
          src={res} 
          alt="Resume" 
          className='max-w-full max-h-full object-contain' 
        />
      </div>
    </div>
  );
}

export default Resume;
