import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";
import Homecss from "./home/Home.module.css";
import { ArrowRight, Github, Mails, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Switch from "/images/bg-switch.png"
import Drop from "/images/drop.png";


function Home() {
  const [text, setText] = useState("");
  const fullText = "Hello,  I'm a Web Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className={`${Homecss.container} relative`}
      style={{
        backgroundImage: `url(${Switch})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: -1,
        minHeight: "83%",
      }}
      >
        <div
        className={`${Homecss.home_wrapper} flex flex-col lg:flex-row md:items-centerv items-center justify-between `}
      >
        <div className={`${Homecss.home_content}  `}>
          <div className={`${Homecss.home_box} flex-1 w-full`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <h5>
                <span
                  style={{ color: "var(--primary-color)" }}
                  className="text-xl font-semibold"
                >
                  {text}
                </span>
                <span className="animate-bounce">|</span>
              </h5>
              <h2 className="text-7xl font-extrabold w-16">
                Francis <span className="font-extrabold">Walter</span>
              </h2>
              <p>
                I build exceptional digital experiences that combine stunning
                design with cutting-edge technology
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="group bg-blue-500 text-white hover:bg-transparent h-12 w-48"
                  >
                  <Link to="/about">
                    View Profile{" "}
                    <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <a 
                href="https://github.com/Tida007"
                target="_blank"
                rel="noopener noreferrer">
                <Github/>
                </a>
                <Twitter />
                <Linkedin />
                <Mails />
              </div>
            </motion.div>
          </div>
        </div>
        <div
          className={`${Homecss.home_image} flex-1 w-96 lg:w-1/2 flex justify-end items-center mt-8 lg:mt-0`}
        >
          <div className="relative flex items-center justify-center w-[400px] h-[400px]">
            {/* Decorative elements */}
            <span
              className="absolute top-[45%] left-[-5%] h-[50px] w-[50px] rounded-full animate-spin"
              style={{ animationDuration: "6s var(--primary-color)" }}
            ></span>
            <span
              className="absolute top-[45%] right-[-5%] h-[50px] w-[50px] rounded-full animate-spin"
              style={{ animationDuration: "6s var(--primary-color)" }}
            ></span>
            <img
              src={Drop}
              alt="profile image"
              className="max-w-80 w-full h-auto rounded-full animate-spin"
              style={{ border: "2px solid var(--primary-color)", animationDuration: "20s" }}
            />
            <span
              className="inline-block w-[400px] h-[400px] rounded-full absolute"
              style={{ border: "3px solid #fdc44830" }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
