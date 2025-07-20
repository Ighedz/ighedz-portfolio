import React from 'react';

const Tech = () => {
  return (
    <div className='bg-black text-white py-20' id='tech'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>
          Tech Journey
        </h2>
        <p className='text-lg leading-relaxed text-gray-300 mb-12'>
          I'm a self-taught front-end developer with background in Pharmacy. I started my tech journey after my internship year and have worked on several real-world projects in healthcare and beyond. I focus on building clean, functional, user-friendly websites.
        </p>
       
      {/*Internship*/}
        <div className='grid grid-cols-1 md:grid-cols-1 gap-6'>
          <div className='bg-gray-800 p-8 rounded-xl shadow-md md:inline transform transition-transform duration-300 hover:scale-105'>
            <div className='flex items-center space-x-4 mb-4'>
              <div className='text-2xl'>🚗</div>
              <h4 className='text-xl font-semibold'>Front-end Intern - Asoro Automotive</h4>
            </div>
              <p className='text-gray-300 text-sm'> 
              Redesigned the account management pages using React. Contributed to UI improvements and collaborated with the design team to enhance user experience.
              </p>
          </div>
        </div>
        {/*Skill Tags*/}
      <div className='flex flex-wrap gap-3 mt-10'>
       <span className='bg-gradient-to-r from-blue-300 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold'>HTML</span>
       <span className='bg-gradient-to-r from-orange-300 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold'>CSS</span>
       <span className='bg-gradient-to-r from-green-300 to-green-600 text-white px-3 py-1 rounded-full text-sm font-bold'>Javascript</span>
       <span className='bg-gradient-to-r from-purple-300 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold'>React.Js</span>
       <span className='bg-gradient-to-r from-pink-300 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold'>Tailwindcss</span>
      </div>
      </div>
    </div>
  )
};

export default Tech;
