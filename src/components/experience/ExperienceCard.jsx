import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const ExperienceCard = ({ title, company, duration, description, skills }) => (
  <div className="mb-8 ">
    <span className="absolute -left-3 top-0 w-6 h-6 bg-amber-400 rounded-full"></span>
    <h3 className="font-bold text-black dark:text-white ">{title}</h3>
    <p className=" text-sm mt-2 text-gray-700 dark:text-gray-300">
      <span className="text-blue-500 dark:text-blue-400">{company}</span> | {duration}
    </p>
    <p className=" text-xs mt-4 text-gray-700 dark:text-gray-300">{description}</p>
    <div className="flex flex-wrap gap-2 mt-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-zinc-800 dark:bg-zinc-700 text-gray-400 dark:text-gray-300 text-xs px-2 py-1 rounded"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

function ExperienceSection() {
  return (
    <div
      title={"Professional Experience"}
      description={
        "My professional journey has equipped me with practical experience and valuable skills in software development."
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 items-center w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 lg:px-20">
        <div>
          <h2 className="text-2xl font-bold  mb-8 flex items-center text-black dark:text-white">
            <FaBriefcase className="text-blue-500 dark:text-blue-400 mr-2" />
            Work Experience
          </h2>
          <div className="relative border-l border-gray-600 dark:border-gray-400 pl-4">
            <ExperienceCard
              title="Freelance Developer"
              company="Upwork"
              duration={"4.8 on Upwork"}
              description={
                "Developing custom web applications  & projects for clients worldwide. Maintaining a high satisfaction rate with clients through effective communication ."
              }
              skills={["React", "Node.js", "JavaScript", "HTML", "TailwindCSS"]}
            />
            <ExperienceCard
              title={"Web Development Intern"}
              company={"Exclusive Labs"}
              duration={"Dec 2023 - Feb 2024"}
              description={
                "Assisted in the development of client websites and applications. Gained hands-on experience with modern web development tools and frameworks."
              }
              skills={[
                "React",
                "Team Collaboration",
                "REST APIs",
                "JavaScript",
              ]}
            />
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-bold  mb-4 flex items-center text-black dark:text-white">
            <FaGraduationCap className="text-blue-500 dark:text-blue-400 mr-2" />
            BootCamp
          </h2>
          <div className="shadow-2xl border-0 w-1xl p-4 rounded-lg bg-white dark:bg-zinc-900">
            <h3 className="font-bold text-black dark:text-white ">New Horizon (ICT)</h3>
            <p className=" text-sm mt-2 text-gray-700 dark:text-gray-300">
              <span className="dark:text-blue-400">
                Higher School of Computer Science and Digital Technologies
                (ESTIN)
              </span>
              <span className="bg-zinc-800 dark:bg-zinc-700 text-gray-400 dark:text-gray-300 text-xs px-2 py-1 rounded">
                2024 - 2025
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
export { ExperienceCard };
