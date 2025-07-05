import React, { useState } from "react"
import { motion } from "framer-motion";
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
  SiRedux,
  SiDocker
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

// Skills data with Categories
const skills = [
  {
    name: "Typescript",
    icon: <SiTypescript size={34} color="#0795c0"/>,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={34} color="#b4ba17"/>,
    category: "Frontend",
  },
  { name: "React", 
    icon: <SiReact size={34} color="#318b95"/>, 
    category: "Frontend",
   },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={34} color="#31957f"/>,
    category: "Frontend",
  },
  { name: "Node.Js", icon: <SiNodedotjs size={34} color="#084e03"/>, category: "DevOps" },
  { name: "Next.Js", icon: <SiNextdotjs size={34} color="#000000"/>, category: "DevOps" },
  { name: "GiT", icon: <SiGit size={34} color="#ba4517"/>, category: "DevOps" },
  { name: "Vite", icon: <SiVite size={34} color="4e3f03" />, category: "Tools" },
  { name: "Redux Toolkit", icon: <SiRedux size={34} color="#764abc" />, category: "Tools" },
  { name: "Docker", icon: <SiDocker size={34} color="#2496ed" />, category: "DevOps" },
  {
    name: "React Router",
    icon: <SiReactrouter size={34} color="#f11924ab" />,
    category: "DevOps",
  },
  { name: "Material UI", icon: <SiMui size={34} color="#094249" />, category: "Tools" },
  {
    name: "Vs Code",
    icon: <TbBrandFramerMotion size={34} color="#b4ba17" />,
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

const SkillsSection = ( ) => {
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");

  const filteredSkills = skills.filter(
    (skill) =>
      (active === "all" || skill.category === active) &&
      skill.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className={`p-16 px-4 flex flex-col items-center bg-[#4542422a] dark:bg-zinc-900 text-black dark:text-white`}>
      {/* Badge */}
      <span className="block text-base text-center font-normal mb-12 text-zinc-500 dark:text-zinc-400">
        My Skills
      </span>

      {/* Title */}
      <h2 className="flex items-center gap-2 md:text-4xl font-bold mb-12 text-black dark:text-white">
        <DiKrakenjsBadge className="text-blue-400" size={36} />
        Technical Expertise
      </h2>

      {/* Subtitle */}
      <p className="text-center max-w-2xl mb-8 text-gray-700 dark:text-gray-300">
        I've developed a diverse skill set in web development, focusing on frontend technologies. My expertise includes modern JavaScript frameworks, responsive design, and efficient server-side solutions.
      </p>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {filters.map((filter) => (
          <button
          key={filter.value}
          className={`flex item-center justify-center px-4 py-2 rounded-full text-sm font-medium transition ${
            active === filter.value
              ? "bg-blue-500 text-white shadow-sm"
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
      {/* Search Input */}
      <input 
      type="text"
      placeholder="Search skills..." 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mb-8 h-10 w-full text-start max-w-md py-2 rounded-lg bg-zinc-900 dark:bg-zinc-800 text-gray-200 dark:text-white dark:border-zinc-700/50 focus:outline-none focus:border-blue-500 backdrop-blur-sm"
      />

      {/* Skills Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-flow- gap-6">
        {filteredSkills.map((skill) => (
          <motion.div
          key={skill.name}
          whileHover={{scale: 1.2,  rotate: 10}}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 600, }}
          >
            <div key={skill.name} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-zinc-800 dark:bg-zinc-700 mb-2 shadow-lg">
                {skill.icon}
              </div>
              <span className="text-xs text-black dark:text-white">{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection;