import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const StartupN = () => {
  return (
    <div id='footer' className="md:items-center items-start">
      <div className='flex md:flex-row flex-col gap-5 px-[50px] py-[60px] container md:mx-auto'>

        <div>
            <img src="/img2.png" alt="" className='md:w-[600px] md:h-[600px] w-full h-full' />
        </div>

        <div>
            <div className='md:w-[500px] w-screen'>
              <h5  className='text-[40px] font-primary text-[#BBA442] font-bold mb-7'>Techpigeon Startup Network brings Startups and Domain Experts on one Platform</h5>  
              <p className='md:text-start text-center space-y-7 text-md font-semibold font-sansg'>
             <p>Techpigeon Startups Network (TSN) Pakistan's online one-stop solution for business owners,entrepreneurs where they can have access to useful resources, world-class events and a network where they get exposure to help them grow their business</p>
             <p>
             Best business networking online platform to be established for new business owners who are ready to kick it up a notch.</p>
             <p>
             The platform allows you to set up your own business profile page, tell people who you are, what you do, even upload pictures/videos and take advantage of sharing your business through the website to our network of established business owners.</p>

              </p>


              <p className='text-blue-700 font-bold mt-4 cursor-pointer flex items-center gap-2'>See How With Connect <FaArrowRight />
              </p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default StartupN
