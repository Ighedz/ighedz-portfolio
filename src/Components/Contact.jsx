import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact</h2>
        
        <div className='flex flex-col md:flex-row gap-12 items-start'>
          <div className='flex-1'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-600 mb-4'>
              Let's Talk
            </h3>
            <p className='text-gray-300 mb-6'>
              I'm open to opportunities in web development, pharmacy-related projects, and professional collaborations.
            </p>

            <div className='mb-4 flex items-center space-x-2'>
              <FaEnvelope className='text-white-300' />
              <a href='mailto:ighedosapromisei@gmail.com' className='hover:underline text-sm md:text-base'>
                ighedosapromisei@gmail.com
              </a>
            </div>

            <div className='mb-4 flex items-center space-x-2'>
              <FaPhone className='text-white-300' />
              <a href='tel:09092272673' className='hover:underline text-sm md:text-base'>
                09092272673
              </a>
            </div>

            <div className='mb-4 flex items-center space-x-2'>
              <FaMapMarkedAlt className='text-white-300' />
              <span className='text-sm md:text-base'>Lagos, Nigeria</span>
            </div>
          </div>

          
          <div className='flex-1 w-full'>
            {/* Placeholder for future contact form or social links */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
