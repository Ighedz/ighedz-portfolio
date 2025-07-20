import React from 'react';
import HeroImage from '../assets/ighedz.jpeg';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={HeroImage} alt='image' className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
      <h1 className='text-4xl font-bold'>
        I'm {''}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-pink-400'>
          Promise Ighedosa
          </span> 
           , A Pharmacist & Front-End Developer
      </h1>
      <p className='mt-4 text:lg text-gray-300'>
        Driving innovation at the intersection of Pharmacy and Technology
        </p>
        <div className='mt-8'>
  <p className='text-gray-300 text-lg'>
    Interested in working together?
    <a
      href='#contact'
      className='text-green-400 underline hover:text-pink-400 transition-colors'>
      Let's talk.
    </a>
  </p>
  </div>

    </div>
  )
};

export default Hero;

