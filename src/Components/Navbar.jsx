import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24">
      <div className="relative flex items-center justify-between py-4">

        {/* Logo (left) */}
        <div className="text-2xl font-bold z-10">Ighedz</div>

        {/* Centered Links (absolutely centered for md and up) */}
        <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <a href="#home" className="hover:text-gray-400 no-underline">Home</a>
          <a href="#about" className="hover:text-gray-400 no-underline">About Me</a>
          <a href="#pharmacy" className="hover:text-gray-400 no-underline">Pharmacy</a>
          <a href="#tech" className="hover:text-gray-400 no-underline">Tech</a>
          <a href="#project" className="hover:text-gray-400 no-underline">Project</a>
          <a href="#contact" className="hover:text-gray-400 no-underline">Contact</a>
        </div>

        {/* Connect Button (right) */}
        <a
          href="https://www.linkedin.com/in/promise-ighedosa-559aaa210/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline bg-gradient-to-r from-orange-400 to-rose-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform z-10"
        >
          Connect
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-4 pb-4">
          <a href="#home" className="hover:text-gray-400 no-underline">Home</a>
          <a href="#about" className="hover:text-gray-400 no-underline">About Me</a>
          <a href="#pharmacy" className="hover:text-gray-400 no-underline">Pharmacy</a>
          <a href="#tech" className="hover:text-gray-400 no-underline">Tech</a>
          <a href="#project" className="hover:text-gray-400 no-underline">Project</a>
          <a href="#contact" className="hover:text-gray-400 no-underline">Contact</a>
          <a
            href="https://www.linkedin.com/in/promise-ighedosa-559aaa210/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-400 to-rose-500 text-white px-4 py-2 rounded-full w-fit"
          >
            Connect
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
