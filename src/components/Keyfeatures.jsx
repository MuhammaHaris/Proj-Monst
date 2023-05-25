import React from 'react';

function Keyfeatures() {
  return (
    <div
      //   style={{
      //     backgroundImage: "url('/src/assets/img/blob-tear.svg') ",
      //   }}
      className='flex justify-center mx-16 my-36 bg-no-repeat bg-center'
    >
      <div className=' bg-no-repeat px-12 '>
        <p className='inline text-[#76A8F9] bg-[#EFF6FF] px-3 py-0 font-bold text-sm rounded-full'>
          Why choose us
        </p>
        <h1 className='font-bold text-4xl my-5'>Key Features</h1>
        <div className='flex tracking-wide mb-14 pr-5 '>
          <div className=' py-4 pr-5 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
              color='#3B82F6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
              />
            </svg>
          </div>
          <div>
            <h2 className='text-xl font-bold text-gray-700 py-4'>
              Expend your Reach
            </h2>
            <p className=' text-md text-[#ADB8C8]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis expedita animi.
            </p>
          </div>
        </div>
        <div className='flex tracking-wide mb-14 pr-5 '>
          <div className=' py-4 pr-5 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
              color='#3B82F6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z'
              />
            </svg>
          </div>
          <div>
            <h2 className='text-xl font-bold text-gray-700 py-4'>
              Annualized Growth
            </h2>
            <p className=' text-md text-[#ADB8C8]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis expedita animi.
            </p>
          </div>
        </div>
        <div className='flex tracking-wide mb-14 pr-5 '>
          <div className=' py-4 pr-5 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
              color='#3B82F6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
              />
            </svg>
          </div>
          <div>
            <h2 className='text-xl font-bold text-gray-700 py-4'>
              Book Your Providers
            </h2>
            <p className=' text-md text-[#ADB8C8]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis expedita animi.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          className='max-w-xl rounded-xl jump'
          src='src/assets/img/img-1.png'
          alt=''
        />
      </div>
    </div>
  );
}

export default Keyfeatures;
