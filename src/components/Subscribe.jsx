import React from 'react';

function Subscribe() {
  return (
    <div
      style={{
        backgroundImage: "url('src/assets/img/subscribe.png')",
      }}
      className='pb-64 mb-5 bg-opacity-95 bg-auto w-screen bg-no-repeat h-full text-center'
    >
      <div className=' mx-52 px-56 pt-52'>
        <h1 className=' text-4xl font-bold'>
          Subscribe now to{' '}
          <strong className='font-bold text-[#4C8CF6]'> Our Newsletter</strong>{' '}
          and get the Coupon code.
        </h1>
        <p className='text-gray-400 tracking-wider text-lg py-5'>
          All your information is completely confidential
        </p>
      </div>
      <div className='bg-white rounded-md inline p-5'>
        <svg
          className='h-6 w-6 text-blueGray-500 inline bg-[#F1F5F9] '
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
          <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
        </svg>
        <input
          className='bg-[#F1F5F9] font-semibold text-gray-400 pr-10 py-2'
          type='email'
          placeholder='Type Your e-mail'
        />
        <button className='px-7 py-3 bg-[#679df5] text-white border font-semibold text-sm rounded-md tracking-wider hover:bg-[#3B82F6] ml-8'>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
