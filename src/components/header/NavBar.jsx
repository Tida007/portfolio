import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import iconMoon from "/images/icon-moon.svg";
import iconSun from "/images/icon-sun.svg";
import { AlignRight, Rotate3D } from "lucide-react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import Navcss from "./NavBar.module.css";

function NavBar() {

    const menu = useRef();

    const menuHandler = () => {
        menu.current.classList.toggle(Navcss.showMenu);
    }

    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        console.log("Stored theme:", storedTheme);
        if (storedTheme) {
            setTheme(storedTheme);
            if (storedTheme === 'DARK') {
                document.documentElement.classList.add("dark");
                console.log("Dark mode activated");
            } else {
                document.documentElement.classList.remove("dark");
                console.log("Light mode activated");
            }
        }
    }, []);

    const toggleTheme = () => {
        console.log("Toggling theme. Current theme:", theme);
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
            document.body.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.body.classList.remove("dark");
        }
    };

    return (
        <nav className="flex place-items-end justify-between px-6 py-4  text-white">
           <div className={Navcss.logo}>
            <Rotate3D size={40}/>
           </div>

            {/* Navigation Links */}
          <ul ref={menu} className={`${Navcss.menu}`}>
            <li className=" hover:font-extrabold hover:text-white duration-300">
                <Link to="/">Home</Link>
            </li>
            <li className=" hover:font-extrabold hover:text-white duration-300">
                <Link to="/about">About</Link>
            </li>
            <li className=" hover:font-extrabold hover:text-white duration-300">
                <Link to="/projects">Projects</Link>
            </li>
          </ul>

          { /* Social Media Icons */}
          <div className={Navcss.navBtns}>
        <div className={'Navcss.social flex gap-2'}>
          <a
            href="https://github.com/Tida007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-transparent"
          >
            <FaGithub size={28} className={'Navcss.icon rounded-full text-amber-300'} />
          </a>

          <a
            href="https://www.linkedin.com/in/walter-francis-a24333365/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} className={'Navcss.icon rounded-full text-amber-300'} />
          </a>

          <a
            href="https://discord.com/chanels/@me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord size={28} className={'Navcss.icon rounded-full text-amber-300'} />
          </a>
        </div>

        <div className={Navcss.bars} onClick={menuHandler}>
          {/* Hamburger Menu Icon */}
            <AlignRight size={30} className="text-amber-300" />
        </div>
      </div>

            <div>
                <button
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-600 cursor-pointer"
                    onClick={toggleTheme}
                >
                    <img
                        src={theme === "dark" ? iconSun : iconMoon}
                        alt={theme === "dark" ? "Light Mode" : "Dark Mode"}
                        className="w-6 h-6"
                    />
                </button>
            </div>
        </nav>
    );
}

export default NavBar;