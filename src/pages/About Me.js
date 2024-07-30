import React from 'react';
import Navbar from './Navbar';


function About() {
  return (
    <div className='bg-customColor3 h-screen overflow-hidden'>
      
      <div className='flex flex-col justify-start items-center h-full'>
       
        <h1 className='text-white font-bold mt-40 mb-10 text-5xl '>About</h1>
        <div className='pt-5 text-white text-xl'>
          <p >
          Hello! I'm Sanjana Viramallu, delighted to meet you. Welcome to my professional profile.
          </p>
          <p >
          Here's a glimpse of what I'm, please take a look around.
          </p>
          <p className='pt-5'>
          A second-year IT undergraduate at VNRVJIET, where I'm immersed in the world of technology 
          </p>
          <p>
          and innovation. Passionate about crafting impactful software solutions that elevate lives.
          </p>
          <p>
          With a keen interest in software development, I thrive on turning ideas into reality. 
          </p>
          <p>
          Proficient in Python, C, and JavaScript.
          </p>
          <p className='pt-5'>
          As you explore this space, you'll find glimpses of my journey as a budding technologist. 
          </p>
          <p>
           Like different projects, I love sharing my expertise and insights with others.
          </p>
         
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default About;
