import React from 'react';

function Team() {
  return (
    <div className='bg-[#F8FAFC] px-20 py-24'>
      <div className='flex  '>
        <div className='flex  min-w-max mr-20'>
          <h1 className=' text-gray-700 font-bold text-4xl  '>
            We are{' '}
            <strong className='font-bold text-[#3B82F6]'>awesome team </strong>
            <br /> for your business dream
          </h1>
        </div>
        <div className='flex  ml-20 '>
          <p className='text-[#ABB7C7]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu
            vitae, luctus nisi. Sed elementum vitae ligula id imperdiet.
          </p>
        </div>
      </div>

      <div className='flex mt-20'>
        {/* First________________________________________________________ */}
        <div className=' rounded-md shadow-md bg-white justify-center text-center m-auto p-5 pt-10 max-w-sm hover:-translate-y-1 hover-time'>
          <p className='bg-[#BFDBFE] text-[#1E40AF] rounded-full inline px-5 py-3 font-bold'>
            1
          </p>
          <img
            className='h-44 pt-7 mx-auto'
            src='src/assets/img/eating.svg'
            alt=''
          />
          <h1 className='text-gray-700 font-bold text-xl py-3 tracking-wide'>
            Project Initialization
          </h1>
          <p className=' pb-10 px-6 text-[#ADB8C8]'>
            Project initiation ensures that you lay a strong foundation for a
            new project in your company our team.
          </p>
        </div>
        {/* Second________________________________________________________ */}
        <div className='rounded-md shadow-md bg-white justify-center text-center m-auto p-5 pt-10 max-w-sm  hover:-translate-y-1 hover-time'>
          <p className='bg-[#BFDBFE] text-[#1E40AF] rounded-full inline px-5 py-3 font-bold'>
            2
          </p>
          <img
            className='h-44 pt-7 mx-auto'
            src='src/assets/img/space.svg'
            alt=''
          />
          <h1 className=' text-gray-700 font-bold text-xl py-3 tracking-wide'>
            Project planning
          </h1>
          <p className=' pb-10 px-6 text-[#ADB8C8]'>
            A project plan is essential to keep everything related to the
            project organized, methodical, and on track
          </p>
        </div>
        {/* Third________________________________________________________ */}
        <div className=' rounded-md shadow-md bg-white justify-center text-center m-auto p-5 pt-10 max-w-sm  hover:-translate-y-1 hover-time'>
          <p className='bg-[#BFDBFE] text-[#1E40AF] rounded-full inline px-5 py-3 font-bold'>
            3
          </p>
          <img
            className='h-44 pt-7 mx-auto'
            src='src/assets/img/tasks.svg'
            alt=''
          />
          <h1 className='text-gray-700 font-bold text-xl py-3 tracking-wide'>
            Project organization
          </h1>
          <p className=' pb-10 px-6 text-[#ADB8C8]'>
            Moving forward you will be able to keep yourself and your team on
            track, and address challenges early.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
