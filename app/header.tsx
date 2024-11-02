// components/Header.js

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-lightGray shadow-lg py-4 px-6 lg:px-10 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/logo2.png" alt="fluentEnglish Logo" width={40} height={40} />
          <h1 className="text-2xl font-semibold text-deepBlue"><i>Fluent English</i></h1>
        </div>

        {/* Navigation Links */}
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

        {/* Call-to-Action Button */}
        <div className="hidden md:flex items-center">
          <Link href="/signup" passHref>
            <span className="bg-deepBlue text-white px-6 py-2 rounded-full shadow-md hover:bg-lightBlue hover:shadow-lg transition duration-300 ease-in-out">
              Get Started
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none text-darkGray">
          {/* You can replace this with an icon for the mobile menu */}
          <span className="text-xl">☰</span>
        </button>
      </div>
    </header>
  );
}
