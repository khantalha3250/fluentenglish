"use client";
import { useState } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & Lead Instructor",
    bio: "Sarah is a linguistics expert with over 10 years of experience in teaching English as a second language. Her passion for teaching and expertise in communication drive the success of FluentEnglish.",
    img: "/t3.jpeg", // Replace with real image paths
  },
  {
    name: "Michael Davis",
    role: "Curriculum Developer",
    bio: "Michael designs interactive courses to help students learn in real-world scenarios. His innovative approach ensures that every lesson is engaging and practical.",
    img: "/t1.png",
  },
  {
    name: "Emily White",
    role: "Community Manager",
    bio: "Emily connects students and organizes language exchange programs. She fosters a supportive community where learners feel confident practicing their skills.",
    img: "/t4.jpeg",
  },
  {
    name: "James Wilson",
    role: "Tech Lead",
    bio: "James leads the tech team in building the platform’s seamless, responsive experience. His focus on user-friendly design ensures FluentEnglish operates smoothly.",
    img: "/t2.jpeg",
  },
];

const TeamPage: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section className="pt-24 min-h-[70vh] bg-gradient-to-b from-lightGray to-softSkyBlue py-12 px-6 sm:px-10 lg:px-20 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-deepBlue text-4xl sm:text-5xl font-extrabold mb-10 text-center drop-shadow-md animate-fadeInUp">
        Meet Our Team
      </h1>

      {/* Team Members Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
            className={`bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate-fadeInUp relative overflow-hidden`}
          >
            {/* Image */}
            <div className="relative w-full h-40 mb-4">
              <Image
                src={member.img}
                alt={`${member.name}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-b from-transparent to-deepBlue transition-opacity duration-300 ${
                  hoveredMember === index ? 'opacity-50' : 'opacity-0'
                }`}
              ></div>
            </div>

            {/* Name and Role */}
            <h3 className="text-deepBlue text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-mediumGray text-sm mb-4">{member.role}</p>

            {/* Bio with hover effect */}
            <p
              className={`text-darkGray text-sm transition-opacity duration-300 ${
                hoveredMember === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {member.bio}
            </p>

            {/* Hover animation for more interaction */}
            {hoveredMember === index && (
              <div className="absolute inset-0 bg-white bg-opacity-50 transition-opacity duration-300 flex justify-center items-center">
                {/* Add any additional overlay content here */}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
