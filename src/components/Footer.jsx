import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();
  const { github, linkedin, email } = resumeData.personal;

  return (
    <footer className="relative overflow-hidden pt-24 lg:pt-32 pb-12 lg:pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black/80 to-black pointer-events-none"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-400/5 via-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 text-center lg:text-left">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.h3 
              className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-neutral-100 to-primary/80 bg-clip-text text-transparent mb-6 lg:mb-8 drop-shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              Gaurav Dhayade
            </motion.h3>
            <p className="text-xl lg:text-2xl text-neutral-400 leading-relaxed max-w-md mx-auto lg:mx-0 mb-10 lg:mb-0">
              Software Engineer crafting scalable backend systems with Java Spring Boot and modern web tech.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            <h4 className="text-2xl font-bold text-white mb-8">Quick Links</h4>
            <div className="grid md:grid-cols-2 gap-6 text-lg">
              <a href="#hero" className="group flex items-center gap-3 p-4 hover:bg-white/10 rounded-2xl backdrop-blur transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:text-primary text-neutral-300">
                <span className="w-2 h-2 bg-neutral-400 group-hover:bg-primary rounded-full transition-colors"></span>
                Home
              </a>
              <a href="#projects" className="group flex items-center gap-3 p-4 hover:bg-white/10 rounded-2xl backdrop-blur transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:text-primary text-neutral-300">
                <span className="w-2 h-2 bg-neutral-400 group-hover:bg-primary rounded-full transition-colors"></span>
                Projects
              </a>
              <a href="#skills" className="group flex items-center gap-3 p-4 hover:bg-white/10 rounded-2xl backdrop-blur transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:text-primary text-neutral-300">
                <span className="w-2 h-2 bg-neutral-400 group-hover:bg-primary rounded-full transition-colors"></span>
                Skills
              </a>
              <a href="#contact" className="group flex items-center gap-3 p-4 hover:bg-white/10 rounded-2xl backdrop-blur transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:text-primary text-neutral-300">
                <span className="w-2 h-2 bg-neutral-400 group-hover:bg-primary rounded-full transition-colors"></span>
                Contact
              </a>
            </div>
          </motion.div>

          {/* Social & Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:space-y-10"
          >
            <div>
              <h4 className="text-2xl font-bold text-white mb-8">Connect With Me</h4>
              <div className="flex flex-wrap gap-6 lg:gap-8 justify-center lg:justify-start">
                <a href={github} target="_blank" rel="noopener noreferrer" className="group w-16 h-16 lg:w-20 lg:h-20 bg-neutral-900/50 hover:bg-neutral-800/80 rounded-2xl flex items-center justify-center backdrop-blur border border-neutral-700/50 shadow-xl hover:shadow-2xl hover:scale-110 hover:-translate-y-3 transition-all duration-500 hover:border-neutral-600">
                  <FiGithub className="w-7 h-7 lg:w-8 lg:h-8 text-neutral-300 group-hover:text-white" />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="group w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600/30 to-blue-700/30 hover:from-blue-500/50 hover:to-blue-600/50 rounded-2xl flex items-center justify-center backdrop-blur border border-blue-500/50 hover:border-blue-400/70 shadow-xl hover:shadow-blue/30 hover:scale-110 hover:-translate-y-3 transition-all duration-500">
                  <FiLinkedin className="w-7 h-7 lg:w-8 lg:h-8 text-blue-200 group-hover:text-white" />
                </a>
                <a href={`mailto:${email}`} className="group w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500/30 to-primary/30 hover:from-emerald-400/50 hover:to-primary/50 rounded-2xl flex items-center justify-center backdrop-blur border border-emerald-500/50 hover:border-emerald-400/70 shadow-xl hover:shadow-emerald/30 hover:scale-110 hover:-translate-y-3 transition-all duration-500">
                  <FiMail className="w-7 h-7 lg:w-8 lg:h-8 text-emerald-300 group-hover:text-white" />
                </a>
              </div>
            </div>

            <div className="glass p-6 lg:p-8 rounded-2xl border border-white/10 text-center lg:text-left">
              <p className="text-lg text-neutral-400 mb-4">
                © {year} Gaurav Dhayade. All rights reserved.
              </p>
              <p className="text-sm text-neutral-500">
                Crafted with <span className="text-primary font-bold">React</span> • <span className="text-emerald-400 font-bold">Tailwind</span> • <span className="text-blue-400 font-bold">Framer Motion</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom border */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-24 lg:mt-32 max-w-4xl mx-auto"></div>
      </div>
    </footer>
  );
};

export default Footer;

