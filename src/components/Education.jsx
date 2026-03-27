import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-24 lg:py-32 bg-gradient-to-b from-slate-950/30 via-transparent to-neutral-900/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-hero font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400/70 bg-clip-text text-transparent text-center mb-24 lg:mb-32"
        >
          Education Journey
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-12 lg:space-y-20">
          {(resumeData.education || []).map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              {/* Timeline connector */}
              {index < (resumeData.education?.length || 0) - 1 && (
                <div className="absolute left-12 top-full h-20 w-px bg-gradient-to-b from-blue-400 to-indigo-400 opacity-20 lg:block hidden"></div>
              )}

              <div className="flex items-start lg:ml-20">
                {/* Timeline dot */}
                <motion.div 
                  className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl shadow-lg ring-8 ring-neutral-950/50 z-20 flex-shrink-0 mt-4 lg:mt-6 flex lg:block hidden"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                >
                  <FaGraduationCap className="w-4 h-4 mx-auto text-white mt-1" />
                </motion.div>

                {/* Card */}
                <div className="flex-1 glass p-10 lg:p-12 rounded-3xl shadow-2xl ml-0 lg:ml-8 group-hover:shadow-blue/30 hover:-translate-y-4 transition-all duration-700 backdrop-blur-xl border border-white/10 hover:border-blue-400/50 relative overflow-hidden">
                  {/* Glow background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>

                  <div className="relative z-10 lg:flex lg:items-center lg:gap-8">
                    {/* Icon */}
                    <div className="hidden lg:block flex-shrink-0">
                      <div className="w-28 h-28 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl p-6 flex items-center justify-center border-4 border-white/20 backdrop-blur group-hover:scale-110 transition-all duration-700">
                        <FaUniversity className="w-14 h-14 text-blue-300 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-4 mb-6">
                        <h3 className="text-3xl lg:text-4xl font-black text-white group-hover:text-blue-400 transition-colors">
                          {edu.degree}
                        </h3>
                        <span className="text-xl text-neutral-400 font-semibold bg-white/10 px-4 py-2 rounded-2xl backdrop-blur">
                          {edu.years}
                        </span>
                      </div>

                      <h4 className="text-2xl font-bold text-primary/90 mb-8 group-hover:text-white/95 transition-colors">
                        {edu.institution}
                      </h4>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-neutral-400 font-medium">Performance</span>
                            <span className="font-bold text-white">{edu.cgpa || 'Outstanding'}</span>
                          </div>
                          <div className="w-full bg-neutral-800/50 rounded-2xl h-3 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 w-full rounded-xl shadow-glow"></div>
                          </div>
                        </div>
                        <div>
                          <p className="text-lg text-neutral-300 leading-relaxed">
                            
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Mobile icon */}
                    <div className="lg:hidden w-20 h-20 ml-auto">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-2xl flex items-center justify-center border-2 border-white/30">
                        <FaUniversity className="w-10 h-10 text-blue-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {(!resumeData.education || resumeData.education.length === 0) && (
          <motion.div
            className="text-center py-32 max-w-2xl mx-auto glass p-16 rounded-3xl border-neutral-700/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <FaUniversity className="w-28 h-28 text-neutral-600 mx-auto mb-12" />
            <h3 className="text-4xl font-black text-white mb-6">Educational Background</h3>
            <p className="text-2xl text-neutral-500 mb-8">Details coming soon. Engineering foundation established!</p>
            <div className="flex gap-4 justify-center">
              <a href="#skills" className="btn-primary px-8 py-4">Skills</a>
              <a href="#experience" className="btn-secondary px-8 py-4 border-neutral-600 hover:border-primary">Experience</a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Education;

