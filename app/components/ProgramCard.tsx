interface ProgramCardProps {
    name: string;
    duration: string;
    details: string[];
  }
  
  export default function ProgramCard({ name, duration, details }: ProgramCardProps) {
    return (
      <div className="relative bg-white rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
        {/* Card Header */}
        <h3 className="text-deepBlue text-xl md:text-2xl font-bold mb-4">{name}</h3>
        <p className="text-darkGray text-sm md:text-base mb-3">
          Duration: <span className="font-semibold">{duration}</span>
        </p>
  
        {/* Details */}
        <ul className="text-gray-600 text-sm md:text-base space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center">
              <span className="text-brightYellow mr-2">•</span>
              {detail}
            </li>
          ))}
        </ul>
  
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-lightBlue opacity-0 hover:opacity-80 rounded-xl transition-opacity duration-300"></div>
      </div>
    );
  }
  