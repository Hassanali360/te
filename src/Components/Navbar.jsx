import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    contact: false,
    verification: false,
    whyTechpigeon: false,
  });

  const navigate = useNavigate();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleScrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    setDropdownOpen({
      contact: false,
      verification: false,
      whyTechpigeon: false,
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownOpen.contact ||
        dropdownOpen.verification ||
        dropdownOpen.whyTechpigeon
      ) {
        const dropdowns = document.querySelectorAll('.dropdown-menu');
        let clickedOutside = true;

        dropdowns.forEach(dropdown => {
          if (dropdown.contains(event.target)) {
            clickedOutside = false;
          }
        });

        if (clickedOutside) {
          setDropdownOpen({
            contact: false,
            verification: false,
            whyTechpigeon: false,
          });
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="bg-[#191717] text-white py-6 px-4 fixed top-0 left-0 right-0 z-10 text-sm font-primary">
      <div className="md:container md:mx-auto flex items-center justify-between h-full gap-9 text-sm md:w-full max-w-[600px]">
        {/* Logo */}
        <div>
          <img src="/image.png" alt="Logo" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {/* Why Techpigeon Dropdown */}
          <div className="relative dropdown-menu">
            <span
              className="cursor-pointer hover:text-gray-400 flex items-center"
              onClick={() => toggleDropdown("whyTechpigeon")}
            >
              Why Techpigeon? <FaAngleDown />
            </span>
            {dropdownOpen.whyTechpigeon && (
              <div className="absolute left-0 mt-2 bg-black text-white rounded shadow-lg">
                <ul className="w-[250px]">
                  <li className="px-4 py-2 cursor-pointer" onClick={handleScrollToAbout}>
                    About
                  </li>
                  <li className="px-4 py-2 cursor-pointer">
                    About Our Startup Network
                  </li>
                </ul>
              </div>
            )}
          </div>

          <span className="cursor-pointer" onClick={handleScrollToAbout}>
            Solution
          </span>
          <span className="cursor-pointer" onClick={handleScrollToAbout}>
            TNS
          </span>
          <span className="cursor-pointer">Blog</span>
          <span className="cursor-pointer">MSDMC</span>

          {/* Contact Dropdown */}
          <div className="relative dropdown-menu">
            <span
              className="cursor-pointer hover:text-gray-400 flex text-center gap-2 items-center"
              onClick={() => toggleDropdown("contact")}
            >
              Contact <FaAngleDown />
            </span>
            {dropdownOpen.contact && (
              <div className="absolute left-0 mt-2 bg-black text-white rounded shadow-lg">
                <ul className="w-[200px]">
                  <li className="px-4 py-2 cursor-pointer">Email Us</li>
                  <li className="px-4 py-2 cursor-pointer">Linkedin</li>
                </ul>
              </div>
            )}
          </div>

          {/* Verification Dropdown */}
          <div className="relative dropdown-menu">
            <span
              className="cursor-pointer hover:text-gray-400 flex items-center gap-2"
              onClick={() => toggleDropdown("verification")}
            >
              Verification <FaAngleDown />
            </span>
            {dropdownOpen.verification && (
              <div className="absolute left-0 mt-2 bg-black text-white rounded shadow-lg">
                <ul className="w-[200px]">
                  <li className="px-4 py-2 cursor-pointer">Verification Batch 01</li>
                  <li className="px-4 py-2 cursor-pointer">Verification Batch 02</li>
                  <li className="px-4 py-2 cursor-pointer">Verification Batch 03</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="text-sm">
          <div className="hidden md:flex space-x-4 items-center font-sansg text-sm">
            <button
              onClick={() => navigate('/register-startup')}
              className="bg-[#5CC4EB] text-white text-xs px-4 py-2 rounded-3xl"
            >
              Register Your Startup
            </button>
            <button className="bg-[#5CC4EB] text-white text-xs px-4 py-2 rounded-3xl">
              Course Registration
            </button>
            <button className="bg-[#5CC4EB] text-white text-xs px-4 py-2 rounded-3xl">
              Azure Chat GPT
            </button>
            <button className="bg-gray-500 text-white text-xs px-4 py-2 rounded hover:bg-gray-600">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {open ? (
              <IoMdClose className="text-2xl cursor-pointer" />
            ) : (
              <IoMdMenu className="text-2xl cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 bg-gray-800 p-4 rounded">
          <div className="relative">
            <span
              className="cursor-pointer"
              onClick={() => toggleDropdown("whyTechpigeon")}
            >
              Why Techpigeon?
            </span>
            {dropdownOpen.whyTechpigeon && (
              <div className="mt-2 bg-white text-black rounded shadow-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={handleScrollToAbout}>
                    About
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Why Us
                  </li>
                </ul>
              </div>
            )}
          </div>
          <span className="cursor-pointer" onClick={handleScrollToAbout}>
            Solution
          </span>
          <span className="cursor-pointer" onClick={handleScrollToAbout}>
            TNS
          </span>
          <span className="cursor-pointer">Blog</span>
          <span className="cursor-pointer">MSDMC</span>

          {/* Contact Dropdown */}
          <div className="relative">
            <span
              className="cursor-pointer"
              onClick={() => toggleDropdown("contact")}
            >
              Contact
            </span>
            {dropdownOpen.contact && (
              <div className="mt-2 bg-white text-black rounded shadow-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Email Us</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Visit Us</li>
                </ul>
              </div>
            )}
          </div>

          {/* Verification Dropdown */}
          <div className="relative">
            <span
              className="cursor-pointer"
              onClick={() => toggleDropdown("verification")}
            >
              Verification
            </span>
            {dropdownOpen.verification && (
              <div className="mt-2 bg-white text-black rounded shadow-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Verify Email</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Verify Phone</li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4 mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => navigate('/register-startup')}
            >
              Register Startup
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Course
            </button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              Azure Chat GPT
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
