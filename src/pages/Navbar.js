import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // Close the dropdown after navigation
  };

  return (
    <div className='bg-customColor3 h-screen'>
      <div className="navbar h-20 pb-4 fixed w-full z-50 top-0 left-0 bg-customColor3 flex items-center justify-between px-4 md:px-8">
        <div className="navbar-start flex items-center">
          <a className="navbar-item text-2xl text-white">
            <span className='font-semibold'>Sanjana</span>
          </a>
        </div>
        {/* Mobile menu icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl relative"
        >
          <HiMenuAlt3 />
        </button>
        {/* Desktop menu */}
        <div className="navbar-end hidden md:flex text-xl space-x-4">
          <a className="navbar-item text-white">
            <button onClick={() => handleNavigate('/Dashboard')}>Home</button>
          </a>
          <a className="navbar-item text-white">
            <button onClick={() => handleNavigate('/About Me')}>About</button>
          </a>
          <a className="navbar-item text-white">
            <button onClick={() => handleNavigate('/Skills')}>Skills</button>
          </a>
          <a className="navbar-item text-white">
            <button onClick={() => handleNavigate('/Resume')}>Resume</button>
          </a>
          <a className="navbar-item text-white">
            <button onClick={() => handleNavigate('/Contact')}>Contact</button>
          </a>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed top-20 right-4 bg-customColor3 z-50">
          <div className="flex flex-col items-start">
            <a className="navbar-item text-white text-lg py-2">
              <button onClick={() => handleNavigate('/Dashboard')}>Home</button>
            </a>
            <a className="navbar-item text-white text-lg py-2">
              <button onClick={() => handleNavigate('/About Me')}>About</button>
            </a>
            <a className="navbar-item text-white text-lg py-2">
              <button onClick={() => handleNavigate('/Skills')}>Skills</button>
            </a>
            <a className="navbar-item text-white text-lg py-2">
              <button onClick={() => handleNavigate('/Resume')}>Resume</button>
            </a>
            <a className="navbar-item text-white text-lg py-2">
              <button onClick={() => handleNavigate('/Contact')}>Contact</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
