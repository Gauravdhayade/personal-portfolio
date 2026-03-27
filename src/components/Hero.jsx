import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import profile from "../assets/profile.png";
import { resumeData } from "../data/resumeData";
import { useTheme } from "../context/ThemeContext";
import { FiPhone, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const Hero = () => {
  const [imgSrc, setImgSrc] = useState(profile);
  const controls = useAnimation();
  const { darkMode } = useTheme();

  const personalData = resumeData?.personal || {};
  const {
    name = '',
    role = '',
    resumePdf = '#',
    phone = '',
    email = '',
    github = '',
    linkedin = '',
    image: initialImage = '/assets/profile.jpg'
  } = personalData;

  const handleImageError = () => setImgSrc('/assets/default.png');

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Contact information with icons
  const formattedPhone = phone ? phone.replace(/^\+91\s*/, '+91 ') : '';

  const contactInfo = [
    {
      icon: FiPhone,
      text: formattedPhone,
      link: phone ? `tel:${phone}` : '#',
      label: 'Phone',
      displayText: formattedPhone || 'Not available'
    },
    {
      icon: FiMail,
      text: email,
      link: `mailto:${email}`,
      label: 'Email',
      displayText: email
    },
    {
      icon: FiLinkedin,
      text: 'LinkedIn',
      link: linkedin,
      label: 'LinkedIn',
      external: true,
      displayText: 'LinkedIn Profile'
    },
    {
      icon: FiGithub,
      text: 'GitHub',
      link: github,
      label: 'GitHub',
      external: true,
      displayText: 'GitHub Profile'
    }
  ];

  return (
    <section id="hero" className={`min-h-screen pt-24 flex items-center px-4 sm:px-6 md:px-12 relative overflow-hidden transition-colors duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]' 
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      {/* Background glowing shapes */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
          darkMode ? 'bg-orange-500/10' : 'bg-orange-300/5'
        }`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
          darkMode ? 'bg-red-500/10' : 'bg-red-300/5'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl ${
          darkMode ? 'bg-orange-400/5' : 'bg-orange-300/3'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Side - Content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-4">
              <p className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                darkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                Hello<span className="text-orange-500">.</span>
              </p>
            </motion.div>

            {/* Divider Line */}
            <motion.div
              variants={itemVariants}
              className="w-16 h-1 bg-[#ff4d4d] mx-auto md:mx-0 mb-6"
            ></motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-3 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              I'm {name}
            </motion.h1>

            {/* Role */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ff4d4d] mb-6"
            >
              {role}
            </motion.h2>

            {/* Professional Tagline */}
            <motion.p
              variants={itemVariants}
              className={`text-lg md:text-xl mb-4 leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              Backend-focused Software Engineer specializing in Java (Spring Boot) and Python (FastAPI), building high-performance REST APIs and scalable systems.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-sm md:text-base mb-8 text-neutral-400 transition-colors duration-300 ${
                darkMode ? 'text-neutral-400' : 'text-neutral-500'
              }`}
            >
              Java • Spring Boot • FastAPI • REST APIs • MySQL
            </motion.p>

            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10"
            >
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.external ? "_blank" : "_self"}
                  rel={info.external ? "noopener noreferrer" : ""}
                  className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer no-underline transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 ${
                    darkMode
                      ? 'bg-neutral-800/50 border-neutral-700 hover:border-orange-500 hover:bg-neutral-800/80 text-neutral-200'
                      : 'bg-white/70 border-gray-200 hover:border-orange-400 hover:bg-white text-gray-800'
                  }`}
                  title={info.label}
                  aria-label={`Contact via ${info.label}`}
                >
                  <div className="flex-shrink-0">
                    <info.icon className="w-5 h-5 text-orange-500 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-medium uppercase tracking-wide mb-1 transition-colors duration-300 ${
                      darkMode ? 'text-neutral-400' : 'text-gray-600'
                    }`}>
                      {info.label}
                    </div>
                    <div className={`font-medium truncate group-hover:text-white transition-colors ${
                      darkMode ? 'text-neutral-200' : 'text-gray-900'
                    }`}>
                      {info.displayText || info.text}
                    </div>
                  </div>
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fas fa-external-link-alt text-sm text-orange-500"></i>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start relative z-10"
            >
              <a
                href="#contact"
                className={`inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer no-underline shadow-lg transform hover:scale-105 ${
                  darkMode
                    ? 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-orange-500/50'
                    : 'bg-orange-400 text-white hover:bg-orange-500 hover:shadow-orange-400/50'
                } hover:shadow-xl`}
              >
                <i className="fas fa-envelope mr-2"></i>
                Contact Me
              </a>
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer no-underline hover:shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 ${
                  darkMode
                    ? 'border-2 border-orange-500 text-white hover:bg-orange-500/10'
                    : 'border-2 border-orange-400 text-gray-900 hover:bg-orange-400/10'
                }`}
              >
                <i className="fas fa-file-pdf mr-2"></i>
                My Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative flex justify-center items-center">
              {/* Animated Gradient Border Circle */}
              <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-orange-500 via-orange-400 to-red-500 animate-spin" style={{ animationDuration: '8s' }}></div>
              
              {/* Inner Background Circle */}
              <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#0f172a] to-[#020617]"></div>

              {/* Profile Image Container */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/10 hover:border-orange-500/50 transition-colors duration-500"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={imgSrc}
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Strip */}
        <motion.div
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <div className={`flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base transition-colors duration-300 ${
            darkMode 
              ? 'text-neutral-400 opacity-70' 
              : 'text-gray-600 opacity-80'
          }`}>
            {['Java', 'Spring Boot', 'React.js', 'REST APIs', 'MySQL', 'Git'].map((skill) => (
              <div
                key={skill}
                className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-default hover:border-orange-500 hover:text-orange-500 ${
                  darkMode
                    ? 'border-neutral-600'
                    : 'border-gray-300'
                }`}
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

