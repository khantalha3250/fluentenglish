import { IconType } from 'react-icons';
import Link from 'next/link';
import OfferingCard from './OfferingCard';

interface WhatWeOfferPageProps {
  title: string;
  infoText: string;
  offerings: {
    icon: IconType;
    title: string;
    description: string;
    highlightText?: string;
  }[];
  ctaText: string;
  ctaLink: string;
}

const WhatWeOfferPage: React.FC<WhatWeOfferPageProps> = ({ title, infoText, offerings, ctaText, ctaLink }) => {
  return (
    <section className="pt-24 min-h-[70vh] bg-gradient-to-b from-lightGray to-softSkyBlue py-12 px-6 sm:px-10 lg:px-20 flex flex-col items-center">
      
      {/* Page Title */}
      <h1 className="text-deepBlue text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center drop-shadow-md animate-fadeInUp">
        {title}
      </h1>

      {/* Introduction Text */}
      <p className="text-darkGray text-lg sm:text-xl lg:text-2xl max-w-3xl text-center mb-12 font-light leading-relaxed animate-fadeInUp transition duration-300 ease-in-out">
        {infoText}
      </p>

      {/* Key Offerings Section */}
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
        {offerings.map((offering, index) => (
          <OfferingCard 
            key={index}
            icon={offering.icon}
            title={offering.title}
            description={offering.description}
            highlightText={offering.highlightText}
          />
        ))}
      </div>

      {/* Additional Call-to-Action Section */}
      <div className="mt-12 flex justify-center">
        <Link href={ctaLink}>
          <button className="bg-brightYellow text-darkGray px-8 py-4 rounded-lg shadow-lg font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-lightBlue">
            {ctaText}
          </button>
        </Link>
      </div>

    </section>
  );
};

export default WhatWeOfferPage;
