import React from "react";
import { resumeData } from "../data/resumeData";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();
  const { github, linkedin } = resumeData.personal;

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Gaurav Dhayade
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
              Building scalable backend systems with Java, Spring Boot, and MySQL. Always learning and growing.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
            <div className="flex flex-col space-y-3 text-gray-400">
              <a href={github} className="flex items-center space-x-3 hover:text-emerald-400 transition-colors duration-300 group">
                <FiGithub className="w-5 h-5 group-hover:-translate-y-0.5" />
                <span>GitHub</span>
              </a>
              <a href={linkedin} className="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-300 group">
                <FiLinkedin className="w-5 h-5 group-hover:-translate-y-0.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Portfolio 2026</h4>
            <div className="text-sm space-y-1 text-gray-400">
              <p>© {year} Gaurav Dhayade. All rights reserved.</p>
              <p>Made with React 19 + Tailwind + Framer Motion</p>
              <p className="text-xs opacity-75">Ready for backend API integration</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          Designed & Developed with ❤️ for the future of web development.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
