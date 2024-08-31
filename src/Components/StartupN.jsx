import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const StartupN = () => {
  return (
    <div id='footer' className="w-full max-w-full overflow-x-hidden">
      <div className='flex flex-col md:flex-row gap-5 px-4 py-6 md:px-[50px] md:py-[60px] container md:mx-auto'>
        
        <div className='flex justify-center'>
          <img src="/img2.png" alt="" className='md:w-[600px] md:h-[600px] w-full h-auto max-w-full' />
        </div>
        
        <div className='flex flex-col justify-center md:w-[500px] w-full'>
          <h5 className='text-[24px] md:text-[40px] font-primary text-[#BBA442] font-bold mb-5 md:mb-7'>
            Techpigeon Startup Network brings Startups and Domain Experts on one Platform
          </h5>
          <p className='text-md md:text-start text-center items-center space-y-4 md:space-y-7 font-semibold font-sansg'>
            <p>
              Techpigeon Startups Network (TSN) is Pakistan's online one-stop solution for business owners and entrepreneurs where they can access useful resources, world-class events, and a network to help them grow their business.
            </p>
            <p>
              The best business networking online platform to be established for new business owners who are ready to kick it up a notch.
            </p>
            <p>
              The platform allows you to set up your own business profile page, tell people who you are, what you do, upload pictures/videos, and share your business through the website to our network of established business owners.
            </p>
          </p>

          <p className='text-blue-700 font-bold mt-4 cursor-pointer flex md:items-center items-center gap-2 text-center'>
            See How With Connect <FaArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartupN;
