import React from "react";

type EducationItem = {
  image: string;
  institution: string;
  description: string;
  duration: string;
};

const educationData: EducationItem[] = [
  {
    image: "/erasebg-transformed.png", // replace with actual path
    institution: "Pune Insitute of Computer Technology",
    description: "B.E. Computer Engineering (CGPA: 9.455)",
    duration: "2023 - 2027",
  },
  {
    image: "/erasebg-transformed (1).png",
    institution: "The Lexicon School Hadapsar",
    description: "Class 10 (Percentage: 92.2%)",
    duration: "2013 - 2021",
  },
];

const Education = () => {
  return (
    <div className="w-full max-w-8xl flex flex-col gap-12 mt-12">
      <h2 className="text-2xl font-semibold text-white text-left mb-6">Education</h2>
      <div className="flex flex-col gap-12">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 h-[6rem]"
          >
            {/* Left image */}
            <img
              src={edu.image}
              alt={edu.institution}
              className="w-16 h-16 object-cover rounded-lg mb-10 scale-125"
            />

            {/* Middle info */}
            <div className="flex flex-col ml-10 h-[6rem] gap-2">
              <h3 className="text-white font-medium text-xl">{edu.institution}</h3>
              <p className="text-gray-300 text-sm">{edu.description}</p>
            </div>

            {/* Right duration */}
            <span className="text-gray-300 text-lg ml-auto mb-10">{edu.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
