 import React from 'react';

const Pharmacy = () => {
  return (
    <div className='bg-black text-white py-20' id='pharmacy'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Pharmacy Journey</h2>

        <p className='text-lg mb-12 leading-relaxed text-gray-300'>
          I'm a licensed pharmacist with practical experience in both hospital and community settings. Over time, I've dispensed medications, counseled patients, managed cold-chain inventory, and participated in outreach programs. From internship through NYSC, each role has strengthened my expertise in patient care, medication safety, and healthcare collaboration - all while building a strong foundation in clinical practice and communication.
        </p>

        {/* Experience Cards */}
        <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-gray-800 p-8 rounded-xl shadow-md md:inline transform transition-transform duration-300 hover:scale-105'>
            <div className='flex items-center space-x-4 mb-4'>
              <div className='text-2xl'>💊</div>
              <h4 className='text-xl font-semibold'>Pharmacist (NYSC)</h4>
            </div>
            <p className='text-gray-300 text-sm'>
              St. Patrick's Hospital - Dispensed medications, provided patient education, managed cold-chain, and joined rural outreach programs.
            </p>
          </div>

          <div className='bg-gray-800 p-8 rounded-xl shadow-md md:inline transform transition-transform duration-300 hover:scale-105'>
            <div className='flex items-center space-x-4 mb-4'>
              <div className='text-2xl'>🏥</div>
              <h4 className='text-xl font-semibold'>Locum Pharmacist</h4>
            </div>
            <p className='text-gray-300 text-sm'>
              Golby Pharmacy - Ensured accurate dispensing, offered drug-use counseling, and optimized inventory handling.
            </p>
          </div>

          <div className='bg-gray-800 p-8 rounded-xl shadow-md md:inline transform transition-transform duration-300 hover:scale-105'>
            <div className='flex items-center space-x-4 mb-4'>
              <div className='text-2xl'>🧪</div>
              <h4 className='text-xl font-semibold'>Intern Pharmacist</h4>
            </div>
            <p className='text-gray-300 text-sm'>
              Lagos State Health Service Commission - Supported clinical operations, supervised medication storage, and participated in patient education programs.
            </p>
          </div>
        </section>

        {/* Skill Tags */}
        <div className='flex flex-wrap gap-3 mt-10'>
          <span className='bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-bold'>Prescription Review</span>
          <span className='bg-gradient-to-r from-orange-300 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-bold'>Health Outreach</span>
          <span className='bg-gradient-to-r from-green-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold'>Patient Counseling</span>
          <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold'>Inventory Management</span>
          <span className='bg-gradient-to-r from-pink-300 to-rose-600 text-white px-3 py-1 rounded-full text-sm font-bold'>Medication Safety</span>
          <span className='bg-gradient-to-r from-yellow-400 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold'>Medical Documentation</span>
          
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
