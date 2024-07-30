import React from 'react';
import Navbar from './Navbar';
import { TbBrandHtml5 } from "react-icons/tb";
import { FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiMongodb, SiGithub, SiMysql } from "react-icons/si";

function Skills() {
  return (
    <div className='bg-customColor3 min-h-screen overflow-hidden flex flex-col'>
      <h1 className='text-center text-4xl md:text-5xl lg:text-6xl mt-40 mb-20 text-white font-bold'>
        Skills
      </h1>
      
      {/* Grid Container */}
      <div className='flex-grow flex items-center justify-center px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto'>
          <div className="card flex flex-col items-center justify-center p-4 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
            <TbBrandHtml5 className="text-4xl md:text-5xl lg:text-6xl text-blue-600" />
            <p className="text-lg md:text-xl lg:text-2xl mt-2 text-black">HTML</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-4 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
            <FaCss3Alt className="text-4xl md:text-5xl lg:text-6xl text-blue-600" />
            <p className="text-lg md:text-xl lg:text-2xl mt-2 text-black">CSS</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-4 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
            <IoLogoJavascript className="text-4xl md:text-5xl lg:text-6xl text-yellow-500" />
            <p className="text-lg md:text-xl lg:text-2xl mt-2 text-black">JavaScript</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-4 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
            <FaReact className="text-4xl md:text-5xl lg:text-6xl text-blue-400" />
            <p className="text-lg md:text-xl lg:text-2xl mt-2 text-black">Reactjs</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-4 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
            <SiTailwindcss className="text-4xl md:text-5xl lg:text-6xl text-blue-400" />
            <p className="text-lg md:text-xl lg:text-2xl mt-2 text-black">Tailwind CSS</p>
          </div>
          {/* New Skill Cards */}
          <div className="card flex flex-col items-center justify-center p-4 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
            <SiNodedotjs className="text-4xl md:text-5xl lg:text-6xl text-green-500" />
            <p className="text-lg md:text-xl lg:text-2xl mt-2 text-black">Nodejs</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-4 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
            <SiMongodb className="text-4xl md:text-5xl lg:text-6xl text-green-600" />
            <p className="text-lg md:text-xl lg:text-2xl mt-2 text-black">Mongodb</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-4 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
            <SiGithub className="text-4xl md:text-5xl lg:text-6xl text-gray-800" />
            <p className="text-lg md:text-xl lg:text-2xl mt-2 text-black">Github</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-4 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
            <FaBootstrap className="text-4xl md:text-5xl lg:text-6xl text-purple-600" />
            <p className="text-lg md:text-xl lg:text-2xl mt-2 text-black">Bootstrap</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-4 hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105">
            <SiMysql className="text-4xl md:text-5xl lg:text-6xl text-blue-500" />
            <p className="text-lg md:text-xl lg:text-2xl mt-2 text-black">MySQL</p>
          </div>
        </div>
      </div>
      
      <Navbar />
    </div>
  );
}

export default Skills;
