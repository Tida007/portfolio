import React from "react";
import { FaCode, FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const SkillCard = ({ icon: Icon, title, description}) => (
  <div className="flex flex-col items-center border p-6 rounded-lg shadow-2xl shadow-black bg-zinc-950 ">
    <Icon className="text-4xl text-blue-500 mb-4" />
    <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-center text-sm">{description}</p>
  </div>
);

function SkillsCard() {
    return (
        <div 
        title="My journey "
        >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <div className="flex flex-col justify-center">
          <p className="text-gray-400 text-sm leading-relaxed">My journey as a frontend developer began with a fascination for technology & design. I started learning HTML, CSS and JavaScript & quickly fell in love with the process of turning ideas into reality through code. Over the years, I've honed my skills by working on various projects and continuously seeking new challenges to push my boundaries</p>
          <p className="text-gray-400 text-sm leading-relaxed mt-10">I'm always eager to learn and stay updated with the latest trends in web development. I believe that a strong foundation in frontend technologies is essential for creating exceptional user experiences, and I'm committed to mastering these skills to deliver high-quality applications.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCard icon={FaCode} title="Clean Code" description="I write maintainable, scalable and efficient code" />
          <SkillCard icon={FaUsers} title="Collaborative" description="I thrive in team environments, valuing collaboration and open communication to achieve common goals" />
          <SkillCard icon={FaLightbulb} title="Problem Solver" description="I approach challenges with creative and effective solutions." />
          <SkillCard icon={FaRocket} title="Fast Learner" description="I adapt quickly to new technologies." />
        </div>
      </div>
     </div>
    );
}

export default SkillsCard;
export { SkillCard};
