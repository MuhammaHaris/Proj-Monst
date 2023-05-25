import React from 'react';

function Foot() {
  return (
    <div className='p-14 w-screen'>
      <div className=' flex pb-10 '>
        <div className='flex pl-16 w-[50%]'>
          <img
            className='h-10 pr-20 '
            src='src/assets/img/monst-logo.svg'
            alt='Monst'
          />
          <p className='text-[#b2b9c2] text-lg tracking-wide'>
            Helping you <strong> maximize</strong> operations management with
            digitization
          </p>
        </div>
        <div className=' ml-20 mr-auto px-16'>
          <h1 className='font-bold text-xl pb-1 text-gray-900'>Office</h1>
          <p className='text-[#b2b9c2] text-lg'> 359 Hidden Valley Road, NY</p>
        </div>

        <div className='  px-10 m-auto'>
          <h1 className='font-bold text-xl pb-1 text-gray-900'>Contacts</h1>
          <p className='text-[#b2b9c2] text-lg'>(+01) 234 568</p>
          <p className='text-[#b2b9c2] text-lg'>contact@monst.com</p>
        </div>
      </div>
      <div className='flex py-10 pl-14  text-[#b2b9c2] justify-center'>
        <p className='pr-64'>
          © 2022. All rights reserved. Designed by{' '}
          <strong className='font-medium text-[#70AEFA]'> Alithemes.com</strong>
        </p>
        <div className='flex justify-end pl-96   m-auto'>
          <img
            className='px-2'
            src='src/assets/img/icons/facebook-blue.svg'
            alt='F'
          />
          <img
            className='px-2'
            src='src/assets/img/icons/twitter-blue.svg'
            alt='F'
          />
          <img
            className='px-2'
            src='src/assets/img/icons/instagram-blue.svg'
            alt='F'
          />
        </div>
      </div>
    </div>
  );
}

export default Foot;
