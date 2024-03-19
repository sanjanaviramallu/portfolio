import React from 'react';
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isnavigate = () => {
    navigate(`/About Me`);
  };

  const isnavigate1 = () => {
    navigate(`/Dashboard`);
  };

  const isnavigate2 = () => {
    navigate(`/Skills`);
  };

  const isnavigate3 = () => {
    navigate(`/Contact`);
  };

  return (
    <div className=''>
      <div className="navbar h-20 pb-4 fixed w-full z-50 top-0 left-0 bg-customColor3 "> {/* Adjust shadow here */}
        <div className="navbar-start">
          <a className="navbar-item text-2xl text-white "><span className='font-semibold'>Sanjana</span> / Web Developer</a>
        </div>
        <div className="navbar-end text-xl">
          <a className="navbar-item text-white"><button onClick={isnavigate1}>Home</button></a>
          <a className="navbar-item text-white"><button onClick={isnavigate}>About Me</button></a>
          <a className="navbar-item text-white"><button onClick={isnavigate2}>Skills</button></a>
          <a className="navbar-item text-white"><button onClick={isnavigate3}>Contact</button></a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
