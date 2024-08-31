import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const KashmiecareU = () => {
  return (
    <div className="bg-gradient-to-r from-custom-yellow to-custom-orange">
      <div className='px-4 py-6 md:px-[50px] md:py-[60px] container mx-auto'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-3xl font-bold text-[#2977C9] font-primary'>
            New Venture: Kashmir CareU OnGo (KCUOG)
          </h1>
          <p className='text-lg md:text-xl font-semibold font-sansg text-center mt-4 md:mt-0'>
            Kashmir CareU OnGo is a new smart tech venture by Techpigeon, offering a one-stop solution for healthcare. It helps all care seekers access free advice from doctors and get appointments via mobile applications.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-8 mt-8 md:mt-12 items-center'>
          {/* Left */}
          <div className='flex flex-col items-center md:items-center md:w-1/2'>
            <img src="/care.jpeg" alt="" className='w-full md:w-[300px] h-auto max-w-xs md:max-w-full' />
            <p className='text-center md:text-center font-bold font-primary mt-3'>
              All one-stop Healthcare Solution.
              <br />
              Transform your data into impactful insightful dashboards!
            </p>
            <p className='text-blue-700 font-bold mt-4 cursor-pointer flex items-center justify-center gap-2'>
              Read More <FaArrowRight />
            </p>
          </div>

          {/* Right */}
          <div className='text-center md:text-left font-semibold text-lg md:text-2xl md:w-1/2'>
            <p>
              Patients can easily save money by accessing free healthcare advice from providers/doctors and getting registered with approved hospitals. They can also request low-fee post-acute home visits for health assessments by panel experts approved on the smart digital platform.
            </p>
            <p className='text-blue-700 font-bold mt-4 cursor-pointer flex items-center justify-center md:justify-start gap-2'>
              Read More <FaArrowRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KashmiecareU;
