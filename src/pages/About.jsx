import React from "react";
import { FaCode, FaUsers, FaLightbulb, FaRocket, FaBriefcase, FaGraduationCap, FaAward } from "react-icons/fa";
import SkillsSection from "../components/SkillsSection";
import ProjectGrid from "../components/Project";
import { PiGithubLogo } from "react-icons/pi";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import Footer from "../components/Footer";


const Section = ({ title, description,  children, align = "center" })  =>(
  <div className="px-8 md:px20 lg:px-36 py-16 text-gray-300">
    <h1  className={`text-3xl font-bold text-${align} text-white mb-2`}>{title}</h1>
    {description && <p className={`text-${align} text-gray-400 text-md mb-12 text-sm py-6`}>{description}</p>}
    {children}
  </div>
);

const SkillCard = ({ icon: Icon, title, description}) => (
  <div className="flex flex-col items-center border p-6 rounded-lg shadow-2xl shadow-black bg-zinc-950 ">
    <Icon className="text-4xl text-blue-500 mb-4" />
    <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-center text-sm">{description}</p>
  </div>
);

const ExperienceCard = ({ title, company, duration, description, skills }) => (
  <div className="mb-8">
    <span className="absolute -left-3 top-0 w-6 h-6 bg-amber-400 rounded-full"></span>
    <h3 className="font-bold text-gray-300">{title}</h3>
    <p className="text-gray-400 text-sm mt-2"><span className="text-blue-500">{company}</span> | {duration}</p>
    <p className="text-gray-400 text-xs mt-4">{description}</p>
    <div className="flex flex-wrap gap-2 mt-2"> 
      {skills.map((skill, index) => (
        <span key={index} className="bg-zinc-800 text-gray-400 text-xs px-2 py-1 rounded">
          {skill}
        </span>
      ))}
    </div>
  </div>
)

function About ()  {
  return (
    <>
     {/* Tite Section */}
     <Section 
     title="Passionate about creating innovative web applications"
     align="left"
      description="I am a passionate web developer with a strong foundation in JavaScript, React, and Node.js. I thrive on challenges and enjoy turning complex problems into simple,  beautiful, and intuitive designs. My goal is to build applications that not only meet user needs but also provide an exceptional user experience."
     />

     {/* Skills Section */}
     <Section 
     title="My journey "
     align="left"
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
     </Section>

      {/* Experience Section */}
      <Section
      title={"Professional Experience"}
      description={"My professional journey has equipped me with practical experience and valuable skills in software development."}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-300 mb-8 flex items-center">
              <FaBriefcase className="text-blue-500 mr-2"/>
              Work Experience
            </h2>
            <div className="relative border-l border-gray-600 pl-4">
              <ExperienceCard 
              title="Freelance Developer"
              company="Fiverr"
              duration={"4.8 on Fiverr"}
              description={"Developing custom web applications  & websites for clients worldwide. Maintaining a high satisfaction rate withclients through effective communication ."}
              skills={["React", "Node.js", "JavaScript", "HTML", "TailwindCSS"]}
              />
              <ExperienceCard 
              title={"Web Development Intern"}
              company={"Exclusive Labs"}
              duration={"Dec 2023 - Feb 2024"}
              description={"Assisted in the development of client websites and applications. Gained hands-on experience with modern web development tools and frameworks."}
              skills={["React", "Team Collaboration",  "REST APIs", "JavaScript"]}
              />
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-300 mb-4 flex items-center">
              <FaGraduationCap className="text-blue-500 mr-2"/>
              BootCamp
            </h2>
            <div className="border border-gray-600 p-4 rounded-lg">
              <h3 className="font-bold text-gray-300">New Horizon (ICT)</h3>
              <p className="text-gray-400 text-sm mt-2">
                <span className="text-blue-400">Higher School of Computer Science and Digital Technologies (ESTIN)</span>
                <span className="bg-zinc-800 text-gray-400 text-xs px-2 py-1 rounded">2022 - Present</span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Tools Section */}
      <SkillsSection Portfolio={Section} />

      {/* Projects Link */}
      <Section
      title={"Featured Projects"}
      description={"Exiting project i currently deployed. check back soon my portfolio of full stack applications that demonstrate my techanical skills and problem-solving abilities"}
      >
      </Section>

      <ProjectGrid />
      <Section
      description={"I am always looking for new opportunities to collaborate on exciting projects. If you have a project in mind or want to discuss potential collaborations, feel free to reach out!"}
      className="text-center text-xs"
      >
        <div className="flex justify-center items-center mt-6">
          <a 
          href=""
          className="flex items-center px-4 py-2 bg-fuchsia-400 text-white rounded-full hover:bg-fuchsia-600 transition duration-300 ease-in-out"
          >
            <PiGithubLogo className="mr-2 text-xs" />
            View GitHhub Respositories
          </a>
        </div>
      </Section>

      <Section
      title={"Let's Connect!"}
      description={"Have a project in mind or want to discuss potential opportunities? Feel free to reach out through any of these channels!"}
      className={"bg-amber-950"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3xl h-36">
          <SkillCard icon={MdOutlineAttachEmail} title={"Email"} description={
            <>
            For direct inquiries and collaborations  <br />
            <a
             href="mailto:tonytidatmg@gmail.com"
             target="_blank"
            className="text-blue-400 hover:underline"
            >tonytidatmg@gmail.com</a>
            </>
            } 
             />
        <SkillCard icon={PiGithubLogo} title={"GitHub"} description={
          <>
          Check out my open source work <br />
          <a href="https://github.com/Tida007"
           rel="noopener noreferral" 
           target="#"
           className="text-blue-400 hover:underline flex gap-2"
           >View Projects <MdOutlineArrowOutward size={18}/></a>
          </>
           }  
           />
        <SkillCard icon={LuLinkedin} title={"LinkedIn"} description={
          <>
          Connect with me professionally <br />
          <a href="https://www.linkedin.com/in/walter-francis-a24333365/"
          rel="noopener noreferrer"
          target="#"
          className="text-blue-400 hover:underline flex gap-2"
          >View Profile <MdOutlineArrowOutward size={18}/></a>
          </>
          } 
          />
        </div>
      </Section>

      <Footer />
    </>
  );
}

export default About;
// This is a test edit to check if the About page is working correctly