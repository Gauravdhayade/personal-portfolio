import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-gradient-to-b from-neutral-950/50 to-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-hero font-black bg-gradient-to-r from-emerald-400 via-white to-emerald-400/70 bg-clip-text text-transparent text-center mb-24 lg:mb-32"
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {(resumeData.experience || []).map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group mb-20 lg:mb-32 relative"
            >
              {/* Timeline dot and line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-12 top-24 lg:top-0 w-px h-full bg-gradient-to-b from-emerald-400 to-primary opacity-20 hidden lg:block"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-primary rounded-2xl shadow-lg ring-8 ring-neutral-950/50 z-20 hidden lg:block"></div>

              {/* Card */}
              <div className="lg:ml-24 p-10 lg:p-12 glass rounded-3xl shadow-2xl hover:shadow-primary/30 hover:-translate-y-4 transition-all duration-700 border border-white/10 group-hover:border-primary/30 backdrop-blur-xl relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 mb-8">
                    <div className="p-5 bg-gradient-to-br from-emerald-500/20 to-primary/20 rounded-3xl backdrop-blur border border-emerald-500/30 flex-shrink-0 group-hover:scale-110 transition-all duration-500">
                      <FaBriefcase className="w-10 h-10 text-emerald-400 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-2">
                        <h3 className="text-3xl lg:text-4xl font-black text-white group-hover:text-emerald-400 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 text-lg text-neutral-400">
                          <FaMapMarkerAlt className="w-5 h-5" />
                          <span>{job.company}</span>
                        </div>
                      </div>
                      <div className="text-xl font-semibold text-neutral-300 mb-8">{job.period}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {(job.bullets || []).map((bullet, bulletIndex) => (
                      <motion.div
                        key={bulletIndex}
                        className="flex items-start space-x-4 p-6 glass-hover rounded-2xl group-hover/card:bg-white/10 border border-white/10 hover:border-primary/40 transition-all"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: bulletIndex * 0.1 }}
                      >
                        <div className="w-3 h-3 mt-2 bg-gradient-to-r from-emerald-400 to-primary rounded-full flex-shrink-0 mt-1.5"></div>
                        <span className="text-lg text-neutral-200 leading-relaxed">{bullet}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile timeline dot */}
              <div className="flex justify-center mb-8 lg:hidden">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-primary rounded-2xl shadow-lg ring-8 ring-neutral-950/50 flex items-center justify-center"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {(!resumeData.experience || resumeData.experience.length === 0) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center py-24 glass p-16 rounded-3xl max-w-2xl mx-auto border border-neutral-700/50"
          >
            <FaBriefcase className="w-24 h-24 text-neutral-600 mx-auto mb-12" />
            <h3 className="text-3xl font-bold text-white mb-6">Experience</h3>
            <p className="text-xl text-neutral-500">Professional experience details coming soon. Currently building skills at Shekru Labs!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;

