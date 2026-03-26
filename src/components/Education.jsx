import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-gradient-to-b from-indigo-50 to-blue-50 dark:from-slate-900 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold mb-20 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {(resumeData.education || []).length > 0 ? (
            (resumeData.education || []).map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-white/60 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 -skew-x-6 -rotate-1 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Degree Badge */}
                  <div className="inline-flex items-center px-4 py-2 mb-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-2xl text-sm shadow-lg">
                    Degree
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    {edu.degree}
                  </h3>

                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-6">
                    {edu.years}
                  </p>

                  {/* Progress Bar for visual */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-500">
                      <span>Academic Performance</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 h-2 rounded-full w-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="col-span-full md:col-span-3 text-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Education Details</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">Education information coming soon!</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;

