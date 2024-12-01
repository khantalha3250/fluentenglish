"use client";
import { useState } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Krutika Sharma",
    role: "Sr. Instructor (English Communication and IELTS)",
    bio: "Krutika is a linguistics expert with over 10 years of experience in teaching English as a second language. Her passion for teaching and expertise in communication drive the success of FluentEnglish.",
    img: "/f1.jpeg",
    
  },
  {
    name: "Laura zammit",
    role: "European and British ascent tutor.",
    bio:"Laura connects students for Speaking practice to improve their Fluency level and Ascent. She teaches british and European ascents.she is from France.",
    img: "/f5.png",

  },
  {
    name: "Urvashi bose",
    role: "Sr. Instructor English language",
    bio: "Urvashi connects students and organizes language exchange programs. She fosters a supportive community where learners feel confident practicing their skills.",
    img: "/f3.jpeg",
  },
  {
    name: "Vinit Rodriguez",
    bio: "Vinit designs interactive courses to help students learn in real-world scenarios. His innovative approach ensures that every lesson is engaging and practical.",
    role: "Curriculum developer",
    img: "/f4.jpeg",
  },
];

const TeamPage: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section className="pt-20 min-h-[70vh] bg-gradient-to-b from-lightGray to-softSkyBlue py-12 px-6 sm:px-10 lg:px-20 flex flex-col items-center">
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
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out relative overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full rounded-lg overflow-hidden mb-4 aspect-video">
              <Image
                src={member.img}
                alt={`${member.name}`}
                fill
                className="object-contain"
                priority // Ensures images load quickly
              />
              <div
                className={`absolute inset-0 bg-gradient-to-b from-transparent to-deepBlue transition-opacity duration-300 ${
                  hoveredMember === index ? "opacity-50" : "opacity-0"
                }`}
              ></div>
            </div>

            {/* Name and Role */}
            <h3 className="text-deepBlue text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
              {member.name}
            </h3>
            <p className="text-mediumGray text-sm sm:text-base mb-4">
              {member.role}
            </p>

 {/* Bio with hover effect */}
 <p
              className={`text-darkGray text-sm transition-opacity duration-300 ${
                hoveredMember === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {member.bio}
            </p>

            {/* Hover Interaction */}
            {hoveredMember === index && (
              <div className="absolute inset-0 bg-white bg-opacity-50 transition-opacity duration-300 flex justify-center items-center">
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
