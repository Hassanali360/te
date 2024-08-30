import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const KashmiecareU = () => {
    return (
        <div className="bg-gradient-to-r from-custom-yellow to-custom-orange ">
            <div className='px-[50px] py-[60px]  container mx-auto'>
                <div>

                    <h1 className='text-3xl font-bold text-[#2977C9] font-primary text-center'>New Venture : Kashmir CareU OnGo (KCUOG)</h1>
                    <p className='text-center font-semibold font-sansg text-lg md:mt-0 mt-5'>Kashmir CareU OnGo is New smart tech venture by the Techpigeon which is all one stop solution about healthcare which helps all care seekers to access free advice from the doctors and get appointments via mobile applications.</p>


                    <div className='flex md:flex-row flex-col gap-8 '>


                        {/* left */}
                        <div className='px-[150px]'>
                            <img src="/care.jpeg" className='mt-20' alt="" />
                            <p className='md:w-[200px] w-[100px] md:text-center text-start font-bold font-primary mt-3'>All One stop Healthcare Solution.
                                <br />Transform your data into
                                impactful insightful dashboards!</p>
                                <p className='text-blue-700 font-bold mt-4 cursor-pointer flex items-center text-center px-8 gap-2'>Read More <FaArrowRight /></p>
                        </div>



                        {/* right */}
                        <div className='mt-20 font-semibold text-2xl md:w-auto w-full'>
                            <p>Patients can easily save money to access free of cost healthcare advice from the provider / doctors and 
                                to get themselves registered by connecting to the approved hospitals
                                 and also request for low -fee post-acute home visits for health measuring by the panel experts
                                  approved in the smart digital platform.</p>
                                  <p className='text-blue-700 font-bold mt-[50px] cursor-pointer flex items-center gap-2 '>Read More<FaArrowRight href='#hero' /></p>
                        </div>


                    </div>



                </div>

            </div>

        </div>
    )
}

export default KashmiecareU
