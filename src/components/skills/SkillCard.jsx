import React from "react";
import { CodeXml, Users, LampDesk, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const SkillCard = ({ icon: Icon, title, description}) => (
  <div className="flex flex-col items-center  p-6 rounded-lg shadow-2xl drop-shadow-black bg-zinc-950 hover:bg-black/50 transition duration-300 ease-in-out">
    <motion.span
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
    <Icon size={38} className="text-4xl text-blue-500 mb-4" />
    </motion.span>
    <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-center text-sm">{description}</p>
  </div>
);

function SkillsCard() {
    return (
        <div className={`bg-[#1b1b1b2a]`}
        >
          <span className="block text-base text-center py-8 text-zinc-500">About Me</span>
          <h2 className="text-center font-extrabold text-3xl">Front-end Web Developer & Problem Solver</h2>
          <p className="text-center mt-6 text-sm mb-8 text-zinc-600">Passionate about creating efficient, scalable solutions that make a real impact.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col justify-center">
          <p className="text-md text-zinc-600">My journey as a frontend developer began with a fascination for technology & design. I started learning HTML, CSS and JavaScript & quickly fell in love with the process of turning ideas into reality through code. Over the years, I've honed my skills by working on various projects and continuously seeking new challenges to push my boundaries</p>
          <p className="text-zinc-600 text-md  mt-10">I'm always eager to learn and stay updated with the latest trends in web development. I believe that a strong foundation in frontend technologies is essential for creating exceptional user experiences, and I'm committed to mastering these skills to deliver high-quality applications.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8   sm:grid-cols-2 sm:gap-10 ">
          <SkillCard icon={CodeXml} title="Clean Code" description="I write maintainable, scalable and efficient code" />
          <SkillCard icon={Users} title="Collaborative" description="I thrive in team environments, valuing collaboration and open communication to achieve common goals" />
          <SkillCard icon={LampDesk} title="Problem Solver" description="I approach challenges with creative and effective solutions." />
          <SkillCard icon={Rocket} title="Fast Learner" description="I adapt quickly to new technologies." />
        </div>
      </div>
     </div>
    );
}

export default SkillsCard;
export { SkillCard};
