type WorkExperienceItem = {
  image: string;
  title: string;
  company: string;
  duration: string;
};

const workExperienceData: WorkExperienceItem[] = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYxLDly2hJtIQsREN9QTRyCRjpLyNZ15yXQ&s",
    title: "Artificial Intelligence Intern",
    company: "Eklavya.me",
    duration: "Feb 2026 - Apr 2026",
  },
];

const WorkExperience = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 md:px-10 lg:px-14 flex flex-col gap-12 mt-12">
      <h2 className="text-2xl font-semibold text-white text-left mb-6">Work Experience</h2>
      <div className="flex flex-col gap-12">
        {workExperienceData.map((work, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 h-[6rem]"
          >
            <img
              src={work.image}
              alt={work.company}
              className="w-16 h-16 object-cover rounded-lg mb-10 scale-125"
            />

            <div className="flex flex-col ml-10 h-[6rem] gap-2">
              <h3 className="text-white font-medium text-xl">{work.title}</h3>
              <p className="text-gray-300 text-sm">{work.company}</p>
            </div>

            <span className="text-gray-300 text-lg ml-auto mb-10">{work.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
