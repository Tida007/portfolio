import React, { useState, useEffect } from 'react'
import iconSun from "/images/icon-sun.svg";
import iconMoon from "/images/icon-moon.svg";

export default function ThemeToggle() {

       const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        console.log("Stored theme:", storedTheme);
        if (storedTheme) {
            setTheme(storedTheme);
            if (storedTheme === 'dark') {
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
        } else {
            document.documentElement.classList.remove("dark");
        }
    };
  return (
                <div>
                <button
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-600 dark:hover:bg-gray-500 cursor-pointer"
                    onClick={toggleTheme}
                >
                    <img
                        src={theme === "dark" ? iconSun : iconMoon}
                        alt={theme === "dark" ? "Light Mode" : "Dark Mode"}
                        className="w-6 h-6"
                    />
                </button>
            </div>
  )
}
