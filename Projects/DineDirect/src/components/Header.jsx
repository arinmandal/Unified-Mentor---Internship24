import {
  FaQuestionCircle,
  FaSignInAlt,
  FaCartArrowDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className='w-full px-4 sm:px-6 py-4 sm:py-5 bg-white shadow-md'>
      <nav className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='logo'>
            <h1 className='text-2xl sm:text-3xl font-bold text-orange-500'>
              Dine<span className='text-gray-800'>Direct</span>
            </h1>
          </div>
          <div className='hidden md:block'>
            <ul className='flex gap-8 font-medium text-gray-700'>
              {["Help", "Sign In", "Cart"].map((item, index) => (
                <li
                  key={item}
                  className='hover:text-orange-500 transition-colors duration-300 flex items-center cursor-pointer'
                >
                  {[FaQuestionCircle, FaSignInAlt, FaCartArrowDown][index]({
                    className: "mr-2",
                  })}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-gray-700 focus:outline-none'
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className='md:hidden mt-4 bg-white rounded-lg shadow-xl p-4 absolute right-4 left-4 z-10'>
            <ul className='flex flex-col gap-4 font-medium text-gray-700'>
              {["Help", "Sign In", "Cart"].map((item, index) => (
                <li
                  key={item}
                  className='hover:text-blue-600 transition-colors duration-300 flex items-center cursor-pointer'
                >
                  {[FaQuestionCircle, FaSignInAlt, FaCartArrowDown][index]({
                    className: "mr-2",
                  })}
                  {item}
                </li>
              ))}
              
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
