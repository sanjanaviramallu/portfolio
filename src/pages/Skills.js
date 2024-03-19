import React from 'react';
import Navbar from './Navbar';
import { TbBrandHtml5 } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  return (
    <div className='bg-customColor3 h-screen'>
      <div className='flex flex-col mt-10'>
        <Navbar /> 
        <h1 className='mt-20 text-bold text-6xl ml-14 text-white'>Skills</h1>
        <div className='flex justify-evenly mt-8'>
          <div className="card w-72 h-56 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
            <div className="card-body flex justify-center items-center">
              <TbBrandHtml5 className="text-8xl h-30 w-30 hover:text-blue-950" />
              <p className="text-content2 text-semibold text-3xl hover:text-blue-950">HTML</p>
            </div>
          </div>
          <div className="card w-72 h-56 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
            <div className="card-body flex justify-center items-center">
              <FaCss3Alt className="text-8xl h-30 w-30 hover:text-blue-950" />
              <p className="text-content2 text-semibold text-3xl hover:text-blue-950">CSS</p>
            </div>
          </div>
          <div className="card w-72 h-56 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
            <div className="card-body flex justify-center items-center">
              <IoLogoJavascript className="text-8xl h-30 w-30 hover:text-blue-950" />
              <p className="text-content2 text-semibold text-3xl hover:text-blue-950">JavaScript</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-12">
        <div className="card w-72 h-56 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
          <div className="card-body flex justify-center items-center">
            <FaReact className="text-8xl h-30 w-30 hover:text-blue-950" />
            <p className="text-content2 text-semibold text-3xl hover:text-blue-950">React</p>
          </div>
        </div>
        <div className="card w-72 h-56 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
          <div className="card-body flex justify-center items-center">
            <SiTailwindcss className="text-8xl h-30 w-30 hover:text-blue-950" />
            <p className="text-content2 text-semibold text-3xl hover:text-blue-950">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
