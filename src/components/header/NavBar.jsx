"use Client";
// This file is a client component because it uses hooks like useState and useEffect.

import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Menu, X, Rotate3D } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

const cn = (...args) => twMerge(...args);


function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "#experience"},
    { name: "Skills", path: "/skills" },
    { name: "connect", path: "/connect" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
 

    return (
        <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-zinc-900 text-black dark:text-white",
          isScrolled
          ? "bg-background/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent dark:bg-transparent py-4",
        )}
        >
          <div className="container px-4 sm:px-6 flex items-center justify-between">
            <Link
            href="#home"
            >
              <Rotate3D size={38}/>
            </Link>

            {/* Desktop Navigation */}
            <header className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                key={item.name}
                to={item.path}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:dark:bg-zinc-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <ThemeToggle /> 
            </header>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <Button 
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-background/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-lg">
              <div className="container py-4 flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link 
                  key={item.name}
                  to={item.path}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:dark:bg-zinc-800 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}        
        </nav>
    );
}

export default NavBar;