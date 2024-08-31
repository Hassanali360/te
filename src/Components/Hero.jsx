import React from 'react';

const Hero = () => {
  return (
    <div id='hero3' className='py-6 px-4 md:px-10 mt-[200px] md:container md:mx-auto w-full gap-9 '>
      <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
        
        <div className='flex justify-center md:w-1/2 w-full'>
          <video
            autoPlay
            loop
            muted
            className='w-[90%] md:w-[550px] h-auto rounded-full'
            src="/1.mp4"
          ></video>
        </div>

        <div className='md:w-1/2 w-full flex flex-col justify-center space-y-6 md:space-y-11 items-center md:items-start rounded-lg mt-6 md:mt-0'>
          <p className='text-[#BBA442] text-[24px] md:text-[40px] font-sans font-bold text-center md:text-left px-2'>
            Our unique approach will help you achieve the best results without any compromise.
          </p>
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
            <button className='bg-[#5CC4EB] text-white px-6 py-2 rounded hover:shadow-xl'>
              Book a Free Consult Call
            </button>
            <button className='text-black border border-black px-6 py-2 rounded hover:shadow-xl'>
              Contact
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
