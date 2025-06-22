"use client";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-darkNavy text-lightGray py-12 px-6 sm:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        
        {/* Logo and Description */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Fluentt English</h2>
          <p className="text-mediumGray mt-4 max-w-sm">
            Unlock your English fluency with interactive live classes and practical modules designed to help you speak confidently and accurately in any situation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about">
                <span className="hover:text-lightBlue transition-colors duration-200">About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/classes">
                <span className="hover:text-lightBlue transition-colors duration-200">MasterClasses</span>
              </Link>
            </li>
            <li>
              <Link href="/programs">
                <span className="hover:text-lightBlue transition-colors duration-200">Programs</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:text-lightBlue transition-colors duration-200">Contact</span>
              </Link>
            </li>
           
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/3 text-center md:text-right">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-mediumGray">Email: admin@fluenttenglishlive.com</p>
          <p className="text-mediumGray">Phone:  +91-8454974682</p>
          <p className="text-mediumGray">11/2 First floor , Sakinaka industrial estate,near saki naka metro Andheri East 400072</p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4 mt-4">
          <Link href="https://api.whatsapp.com/send?phone=918828536935">
              <FaWhatsapp className="text-white hover:text-brightYellow transition-colors duration-200 text-2xl" />
            </Link>
            <Link href="https://www.facebook.com/share/16PTKxNmJf/">
              <FaFacebook className="text-white hover:text-brightYellow transition-colors duration-200 text-2xl" />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter className="text-white hover:text-brightYellow transition-colors duration-200 text-2xl" />
            </Link>
            <Link href="https://www.instagram.com/fluentt_english_live?utm_source=qr&igsh=MThtcHF2eG1icHZsMQ==">
              <FaInstagram className="text-white hover:text-brightYellow transition-colors duration-200 text-2xl" />
            </Link>
            <Link href="https://linkedin.com">
              <FaLinkedin className="text-white hover:text-brightYellow transition-colors duration-200 text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-mediumGray mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-center">
        <p className="text-mediumGray">© {new Date().getFullYear()} FluentEnglish. All rights reserved.</p>
        <ul className="flex space-x-4 mt-4 sm:mt-0">
          <li>
            <Link href="/policy">
              <span className="hover:text-lightBlue transition-colors duration-200">Privacy Policy</span>
            </Link>
          </li>
          <li>
            <Link href="/policy">
              <span className="hover:text-lightBlue transition-colors duration-200">Terms and Conditions</span>
            </Link>
          </li>
          <li>
            <Link href="/policy">
              <span className="hover:text-lightBlue transition-colors duration-200">Refund and Cancellation Policy</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
