import React from 'react';
import AboutImage from '../assets/ighedz.jpeg';

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
       <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <img src={AboutImage} alt='image' className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
          <div className='flex-1'>
          <p className='text-lg mb-8 text-gray-300'>
            I'm a passionate pharmacist and self-taught front-end developer focused on merging healthcare expertise with modern technology to drive innovative and impactful solutions. With experience in both clinical settings and tech projects, I'm committed to building tools that solve real problems and improve lives at scale.</p>
          </div>
        </div>
       </div>
    </div>
  )
};

export default About;

