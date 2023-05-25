import React from 'react';
export const Navbar = () => {
  return (
    <div className=' grid-flow-col flex px-20 py-3 bg-transparent justify-between items-center'>
      <img className='w-32' src='/src/assets/img/monst-logo.svg' alt='#' />
      <ul className='flex space-x-11 pr-10 pt-1 text-sm font-semibold text-gray-500'>
        <li className='hover-time tracking-wide  hover:text-gray-400'>
          <a href='#'>Home</a>
        </li>
        <li className='hover-time tracking-wide hover:text-gray-400 hover-time'>
          <a href='#'>About Us</a>
        </li>
        <li className='hover-time tracking-wide hover:text-gray-400'>
          <a href='#'>Services</a>
        </li>
        <li className='hover-time tracking-wide hover:text-gray-400'>
          <a href='#'>Company</a>
        </li>
        <li className='hover-time tracking-wide hover:text-gray-400'>
          <a href='#'>Blog</a>
        </li>
        <li className='hover-time tracking-wide hover:text-gray-400'>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <div className='mr-20 p-2 space-x-2'>
        <button className='hover-time px-5 py-2 border border-[#aacbff] font-semibold text-xs rounded-md text-blue-400 tracking-wider hover:border-[#aacbff] hover:text-[#1D4EDD] hover:drop-shadow-xl'>
          log In
        </button>
        <button className='hover-time px-4 py-2 bg-[#6fa0f0] text-white border font-semibold text-xs rounded-lg tracking-wider hover:bg-[#3B82F6]'>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
