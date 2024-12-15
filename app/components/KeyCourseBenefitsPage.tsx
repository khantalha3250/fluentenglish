import { IconType } from 'react-icons';
import Link from 'next/link';
import OfferingCard from './OfferingCard';

interface Benefit {
  icon: IconType;
  title: string;
  description: string;
}

interface KeyCourseBenefitsPageProps {
  benefits: Benefit[];
  buttonText?: string;
  buttonLink?: string;
}

export default function KeyCourseBenefitsPage({
  benefits,
  buttonText = "Explore Payment Plans",
  buttonLink = "/pricing",
}: KeyCourseBenefitsPageProps) {
  return (
    <section className="pt-24 min-h-[70vh] bg-gradient-to-b from-softSkyBlue to-lightGray  py-12 px-6 sm:px-10 lg:px-20 flex flex-col items-center">
      
      {/* Page Title */}
      <h1 className="text-deepBlue text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center drop-shadow-md animate-fadeInUp">
        Key Course Benefits
      </h1>

      {/* Introduction Text */}
      <p className="text-darkGray text-lg sm:text-xl lg:text-2xl max-w-3xl text-center mb-12 font-light leading-relaxed animate-fadeInUp transition duration-300 ease-in-out">
        Our courses are designed to provide you with real-world English communication skills. Here’s what makes us different:
      </p>

      {/* Key Benefits Section */}
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <OfferingCard 
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>

      {/* Additional Call-to-Action Section */}
      <div className="mt-12 flex justify-center">
        <Link href={buttonLink}>
          <button className="bg-brightYellow text-darkGray px-8 py-4 rounded-lg shadow-lg font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-lightBlue">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
}
