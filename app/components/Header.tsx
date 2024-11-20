"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Roboto } from "next/font/google";

// Configure Roboto font with heavier weights
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400", // Use a single weight (e.g., bold) here for the entire header
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle header visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
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
      } ${roboto.className}`} // Apply Roboto font
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo2.png"
            alt="FluentEnglish Logo"
            width={120}
            height={120}
          />
          <h1 className="text-3xl font-extrabold text-deepBlue flex items-center">
            <i>Fluentt English</i>
            <span className="ml-2 text-brightYellow bg-deepBlue px-2 py-1 rounded-md text-base font-bold uppercase animate-pulse">
              Live
            </span>
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-darkGray">
          <Link href="/" passHref>
            <span className="hover:text-deepBlue text-lg font-bold transition duration-300 ease-in-out">
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span className="hover:text-deepBlue text-lg font-bold transition duration-300 ease-in-out">
              About
            </span>
          </Link>
          <Link href="/classes" passHref>
            <span className="hover:text-deepBlue text-lg font-bold transition duration-300 ease-in-out">
              Classes
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span className="hover:text-deepBlue text-lg font-bold transition duration-300 ease-in-out">
              Contact
            </span>
          </Link>
        </nav>

        {/* Call-to-Action Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <Link href="/classes" passHref>
            <span className="bg-deepBlue text-white text-lg font-bold px-6 py-2 rounded-full shadow-md hover:bg-lightBlue hover:shadow-lg transition duration-300 ease-in-out">
              Get Started
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
        <div className="md:hidden flex flex-col items-center space-y-4 bg-lightGray p-6 shadow-md transition-transform duration-300 ease-in-out">
          <Link href="/" passHref>
            <span
              onClick={toggleMenu}
              className="text-darkGray hover:text-deepBlue text-lg font-bold transition duration-300"
            >
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span
              onClick={toggleMenu}
              className="text-darkGray hover:text-deepBlue text-lg font-bold transition duration-300"
            >
              About
            </span>
          </Link>
          <Link href="/classes" passHref>
            <span
              onClick={toggleMenu}
              className="text-darkGray hover:text-deepBlue text-lg font-bold transition duration-300"
            >
              Classes
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span
              onClick={toggleMenu}
              className="text-darkGray hover:text-deepBlue text-lg font-bold transition duration-300"
            >
              Contact
            </span>
          </Link>
          <Link href="/classes" passHref>
            <span
              onClick={toggleMenu}
              className="bg-deepBlue text-white text-lg font-bold px-6 py-2 rounded-full shadow-md hover:bg-lightBlue transition duration-300"
            >
              Get Started
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
