
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {

  const scrollto = (id) => {
    const element = document.getElementById(id);
    if(element)
    {
      element.scrollIntoView(
        {
          behavior:'smooth'
        }
      )
    }
  
  }

  return (
    <footer  className="bg-[#BBA442] text-white py-[100px] text-sm font-sansg cursor-pointer">
        
      <div className="container mx-auto grid grid-cols-1 md:text-center text-center md:grid-cols-4 gap-8">
        <div>
          <h5 className=" font-semibold mb-4 text-black "
          onClick={scrollto('hero')} 
          >PRODUCT</h5>
          <ul>
            <li className="mb-2">Features</li>
            <li className="mb-2">Enterprise</li>
            <li className="mb-2">Security</li>
            <li className="mb-2">Trust</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4 text-black ">SERVICES</h5>
          <ul>
            <li className="mb-2">Engineering</li>
            <li className="mb-2">Financial Services</li>
            <li className="mb-2">Sales</li>
            <li className="mb-2">IT</li>
            <li className="mb-2">Marketing</li>
            <li className="mb-2">Customer Support</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4 text-black ">RESOURCES</h5>
          <ul>
            <li className="mb-2">Library</li>
            <li className="mb-2">Tips</li>
            <li className="mb-2">Blog</li>
            <li className="mb-2">Events</li>
            <li className="mb-2">Help Center</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4 text-black ">COMPANY</h5>
          <ul>
            <li className="mb-2">About us</li>
            <li className="mb-2">Team</li>
            <li className="mb-2">News</li>
            <li className="mb-2">Host Console</li>
            <li className="mb-2">C-CAP (AJK)</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-sm">
        <p>© 2024 Techpigeon SMC Private Limited. All rights reserved.</p>
        <div className="flex space-x-4 text-center items-center px-[550px] mt-3 mb-3">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group">
        <FaFacebookF className="text-black border border-black p-2 rounded-full group-hover:bg-black group-hover:text-white transition duration-300" size={32} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group">
        <FaTwitter className="text-black border border-black p-2 rounded-full group-hover:bg-black group-hover:text-white transition duration-300" size={32} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
        <FaLinkedinIn className="text-black border border-black p-2 rounded-full group-hover:bg-black group-hover:text-white transition duration-300" size={32} />
      </a>
    </div>
        <p className="mt-2">© 2024 Techpigeon. All rights reserved. Various trademarks held by their respective owners.</p>
        <p className="mt-2">
          <a href="#" className="hover:underline">Privacy & Terms</a> | <a href="#" className="hover:underline">Contact Us</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
