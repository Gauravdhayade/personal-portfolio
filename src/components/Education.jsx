import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-28 bg-gradient-to-b from-slate-950/30 via-transparent to-neutral-900/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-hero font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400/70 bg-clip-text text-transparent text-center mb-24 lg:mb-32"
        >
          Education Journey
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-16 lg:space-y-24">
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
                <div className="absolute left-10 top-full h-24 w-0.5 bg-gradient-to-b from-blue-400/40 to-purple-400/40 opacity-30 lg:block hidden"></div>
              )}

              <div className="flex items-start lg:ml-14">
                {/* Timeline dot */}
                <motion.div 
                  className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-400/80 to-purple-500/80 rounded-xl shadow-md ring-4 ring-neutral-900/70 z-20 flex-shrink-0 mt-3 lg:mt-5 flex lg:block hidden"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                >
                  <FaGraduationCap className="w-3.5 h-3.5 mx-auto text-white mt-[0.125rem] lg:mt-1" />
                </motion.div>

                {/* Card */}
                <div className="flex-1 glass p-6 sm:p-7 lg:p-9 rounded-2xl shadow-xl ml-0 lg:ml-6 shadow-neutral-900/50 hover:shadow-2xl hover:shadow-purple-500/20 ring-0 hover:ring-2 hover:ring-purple-400/50 ring-offset-2 ring-offset-neutral-950/80 group-hover:shadow-purple/20 hover:-translate-y-3 transition-all duration-500 ease-out backdrop-blur-2xl border border-white/20 hover:border-purple-400/50 relative overflow-hidden bg-gradient-to-br from-neutral-900/40 to-neutral-950/40 hover:from-white/10 hover:to-purple-500/5">
                  {/* Glow background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-700 -z-10"></div>

                  <div className="relative z-10 flex flex-col lg:flex lg:items-center lg:gap-6">
                    {/* Icon */}
                    <div className="hidden lg:block flex-shrink-0">
                      <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-purple-500/25 to-blue-500/25 rounded-2xl p-5 flex items-center justify-center border border-white/25 backdrop-blur-sm group-hover:scale-110 transition-all duration-500 shadow-lg">
                        <FaUniversity className="w-12 h-12 lg:w-14 lg:h-14 text-purple-200 group-hover:text-white transition-all duration-500" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <h3 className="text-3xl lg:text-4xl font-black text-white group-hover:text-purple-300 transition-all duration-500">
                          {edu.degree}
                        </h3>
                        <span className="text-lg lg:text-xl font-semibold bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 border border-purple-400/40 px-4 py-2 rounded-xl backdrop-blur-sm shadow-sm">
                          {edu.years}
                        </span>
                      </div>

                      <h4 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-300 via-blue-300 to-purple-400/80 bg-clip-text text-transparent mb-8 drop-shadow-sm group-hover:from-purple-200 hover:from-blue-400/90 transition-all duration-500">
                        {edu.institution}
                      </h4>

                      <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-neutral-300 font-semibold">Performance</span>
                            <span className="font-bold text-white text-lg">{edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}%`}</span>
                          </div>
                          <div className="w-full bg-neutral-800/60 rounded-full h-2.5 overflow-hidden shadow-inner">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 rounded-full shadow-glow transition-all duration-3000 origin-left ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                              style={{ width: `${(edu.cgpa ? (edu.cgpa * 10 - 1) : edu.percentage).toFixed(1)}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <p className="text-lg text-neutral-400 leading-relaxed min-h-[1.25rem]"></p>
                        </div>
                      </div>
                    </div>

                    {/* Mobile icon */}
                    <div className="lg:hidden w-16 h-16 ml-auto">
                      <div className="w-full h-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-xl flex items-center justify-center border-2 border-white/30 backdrop-blur-sm shadow-md">
                        <FaUniversity className="w-9 h-9 text-purple-200" />
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

