import React from 'react';
import { IconType } from 'react-icons';

interface OfferingCardProps {
  icon: IconType;
  title: string;
  description: string;
  highlightText?: string;
}

const OfferingCard: React.FC<OfferingCardProps> = ({ icon: Icon, title, description, highlightText }) => {
  return (
    <div className="relative bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate-fadeInUp overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deepBlue opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
      <div className="mb-4 text-brightYellow text-5xl">
        <Icon />
      </div>
      <h3 className="text-deepBlue text-xl font-semibold mb-4">{title}</h3>
      <p className="text-mediumGray mb-6">
        {description}
        {highlightText && <span className="font-bold text-brightYellow"> {highlightText}</span>}
      </p>
    </div>
  );
};

export default OfferingCard;
