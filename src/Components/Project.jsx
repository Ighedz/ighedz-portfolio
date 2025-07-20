import React from 'react';
import hair from '../assets/hair.png';
import portfolio from '../assets/portfolio.png';
import medx from '../assets/medx.png';

const project = [
  {
    id:1,
    name:'Landing page',
    technologies:'HTML, CSS',
    image:hair,
    github:'https://github.com/Ighedz/Landing-Page',
  },
  {
    id:2,
    name:'Portfolio',
    technologies:'React, Tailwindcss, JS',
    image:portfolio,
  },
  {
    id:3,
    name:'Portfolio',
    technologies:'HTML, CSS, JS',
    image:medx,
  },
]


const Project = () => {
  return (
    <div className='bg-black text-white py-20' id='project'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Tech Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
         {project.map((project) =>(
          <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg tansform transition-transform duration-300 hover:scale-105'>
            <img src={project.image} alt='' className='rounded-lg mb-4 w-full h-48 object-cover' />
            <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
            <p className='text-gray-400 mb-4'>{project.technologies}</p>
            <a href={project.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>Read more</a>
          </div>
         )
        )}
        </div>
      </div>
    </div>
  )
};

export default Project;
