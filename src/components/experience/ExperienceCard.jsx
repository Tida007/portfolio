import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const ExperienceCard = ({ title, company, duration, description, skills }) => (
  <div className="mb-8 ">
    <span className="absolute -left-3 top-0 w-6 h-6 bg-amber-400 rounded-full"></span>
    <h3 className="font-bold text-gray-300">{title}</h3>
    <p className="text-gray-400 text-sm mt-2">
      <span className="text-blue-500">{company}</span> | {duration}
    </p>
    <p className="text-gray-400 text-xs mt-4">{description}</p>
    <div className="flex flex-wrap gap-2 mt-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-zinc-800 text-gray-400 text-xs px-2 py-1 rounded"
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-300 mb-8 flex items-center">
            <FaBriefcase className="text-blue-500 mr-2" />
            Work Experience
          </h2>
          <div className="relative border-l border-gray-600 pl-4">
            <ExperienceCard
              title="Freelance Developer"
              company="Fiverr"
              duration={"4.8 on Fiverr"}
              description={
                "Developing custom web applications  & websites for clients worldwide. Maintaining a high satisfaction rate withclients through effective communication ."
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
          <h2 className="text-2xl font-bold text-gray-300 mb-4 flex items-center">
            <FaGraduationCap className="text-blue-500 mr-2" />
            BootCamp
          </h2>
          <div className="border border-gray-600 p-4 rounded-lg">
            <h3 className="font-bold text-gray-300">New Horizon (ICT)</h3>
            <p className="text-gray-400 text-sm mt-2">
              <span className="text-blue-400">
                Higher School of Computer Science and Digital Technologies
                (ESTIN)
              </span>
              <span className="bg-zinc-800 text-gray-400 text-xs px-2 py-1 rounded">
                2022 - Present
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
