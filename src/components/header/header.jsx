import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faAngleDown, faAngleUp,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };
  

  return (
      <nav className="bg-white text-black p-4 w-full flex flex-col md:flex-row justify-between items-center">
        {/* Logo and FAQ */}
        <div className="flex items-center">
          <div className="border-2 border-black rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-black font-bold text-lg">T</span>
          </div>
          <span className="ml-2 font-semibold text-sm md:text-base">Frequently Asked Questions</span>
        </div>
  
        {/* Right side */}
        <div className="flex items-center mt-4 md:mt-0">
          {/* Go to tilda.co */}
          <a
            href="https://tilda.co"
            className="mr-4 flex items-center text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to tilda.co
            <FontAwesomeIcon icon={faSignOutAlt} className="mx-3" />
          </a>
  
          {/* Go to help center */}
          <a
            href="#"
            className="mr-4 flex items-center text-sm md:text-base"
          >
            Go to help center
            <FontAwesomeIcon icon={faSignOutAlt} className="mx-3" />
          </a>
  
          {/* Language dropdown */}
          <div className="relative">
            <details className="p-2 relative border" open={showLanguageDropdown}>
              <summary className="flex items-center cursor-pointer" onClick={toggleLanguageDropdown}>
                <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                Lang
                <FontAwesomeIcon icon={showLanguageDropdown ? faAngleUp : faAngleDown} className="ml-2" />
              </summary>
              <ul className="py-1 w-full left border top-10 absolute text-sm md:text-base">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">English</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Spanish</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">French</li>
              </ul>
            </details>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
