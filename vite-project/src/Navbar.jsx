import { GrYoga } from "react-icons/gr";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { FaHome, FaInfoCircle, FaCalendarAlt, FaUserAlt, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: <FaHome />, link: '#home' },
    { name: 'About', icon: <FaInfoCircle />, link: '#about' },
    { name: 'Classes', icon: <GrYoga />, link: '#classes' },
    { name: 'Schedule', icon: <FaCalendarAlt />, link: '#schedule' },
    { name: 'Teachers', icon: <FaUserAlt />, link: '#teachers' },
    { name: 'Contact', icon: <FaEnvelope />, link: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="w-full max-w-screen-xl mx-auto px-4 flex justify-between items-center overflow-x-hidden">
        {/* Logo/Title - Hidden on mobile, hover effect on desktop */}
        <a href="#" className="flex items-center group">
          <GrYoga className="text-3xl text-primary mr-2" />
          <h1 className="text-2xl font-bold text-primary group-hover:text-white transition-colors hidden sm:block">
            Vedic Yog Kendra
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-gray-700 hover:text-primary font-medium flex items-center transition-colors"
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <GiHamburgerMenu />
        </button>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', ease: "easeInOut" }}
                className="fixed inset-y-0 left-0 max-w-[80%] w-[250px] bg-white shadow-lg z-50 md:hidden h-full"
              >
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <GrYoga className="text-2xl text-primary" />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <IoClose className="text-2xl" />
                  </button>
                </div>
                <nav className="flex flex-col p-4 space-y-3">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className="text-gray-700 hover:text-primary font-medium flex items-center py-2 px-3 rounded hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </a>
                  ))}
                </nav>
              </motion.div>

              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
