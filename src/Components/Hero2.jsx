
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { HiMiniArrowsPointingIn } from "react-icons/hi2";
import { FaCropSimple } from "react-icons/fa6";


const Hero2 = () => {
  return (
    <div className='bg-[#BBA442] ' id="hero">
        <div className='flex md:flex-row flex-col px-[50px] py-[60px] container md:mx-auto md:space-y-0 space-y-8'>
          
          <div className='space-y-3 font-semibold'>
          <div className='flex items-center  text-white gap-1'>
          <TbTriangleSquareCircleFilled className='text-3xl' />
          <p className='text-xl '>Business Plan Development</p>
              
          </div>
          <p className='w-[400px] px-8'>Conversations happen in dedicated rooms, not in a single overstuffed inbox. No one else offers this level of versatility.</p>
          </div>

          <div className='space-y-3 font-semibold'>
          <div className='flex items-center  text-white gap-1'>
          <HiMiniArrowsPointingIn  className='text-3xl' />
          <p className='text-xl '>Cloud Apps Development</p>
              
          </div>
          <p className='w-[400px] px-8'>Follow what is important to you in your company, projects, issue types or find important information in an easily searchable cloud apps.</p>
          </div>



          <div className='space-y-3 font-semibold'>
          <div className='flex items-center  text-white gap-1'>
          <FaCropSimple className='text-3xl' />
          <p className='text-xl '>Mobile friendly Dashboards UX</p>
              
          </div>
          <p className='w-[400px] px-8'>Stay connected with your team through iOS and Android apps, integrations and extensions for desktop.</p>
          </div>
             




        </div>




    </div>
  )
}

export default Hero2
