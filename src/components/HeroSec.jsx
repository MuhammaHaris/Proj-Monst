import React from 'react';
import Typed from 'react-typed';
function HeroSec() {
  return (
    <div
      style={{
        backgroundImage: "url('/src/assets/img/intersect.jpg') ",
      }}
      className=' xl:bg-contain bg-top bg-no-repeat -mt-28 pt-24 grid-flow-row text-center justify-center sticky-bar-stick'
    >
      <div className='container mx-auto px-4 sm:'>
        <div>
          <h1 className=' text-gray-800 pt-20 text-5xl font-bold leading-snug '>
            Committed to People <br /> Committed&nbsp;
            <strong className='font-bold text-[#3B82F6] '>to the Future</strong>
          </h1>
          <p className='text-md text-[#B7C1D1] pt-5'>
            We are <strong className='text-[#3B82F6]'>Monst</strong> , a
            Creative Design
          </p>
          <Typed
            className='text-[#a0a9b8] text-md '
            strings={['Social Marketing', 'Web Agency']}
            typeSpeed={200}
            backSpeed={200}
            loop
          />
          <div className='pb-28 space-x-2 pt-5'>
            <button className='hover-time px-8 py-3 bg-[#6fa0f0] text-white border font-medium text-xs rounded-lg tracking-wider hover:bg-[#3B82F6] hover:shadow-md hover:-translate-y-1'>
              Key Features
            </button>
            <button className='hover-time px-8 py-3 bg-slate-50 font-medium text-xs rounded-md text-[#647081] tracking-wider hover:border-[#aacbff] hover:text-[#1D4EDD] hover:drop-shadow-xl hover:-translate-y-0.5'>
              How We Work?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
