import React from 'react';

function SolutionFor() {
  return (
    <div className='p-20 flex'>
      <div className=' w-80 pr-16'>
        <h1 className='font-extrabold  text-gray-800 text-4xl py-14'>
          Simple Solution for{' '}
          <strong className=' tracking-wider font-extrabold text-[#3B82F6]'>
            Complex
          </strong>{' '}
          Connections
        </h1>
        <p className='leading-loose text-slate-400'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
          eget justo et iaculis.
        </p>
      </div>
      <div className='mx-12 flex'>
        {/* First_____________________________________________________ */}
        <div className='w-auto bg-white shadow-md m-5 px-5 py-8 rounded-lg hover:text-blue-500 hover:shadow-lg hover-time'>
          <img
            className='w-72 rounded-xl   '
            src='src/assets/img/img-2.jpg'
            alt=''
          />
          <h2 className='font-semibold text-lg  pt-4 tracking-wide '>
            User Growth
          </h2>
          <p className='inline tracking-wide  text-slate-400 text-xs '>
            Harward University
          </p>
          <button className='inline tracking-wide border   ml-5 text-[#3B82F6] font-semibold border-[#3B82F6] px-4 py-2 rounded-md -mt-6 text-xs hover:bg-[#3b82f6] hover:text-white hover-time'>
            View Details
          </button>
        </div>
        {/* Second___________________________________________________ */}
        <div className='w-auto bg-white shadow-md m-5 px-5 py-8 rounded-lg hover:text-blue-500 hover:shadow-lg hover-time'>
          <img
            className='w-72 rounded-xl   '
            src='src/assets/img/img-3.jpg'
            alt=''
          />
          <h2 className='font-semibold text-xl mx-2 pt-5 tracking-wide'>
            Products
          </h2>
          <p className='inline tracking-wide mx-2 text-slate-400 text-xs pt-5   '>
            Cocacola,co
          </p>
          <button className='inline tracking-wide border  text-[#3B82F6] font-semibold border-[#3B82F6] px-4 py-2 rounded-md ml-16 -mt-3 text-xs hover:bg-[#3b82f6] hover:text-white hover-time'>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default SolutionFor;
