import React, { useState } from 'react';

export function Dropdown3({bgc, text, text2, hbgc}) {
    // State to manage the dropdown visibility
    const [isOpen, setIsOpen] = useState(false);
  
    // Toggle dropdown visibility
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    return (
      <div onClick={toggleDropdown} className="relative cursor-pointer">
        {/* Dropdown button */}
        <div className={`flex items-center ${bgc} ${hbgc} rounded-3xl px-3 py-2`}>
            <div className="text-black font-medium text-sm flex items-center">
                {text}
            </div>
            <div className='flex items-end pl-2'>
                <svg className="w-2.5 h-2.5 flex items-end" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </div>
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="z-10 mt-2 absolute divide-y rounded-lg shadow-sm w-44 dark:bg-stubgdark/70 backdrop-blur-sm">
            <ul className="py-2 text-sm dark:text-gray-200">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white focus ">
                  {text}
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700 dark:hover:text-white">
                  {text2}
                </a>
              </li>
              
            </ul>
          </div>
        )}
      </div>
    );
  }
  