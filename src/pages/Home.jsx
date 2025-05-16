import React from "react";
import { useState, useEffect } from "react";
import Tida from "/images/Tida.jpg";
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
      <header className="flex justify-between md:flex:row items-center mb-8 px-8 md:px-20 lg:px-36 py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300">
        <div className="mb-6 ">
          <h1 className="text-4xl text-center font-bold">Hello, I'm Walter</h1>
          <p className="mt-4 text-center text-gray-400">
            I'm a
            Innovative junior Web Developer | 2+ years of crafting dynamic and
            responsive websites.!
            <br /> I'm Passionate about clean code, user-friendly design, |
            Building Seamless & Engaging Interfaces and continuously refining
            skills to stay ahead in the evolving web landscape{" "}
          </p>
        </div>
        <div className="md:w-1/3 flex justify-end mt-6 md:mt-0">
          <img
            src={Tida}
            className="rounded-full w-32 h-32 md:w-48 md:h-48"
            alt="Tida"
          />
        </div>
      </header>

      <div className="flex flex-col items-center mt-14">
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
            className=" text-gray-400 hover:text-green-600 text-2xl  transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/walter-francis-a24333365/"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-400 hover:text-green-600 text-2xl  transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/+2348162475653"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-400 hover:text-green-600 text-2xl  transition duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-400 hover:text-green-600 text-2xl  transition duration-300"
          >
            <FaDiscord />
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center mt-18 space-x-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            <CountUp end={2} duration={2} />
          </h2>
          <p className="text-gray-400 text-lg">Years of experience</p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            <CountUp end={5} duration={2} />
          </h2>
          <p className="text-gray-400 text-lg">Projects Completed</p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            <CountUp end={7} duration={2} />
          </h2>
          <p className="text-gray-400 text-lg">Mastered Technologies</p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            <CountUp end={2054} duration={3} />
          </h2>
          <p className="text-gray-400 text-lg">Code commits</p>
        </div>
      </div>
    </>
  );
}

export default Home;
