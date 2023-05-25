import React from 'react';

function HeroTwin() {
  return (
    <div
      style={{
        backgroundImage: "url('/src/assets/img/Hero-twin.png') ",
      }}
      className='flex m-auto items-center justify-center  xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24 w-screen'
    >
      <img
        className=' max-w-4xl -mt-9 jump'
        src='src/assets/img/dashboard.png'
        alt=''
      />
    </div>
  );
}

export default HeroTwin;
