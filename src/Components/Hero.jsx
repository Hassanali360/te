import React from 'react';

const Hero = () => {
  return (
    <div id='hero3' className='py-6 px-10 mt-[200px] container mx-auto gap-9'>
      <div className='flex md:flex-row flex-col justify-between'>

        <div className='flex justify-center md:w-1/2'>
          <video
            autoPlay
            loop
            muted
            className='w-[550px] h-[550px] rounded-full'
            src="/1.mp4"
          ></video>
        </div>

        <div className='md:w-1/2 flex flex-col justify-center space-y-11'>
          <p className='text-[#BBA442] text-[40px] mb-6 font-sansg font-bold'>
            Our unique approach will help you achieve the best results without any compromise.
          </p>
          <div className='flex space-x-4'>
            <button className='bg-[#5CC4EB] text-white px-4 py-2 rounded  hover:shadow-xl'>
              Book a Free Consult Call
            </button>
            <button className='text-black border border-black px-6 rounded-md hover:shadow-xl'>
              Contact
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
