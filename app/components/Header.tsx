"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-lightGray shadow-lg py-4 px-6 lg:px-10 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/logo2.png" alt="FluentEnglish Logo" width={120} height={120} />
          <h1 className="text-2xl font-semibold text-deepBlue"><i>Fluent English</i></h1>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-darkGray">
          <Link href="/" passHref>
            <span className="hover:text-deepBlue transition duration-300 ease-in-out">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className="hover:text-deepBlue transition duration-300 ease-in-out">About</span>
          </Link>
          <Link href="/classes" passHref>
            <span className="hover:text-deepBlue transition duration-300 ease-in-out">Classes</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="hover:text-deepBlue transition duration-300 ease-in-out">Contact</span>
          </Link>
        </nav>

        {/* Call-to-Action Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <Link href="/classes" passHref>
            <span className="bg-deepBlue text-white px-6 py-2 rounded-full shadow-md hover:bg-lightBlue hover:shadow-lg transition duration-300 ease-in-out">
              Get Started
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-darkGray focus:outline-none">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-lightGray p-6 shadow-md transition-transform duration-300 ease-in-out">
          <Link href="/" passHref>
            <span onClick={toggleMenu} className="text-darkGray hover:text-deepBlue transition duration-300">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span onClick={toggleMenu} className="text-darkGray hover:text-deepBlue transition duration-300">About</span>
          </Link>
          <Link href="/classes" passHref>
            <span onClick={toggleMenu} className="text-darkGray hover:text-deepBlue transition duration-300">Classes</span>
          </Link>
          <Link href="/contact" passHref>
            <span onClick={toggleMenu} className="text-darkGray hover:text-deepBlue transition duration-300">Contact</span>
          </Link>
          <Link href="/classes" passHref>
            <span onClick={toggleMenu} className="bg-deepBlue text-white px-6 py-2 rounded-full shadow-md hover:bg-lightBlue transition duration-300">
              Get Started
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
