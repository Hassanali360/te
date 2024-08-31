import { FaCheck } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Aboutus = () => {






  return (
<div
id="about"
className='flex md:flex-row flex-col px-[50px] py-[100px] container mx-auto font-primary '>

<div>
  <div className='text-4xl font-primary text-[#BBA442] font-bold mb-7'>
    <h4>About Us</h4>
    
  </div>
  <div className="md:items-start items-center"> 
    <p className='md:w-[600px]  w-full text-xl font-semibold space-y-5  '>
  Techpigeon Pvt Ltd offers Business Consulting & Custom Cloud Software development services. 
  We offer services based on the Microsoft Azure stack, Cloud App development for all major 
  platforms (iOS, Android, Windows Phone), & we run brand identity campaigns that allow 
  business growth with digital marketing.
</p>

<p className='text-xl font-semibold mt-3'>Domains We Cover:</p>

<div>
    <ul className='space-y-3 mt-2 cursor-pointer'>
        <li className="flex items-center gap-2 font-semibold "><FaCheck className="text-[#BBA442] text-xl" />Domain Registration</li>
        <li className="flex items-center gap-2 font-semibold "><FaExternalLinkSquareAlt  className="text-[#BBA442] text-xl"  />  Cloud Hosting</li>
        <li className="flex items-center gap-2 font-semibold "><FaCheck className="text-[#BBA442] text-xl" />Custom Cloud Apps Development</li>
        <li className="flex items-center gap-2 font-semibold "><FaCheck className="text-[#BBA442] text-xl" />Website Design & Development</li>
        <li className="flex items-center gap-2 font-semibold "><FaCheck className="text-[#BBA442] text-xl" />Business Branding</li>
    </ul>
</div>
</div>
 

  </div>
 
 <div className="md:mt-0 mt-6">
    <img src="/img.png" alt="" className="px-5 rounded-full" />
 </div>
      
    </div>
  )
}

export default Aboutus
