import React, { useState } from "react";
import {
  DiKrakenjsBadge,
  DiCode,
  DiRedis,
  DiMootoolsBadge,
} from "react-icons/di";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiGit,
  SiVite,
  SiReactrouter,
  SiMui,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

// Skills data with Categories
const skills = [
  {
    name: "Typescript",
    icon: <SiTypescript size={48} color="skyblue"/>,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={48} color="yellow"/>,
    category: "Frontend",
  },
  { name: "React", icon: <SiReact size={48} color="skyblue"/>, category: "Frontend" },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={48} color=""/>,
    category: "Frontend",
  },
  { name: "Node.Js", icon: <SiNodedotjs size={48} color="green"/>, category: "DevOps" },
  { name: "Next.Js", icon: <SiNextdotjs size={48}color="purple"/>, category: "DevOps" },
  { name: "GiT", icon: <SiGit size={48} color="#F1502f, #3E2COO"/>, category: "DevOps" },
  { name: "Vite", icon: <SiVite size={48} />, category: "Tools" },
  {
    name: "React Router",
    icon: <SiReactrouter size={48} />,
    category: "DevOps",
  },
  { name: "Material UI", icon: <SiMui size={48} />, category: "Tools" },
  {
    name: "Vs Code",
    icon: <BiLogoVisualStudio size={48} />,
    category: "Tools",
  },
];

const filters = [
  { label: "All", value: "all", icon: <DiKrakenjsBadge className="mr-1" /> },
  { label: "Frontend", value: "Frontend", icon: <DiCode className="mr-1" /> },
  { label: "Devops", value: "DevOps", icon: <DiRedis className="mr-1" /> },
  {
    label: "Tools",
    value: "Tools",
    icon: <DiMootoolsBadge className="mr-1" />,
  },
];

const SkillsSection = ({ Portfolio }) => {
  const [active, setActive] = useState("all");

  const filteredSkills =
    active === "all"
      ? skills
      : skills.filter((skill) => skill.category === active);

  return (
    <Portfolio
      title={
        <span>
          <span className="block text-base text-center text-gray-400 font-normal mb-2">
            My Skill
          </span>
          <span className="flex justify-center items-center gap-2">
            <DiKrakenjsBadge className="text-blue-300" size={32} />
            Technical Extertise
          </span>
        </span>
      }
      description="I've developed a divesre skill set across the full stack, allowing me to build complete, scalable applications from concept to deployment"
    >
      {/* Filter Buttons */}
      <div className="flex justify-center gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${
              active === filter.value
                ? "bg-blue-600 text-white"
                : "bg-zinc-900 text-gray-300 hover:bg-zinc-800"
            }
                        `}
            onClick={() => setActive(filter.value)}
          >
            {filter.icon}
            {filter.label}
          </button>
        ))}
      </div>
      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center hover:">
        {filteredSkills.map((skill) => (
            <div
            key={skill.name}
            className="flex flex-col items-center bg-zinc-900 rounded-xl py-4 shadow border border-zinc-800"
            >
                {skill.icon}
                <span className="mt-2 text-gray-300 text-sm">{skill.name}</span>
            </div>
        ))}
      </div>
    </Portfolio>
  );
};

export default SkillsSection;