import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-zinc-900 text-gray-300 pt-12 pb-6 mt-16 border-t border-zinc-800">
    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row md:justify-between gap-12">
      {/* Left: Brand & Social */}
      <div>
        <h2 className="text-xl font-bold text-fuchsia-500 mb-2">Walter Francis</h2>
        <p className="mb-4 text-sm text-gray-400 max-w-xs">
          Building exceptional digital experiences with cutting-edge technologies. Let's create something amazing together.
        </p>
        <div className="flex gap-4 text-xl mt-2">
          <a href="https://github.com/Tida007" target="_blank" rel="noopener noreferrer" className="hover:text-white font-extrabold duration-300"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/walter-francis-a24333365/" target="_blank" rel="noopener noreferrer" className="hover:text-white font-extrabold duration-300"><FaLinkedin /></a>
          <a href="mailto:tonytidatmg@gmail.com" className="hover:text-white font-extrabold duration-300"><FaEnvelope /></a>
        </div>
      </div>
      {/* Center: Quick Links */}
      <div>
        <h3 className="font-semibold mb-2">Quick Links</h3>
        <ul className="space-y-1 text-sm">
          <li><a href="#home" className=" hover:font-bold hover:text-white duration-300">Home</a></li>
          <li><a href="#about" className=" hover:font-bold hover:text-white duration-300">About</a></li>
          <li><a href="#experience" className=" hover:font-bold hover:text-white duration-300">Experience</a></li>
          <li><a href="#skills" className=" hover:font-bold hover:text-white duration-300">Skills</a></li>
          <li><a href="#testimonials" className=" hover:font-bold hover:text-white duration-300">Testimonials</a></li>
          <li><a href="#projects" className=" hover:font-bold hover:text-white duration-300">Projects</a></li>
          <li><a href="#contact" className=" hover:font-bold hover:text-white duration-300">Contact</a></li>
        </ul>
      </div>
      {/* Right: Services */}
      <div>
        <h3 className="font-semibold mb-2">Services</h3>
        <ul className="space-y-1 text-sm">
          <li className=" hover:font-bold hover:text-white duration-300">Web Development</li>
          <li className=" hover:font-bold hover:text-white duration-300">Debugging & Troubleshooting</li>
          <li className=" hover:font-bold hover:text-white duration-300">API Development & Integration</li>
          <li className=" hover:font-bold hover:text-white duration-300">UI/UX Implementation</li>
          <li className=" hover:font-bold hover:text-white duration-300">Technical Consulting</li>
        </ul>
      </div>
    </div>
    <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs text-gray-500">
      © 2025 Walter Francis. All rights reserved.
    </div>
  </footer>
);

export default Footer;