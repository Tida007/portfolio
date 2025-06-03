import React from "react";
import SkillsSection from "../components/skills/SkillsSection";
import ProjectGrid from "../components/project/Project";
import { PiGithubLogo } from "react-icons/pi";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import SkillsCard, { SkillCard } from "../components/skills/SkillCard";
import ExperienceSection, { ExperienceCard } from "../components/experience/ExperienceCard";
import Footer from "../components/footer/Footer";

const Section = ({ title, description,  children })  =>(
  <div className="px-8 md:px20 lg:px-36 py-16 text-gray-300">
    <h1  className="text-3xl font-bold text-center text-white mb-2">{title}</h1>
    {description && <p className="text-center text-gray-400 text-md mb-12 text-sm py-6">{description}</p>}
    {children}
  </div>
);



function About ()  {
  return (
    <>
      {/* Title Section */}
      <Section
      title="Passionate about creating innovative web applications"
      description="I am a passionate web developer with a strong foundation in JavaScript, React, and Node.js. I thrive on challenges and enjoy turning complex problems into simple, beautiful, and intuitive designs. My goal is to build applications that not only meet user needs but also provide an exceptional user experience."
      />
      
      {/* Skills Section */}
      <SkillsCard />

      {/* Experience Section */}
      <ExperienceSection />

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