import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiGlobe } from "react-icons/fi";

const Hero = () => {
  const personalData = resumeData?.personal || {};
  const { name = '', role = '', tagline = '', resumePdf = '#', image: initialImage = '/assets/profile.jpg' } = personalData;
  const [imgSrc, setImgSrc] = useState(initialImage);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900">
      
      {/* Profile Image */}
      <motion.div
        variants={itemVariants}
        className="w-44 h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50 dark:border-slate-800/50 mb-8 ring-4 ring-blue-200/50 dark:ring-blue-500/20"
      >
        <motion.img
          src={imgSrc}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setImgSrc('/assets/profile.jpg')}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-4 tracking-tight"
      >
        {name}
      </motion.h1>

      {/* Role & Tagline */}
      <motion.div variants={itemVariants} className="space-y-3 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
          {role}
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {tagline}
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap gap-4 justify-center items-center max-w-2xl mx-auto"
      >
        <a
          href={resumePdf}
          target="_blank"
          rel="noreferrer"
          className="btn-primary px-8 py-4 text-lg font-semibold shadow-xl"
        >
          Download Resume
        </a>
        <div className="flex gap-3 p-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur rounded-2xl border border-white/50 shadow-lg">
          <a href={`mailto:${resumeData.personal.email}`} title="Email" className="p-3 hover:bg-blue-500/20 rounded-xl transition-all group">
            <FiMail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors" />
          </a>
          <a href={`tel:${resumeData.personal.phone}`} title="Call" className="p-3 hover:bg-green-500/20 rounded-xl transition-all group">
            <FiPhone className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-green-500 transition-colors" />
          </a>
          <a href={resumeData.personal.github} target="_blank" title="GitHub" className="p-3 hover:bg-gray-800 rounded-xl transition-all group">
            <FiGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors" />
          </a>
          <a href={resumeData.personal.linkedin} target="_blank" title="LinkedIn" className="p-3 hover:bg-blue-500/20 rounded-xl transition-all group">
            <FiLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors" />
          </a>
          <a href={resumeData.personal.portfolio} target="_blank" title="Portfolio" className="p-3 hover:bg-indigo-500/20 rounded-xl transition-all group">
            <FiGlobe className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 transition-colors" />
          </a>
        </div>
        <a
          href="#contact"
          className="btn-outline px-8 py-4 text-lg font-semibold"
        >
          Get In Touch
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-8 text-gray-400 dark:text-gray-500"
      >
        <svg width="24" height="24" fill="currentColor">
          <path d="M7 14l5-5 5 5"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
