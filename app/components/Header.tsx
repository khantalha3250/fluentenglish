"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Roboto } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa"; 
// Configure Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false); // Hide header on scroll down
      } else {
        setIsHeaderVisible(true); // Show header on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-lightGray shadow-lg py-4 px-6 lg:px-10 fixed top-0 w-full z-50 transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      } ${roboto.className}`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto flex-wrap">
        {/* Logo and Title */}
       {/* Logo and Title */}
<div className="flex items-center space-x-3">
  <div className="relative w-12 sm:w-16">
    <Image
      src="/logo2.png"
      alt="FluentEnglish Logo"
      width={120} // Optional if dynamic height is applied
      height={120} // Optional if dynamic height is applied
      className="w-full h-auto object-contain" // Maintains aspect ratio
      priority
    />
  </div>
  <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deepBlue flex items-center">
    Fluentt English
    <span className="ml-2 text-brightYellow bg-deepBlue px-2 py-1 rounded-md text-sm sm:text-base font-bold uppercase animate-pulse">
      Live
    </span>
  </h1>
</div>


        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-darkGray">
          <Link href="/" passHref>
            <span className="hover:text-deepBlue text-sm sm:text-base lg:text-lg font-bold transition duration-300 ease-in-out">
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span className="hover:text-deepBlue text-sm sm:text-base lg:text-lg font-bold transition duration-300 ease-in-out">
              About us
            </span>
          </Link>
          <Link href="/classes" passHref>
            <span className="hover:text-deepBlue text-sm sm:text-base lg:text-lg font-bold transition duration-300 ease-in-out">
             MasterClasses
            </span>
          </Link>
          <Link href="/programs" passHref>
            <span className="hover:text-deepBlue text-sm sm:text-base lg:text-lg font-bold transition duration-300 ease-in-out">
             Programs
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span className="hover:text-deepBlue text-sm sm:text-base lg:text-lg font-bold transition duration-300 ease-in-out">
              Contact us
            </span>
          </Link>
        </nav>

        {/* Call-to-Action Button (Desktop) */}
        

<div className="hidden md:flex items-center">
  <Link href="https://api.whatsapp.com/send?phone=917045337426" passHref>
    <span className="bg-deepBlue text-white text-sm sm:text-base lg:text-lg font-bold px-4 sm:px-6 py-2 rounded-full shadow-md hover:bg-lightBlue hover:shadow-lg transition duration-300 ease-in-out flex items-center space-x-2">
      <span>Chat with   us On</span>
      <FaWhatsapp className=" text-green-500 text-lg sm:text-2xl" />
    </span>
  </Link>
</div>


        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-darkGray focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-lightGray p-4 shadow-md transition-transform duration-300 ease-in-out">
          <Link href="/" passHref>
            <span
              onClick={toggleMenu}
              className="text-darkGray hover:text-deepBlue text-base font-bold transition duration-300"
            >
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span
              onClick={toggleMenu}
              className="text-darkGray hover:text-deepBlue text-base font-bold transition duration-300"
            >
              About us
            </span>
          </Link>
          <Link href="/classes" passHref>
            <span
              onClick={toggleMenu}
              className="text-darkGray hover:text-deepBlue text-base font-bold transition duration-300"
            >
              MasterClasses
            </span>
          </Link>
          <Link href="/programs" passHref>
            <span
              onClick={toggleMenu}
              className="text-darkGray hover:text-deepBlue text-base font-bold transition duration-300"
            >
              Programs
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span
              onClick={toggleMenu}
              className="text-darkGray hover:text-deepBlue text-base font-bold transition duration-300"
            >
              Contact us
            </span>
          </Link>
          
          <Link href="https://api.whatsapp.com/send?phone=917045337426" passHref>
  <span
    onClick={toggleMenu}
    className="bg-deepBlue text-white text-base font-bold px-6 py-2 rounded-full shadow-md hover:bg-lightBlue transition duration-300 flex items-center space-x-2"
  >
    <span>Chat with us on</span>
    <FaWhatsapp className="text-green-500 text-lg sm:text-2xl" />
  </span>
</Link>
        </div>
      )}
    </header>
  );
}
