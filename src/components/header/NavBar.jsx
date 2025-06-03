import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DiAndroid } from "react-icons/di";
import iconMoon from "/images/icon-moon.svg";
import iconSun from "/images/icon-sun.svg";

function NavBar() {

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
            <div className="flex items-center space-x-4">
                {/* Logo Section*/}
                <DiAndroid className="text-4xl text-violet-200" />
                <h1 className="text-shadow-violet-200 font-black">Tida</h1>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-4">
                <Link to="/" className="hover:text-blue-500">Home</Link>
                <Link to="/about" className="hover:text-blue-500">About</Link>
                <Link to="/contact" className="hover:text-blue-500">Contact</Link>
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