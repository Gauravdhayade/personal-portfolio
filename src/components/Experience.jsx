import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold mb-20 bg-gradient-to-r from-gray-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-12">
          {(resumeData.experience || []).map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>
              
              {/* Experience Card */}
              <div className="relative lg:ml-16 p-8 lg:p-12 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-white/50 dark:border-slate-700 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group-hover:bg-white dark:group-hover:bg-slate-700">
                <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
                  {/* Company Logo Placeholder */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">SL</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {job.title}
                      </h3>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {job.period}
                      </span>
                    </div>

                    <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                      {job.company}
                    </h4>

                    <ul className="space-y-4">
                      {(job.bullets || []).map((bullet, bulletIndex) => (
                        <motion.li
                          key={bulletIndex}
                          className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 leading-relaxed"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: bulletIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 mt-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-7.5 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ring-4 ring-white/50 dark:ring-slate-900/50 lg:block hidden"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
