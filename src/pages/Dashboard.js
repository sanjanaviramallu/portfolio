import React from 'react';
import Navbar from './Navbar';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import newImage from '../images/new.jpeg';
import { FaGithub } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className='flex h-screen'>
      <div className='w-[42%] bg-customColor3'>
      {/* 40% height container with custom color */}
      {/* <div className="w-40vh bg-customColor flex-1 relative z-0">
        Content for the first 40% */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 pr-20">
        <div className="card card-image-cover z-50 flex flex-col items-center" style={{ borderRadius: 0 }}>
  <div className='w-48 h-48 mt-10'> {/* Adjusted top margin for image */}
    <img 
      src={newImage} 
      alt="Profile" 
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover', 
        borderRadius: '50%' 
      }} 
    />
  </div>
  <div className="card-body flex flex-col justify-center items-center "> {/* Reduced top margin */}
    <h2 className="card-header text-center text-semibold text-3xl "> {/* Reduced bottom margin */}
      Sanjana
    </h2>
    <h2 className="card-header text-center text-bold text-3xl "> {/* Reduced bottom margin */}
      Viramallu
    </h2>
    <h2 className='card-header text-center text-bold text-3xl mb-2'> {/* Reduced bottom margin */}
      ______
    </h2>
    <h2 className='mb-4'> {/* Reduced bottom margin */}
      Web Developer
    </h2>
    <div className="flex justify-center items-center space-x-4">
      <a href="https://www.facebook.com/share/2ZZrojxbtBRAPHA2/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className='text-xl hover:text-gray-500' />
      </a>
      <a href="https://github.com/sanjanaviramallu" target="_blank" rel="noopener noreferrer">
        <FaGithub className='text-2xl hover:text-gray-500' />
      </a>
      <a href="https://www.linkedin.com/in/sanjana-viramallu/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className='text-2xl hover:text-gray-500' />
      </a>
      <a href="https://www.instagram.com/_.sanjana_shetty?igsh=MXNkemt0NHg2d3VkMQ==" target="_blank" rel="noopener noreferrer">
        <AiOutlineInstagram className='text-2xl hover:text-gray-500' />
      </a>
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