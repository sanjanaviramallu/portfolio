import React from 'react';
import Navbar from './Navbar';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

function Dashboard() {
  return (
    <div className='flex h-screen'>
      <div className='w-[42%] bg-customColor3'>
      {/* 40% height container with custom color */}
      {/* <div className="w-40vh bg-customColor flex-1 relative z-0">
        Content for the first 40% */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 pr-20">
          <div className="card card-image-cover z-50 " style={{ borderRadius: 0 }}>
            <div className='w-1/2 '>
              <img src="https://source.unsplash.com/random/300x200" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Adjust the border-radius property to change the shape */}
            <div className="card-body flex flex-col justify-center items-center ml-4 ">
              <h2 className="card-header text-center text-semibold text-3xl">Sanjana</h2>
              <h2 className="card-header text-center text-bold text-3xl">Viramallu</h2>
              <h2 className='card-header text-center text-bold text-3xl mb-4'>______</h2>
              <h2 className='mb-8'>Web Developer</h2>
              <div className="flex justify-center items-center space-x-4">
                <FaFacebookF className='text-2xl' />
                <FaTwitter className='text-2xl' />
                <FaLinkedinIn className='text-2xl' />
                <AiOutlineInstagram className='text-2xl' />
              </div>
            </div>
          </div>
        {/* </div> */}
		<div className='flex flex-col'>
		<h1 className='mr-10 text-bold text-8xl'>Hello</h1>
		<h3 className='text-semibold text-2xl mb-12' >I'm Sanjana, Web Developer</h3>
    <h4 className='text-lg'>I'm a MERN stack web developer,</h4>
    <h4 className='text-lg'>crafting seamless full-stack web experiences. </h4>
    <h4 className='text-lg'>Passionate about innovating and delivering</h4>
    <h4 className='text-lg'>excellence in web development projects.</h4>
		</div>
      </div>
      {/* 60% height container with slate color */}
      {/* <div className="w-60vh bg-slate-100 flex flex-col items-center justify-center"> */}
        <Navbar />
      {/* </div> */}
    </div>
    </div>
  );
}
export default Dashboard;
