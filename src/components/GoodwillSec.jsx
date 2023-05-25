import React from 'react';
import CountTo from 'react-count-to';

function GoodwillSec() {
  return (
    <div className='flex mx-11 mt-20 justify-center mb-10'>
      <div className='flex px-8 my-4 tracking-tighter wow animate__animated .animate__fadeIn   hover:-translate-y-1 hover-time '>
        <div className='bg-[#F8FAFC] rounded-lg'>
          <svg
            className='w-8 h-8 m-6 text-[#3B82F6]  '
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
            ></path>
          </svg>
        </div>
        <div className='px-3 tracking-wide'>
          <h2 className='flex font-bold text-2xl text-black '>
            +
            <CountTo from={0} to={950} speed={3000} delay={1} />
          </h2>
          <p className='text-[#adadad]'>Annual Partner</p>
        </div>
      </div>
      {/* Second_____________________________________________ */}
      <div className='flex px-8 my-4 tracking-tight hover:-translate-y-1 hover-time '>
        <div className='bg-[#F8FAFC] rounded-lg'>
          <svg
            className='w-8 h-8  m-6 text-[#3B82F6]  '
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
            ></path>
          </svg>
        </div>
        <div className='px-3 tracking-wide'>
          <h2 className='flex font-bold text-2xl text-black'>
            +<CountTo from={0} to={58} speed={3000} delay={1} />k
          </h2>
          <p className='text-[#adadad]'>Completed Projects</p>
        </div>
      </div>
      {/* third_______________________________________________________ */}
      <div className='flex px-8 my-4 tracking-tight hover:-translate-y-1 hover-time '>
        <div className='bg-[#F8FAFC] rounded-lg'>
          <svg
            className='w-8 h-8 m-6 text-[#3B82F6]'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
            ></path>
          </svg>
        </div>
        <div className='px-3 tracking-wide'>
          <h2 className='flex font-bold text-2xl text-black'>
            +<CountTo from={0} to={500} speed={3000} delay={1} />
          </h2>
          <p className='text-[#adadad]'>Happy Customers</p>
        </div>
      </div>
      {/* Forth_________________________________________________________ */}
      <div className='flex px-auto tracking-tight my-4 hover:-translate-y-1 hover-time '>
        <div className='bg-[#F8FAFC] rounded-lg '>
          <svg
            className='w-8 h-8  m-6 text-[#3B82F6]'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
            ></path>
          </svg>
        </div>
        <div className='px-3 tracking-wide'>
          <h2 className='flex font-bold text-2xl text-black'>
            +<CountTo from={0} to={300} speed={3000} delay={1} />
          </h2>
          <p className='text-[#adadad]'>Research Work</p>
        </div>
      </div>
    </div>
  );
}

export default GoodwillSec;
