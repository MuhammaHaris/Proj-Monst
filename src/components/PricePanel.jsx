import React from 'react';

function PricePanel() {
  return (
    <div
      style={{
        backgroundImage: "url('src/assets/img/intersect.svg')",
      }}
      className=' bg-no-repeat p-20'
    >
      <div className='grid justify-center'>
        <h2 className=' block text-center font-bold text-4xl tracking-wide leading-snug '>
          Start saving time today <br /> and{' '}
          <strong className='font-bold text-[#5290F6]'>choose</strong> your best
          plan
        </h2>
        <p className=' text-center block text-xl max-w-md p-5 text-gray-400 '>
          Best for freelance developers who need to save their time
        </p>
      </div>
      <div className='flex'>
        {/* Sect-1 ____________________________________________________________________ */}
        <div className=' bg-white shadow-sm my-16 justify-center  min-w-[31%] px-12 pt-12 mx-2 hover:-translate-y-1 hover-time'>
          <img
            className='w-20 justify-center m-auto'
            src='src/assets/img/startup.svg'
            alt=''
          />
          <h1 className='font-bold text-4xl my-3 tracking-wide text-center text-gray-700'>
            Startup
          </h1>
          <h1 className='font-bold text-4xl my-3 mx-auto text-[#3B82F6] text-center'>
            $45.99
          </h1>
          <p className='my-3 text-gray-400 text-lg text-center'>
            user per month
          </p>

          <ul className='px-8 leading-loose text-lg text-gray-400'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 inline'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <li className='inline px-2 text-sm tracking-wider'>3 Emails</li>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 inline'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <li className='inline px-2 text-sm tracking-wider'>
                1 Databases
              </li>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 inline'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <li className='inline px-2 text-sm tracking-wider'>
                Unlimited Doamins
              </li>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 inline'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <li className='inline px-2 text-sm tracking-wider'>
                10 GB Storage
              </li>
            </div>
          </ul>
          <div className='flex  justify-center '>
            <button className='flex rounded-md my-8 px-5 py-3 bg-[#77b2fa] font-semibold text-sm text-white hover:bg-[#5da4fa]'>
              Start Free Trial
            </button>
            <button className='border border-gray-400 text-gray-500 rounded-md font-semibold text-sm flex px-5 pt-2 mx-2 my-8 hover:border-gray-500 hover:text-gray-600'>
              Purchase
            </button>
          </div>
        </div>
        {/* Sect-2_______________________________________________________________________ */}
        <div className=' hover:-translate-y-1 hover-time bg-[#3B82F6] text-white shadow-sm my-16 justify-center  min-w-[31%] p-12 mx-2 rounded-sm'>
          <img
            className='w-20 justify-center m-auto'
            src='src/assets/img/agency.svg'
            alt=''
          />
          <h1 className='font-bold text-4xl my-3 tracking-wide text-center'>
            Agency
          </h1>
          <h1 className='font-bold text-4xl my-3 mx-auto text-center'>
            $65.99
          </h1>
          <p className='my-3 text-lg text-center'>user per month</p>

          <ul className='px-8 leading-loose text-lg'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 inline'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <li className='inline px-2 text-sm tracking-wider'>6 Emails</li>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 inline'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <li className='inline px-2 text-sm tracking-wider'>
                4 Databases
              </li>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 inline'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <li className='inline px-2 text-sm tracking-wider'>
                Unlimited Doamins
              </li>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 inline'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <li className='inline px-2 text-sm tracking-wider'>
                35 GB Storage
              </li>
            </div>
          </ul>
          <div className='flex  justify-center'>
            <button className='flex rounded-md my-8 px-5 py-3 bg-white font-semibold text-sm text-[#3B82F6] hover:bg-[#F8FAFC]'>
              Start Free Trial
            </button>
            <button className='border border-white text-white rounded-md font-semibold text-sm flex px-5 pt-2 mx-2 my-8 hover:border-[#6da4fc]'>
              Purchase
            </button>
          </div>
        </div>
        {/* Sect 3____________________________________________________________________- */}
        <div className=' hover:-translate-y-1 hover-time bg-white shadow-sm my-16 justify-center  min-w-[31%] p-12 mx-2'>
          <img
            className='w-20 justify-center m-auto'
            src='src/assets/img/enterprise.svg'
            alt=''
          />
          <h1 className='font-bold text-4xl my-3 tracking-wide text-center text-gray-700'>
            Enterprise
          </h1>
          <h1 className='font-bold text-4xl my-3 mx-auto text-[#3B82F6] text-center'>
            $85.99
          </h1>
          <p className='my-3 text-gray-400 text-lg text-center'>
            user per month
          </p>

          <ul className='px-8 leading-loose text-lg text-gray-400'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 inline'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <li className='inline px-2 text-sm tracking-wider'>12 emails</li>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 inline'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <li className='inline px-2 text-sm tracking-wider'>
                8 Databases
              </li>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 inline'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <li className='inline px-2 text-sm tracking-wider'>
                Unlimited Doamins
              </li>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 inline'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <li className='inline px-2 text-sm tracking-wider'>
                50 GB Storage
              </li>
            </div>
          </ul>
          <div className='flex  justify-center'>
            <button className='flex rounded-md my-8 px-5 py-3 bg-[#77b2fa] font-semibold text-sm text-white hover:bg-[#5da4fa]'>
              Start Free Trial
            </button>
            <button className='border border-gray-400 text-gray-500 rounded-md font-semibold text-sm flex px-5 pt-2 mx-2 my-8 hover:border-gray-500 hover:text-gray-600'>
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricePanel;
