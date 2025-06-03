import React from "react";
import { useState, useEffect } from "react";
import Slow from "/images/slow.png";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";
import CountUp from "react-countup";

const Counter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration / 1000);

    const interval = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.ceil(start), endValue));
    }, 100);
    return () => clearInterval(interval);
  }, [endValue, duration]);
  return <span>{count}</span>;
};

function Home() {
  return (
    <>
    <div 
    className="min-h-screen bg-cover bg-center bg-black/75"
    style={{ backgroundImage: `url(${Slow})` }}>
      <header className="flex md:flex:row items-start mb-8 px-8 md:px-20 lg:px-36 py-16  text-gray-300">
        <div className="mt-18">
          <h1 className="text-2xl  font-bold mb-6">Hi, There!</h1>
          <p className="text-6xl  font-extrabold ">I'm <span className="text-fuchsia-900">Walter Francis</span></p>
          <p className="mt-4 text-white">
            I'm a
            Innovative junior Web Developer | 2+ years of crafting dynamic and
            responsive websites.!
            <br /> I'm Passionate about clean code, user-friendly design, |
            Building Seamless & Engaging Interfaces and continuously <br /> refining
            skills to stay ahead in the evolving web landscape{" "}
          </p>
        </div>
      </header>

      <div className=" flex flex-col items-start px-34 mt-14">
        <a
          href=""
          download
          className="flex items-center px-6 py-3 bg-blue-50 text-white rounded-full hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          <FaDownload className="mr-2" />
          Download CV
        </a>

        {/* Social Media Links */}
        <div className="flex justify-center items-center mt-6 space-x-6">
          <a
            href="https://github.com/Tida007"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-blue-400 hover:text-green-600 text-2xl  transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/walter-francis-a24333365/"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-blue-400 hover:text-green-600 text-2xl  transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/+2348162475653"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-blue-400 hover:text-green-600 text-2xl  transition duration-300"
            >
            <FaWhatsapp />
          </a>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-blue-400 hover:text-green-600 text-2xl  transition duration-300"
          >
            <FaDiscord />
          </a>
        </div>
      </div>

      <div className="flex  px-30 mt-18 space-x-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            <CountUp end={2} duration={2} />
          </h2>
          <p className="text-gray-200 text-lg">Years of experience</p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            <CountUp end={5} duration={2} />
          </h2>
          <p className="text-gray-200 text-lg">Projects Completed</p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            <CountUp end={7} duration={2} />
          </h2>
          <p className="text-gray-200 text-lg">Mastered Technologies</p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            <CountUp end={2054} duration={3} />
          </h2>
          <p className="text-gray-200 text-lg">Code commits</p>
        </div>
      </div>
            </div>
    </>
  );
}

export default Home;
