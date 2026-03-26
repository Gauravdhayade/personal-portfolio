import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FiAward } from "react-icons/fi";

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-slate-900 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold mb-20 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Certifications & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {(resumeData.certifications || []).length > 0 ? (
            (resumeData.certifications || []).map((cert, index) => (
              <motion.a
                key={cert.title || index}
                href={cert.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group block p-10 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl border-2 border-white/50 dark:border-slate-700 shadow-2xl hover:shadow-3xl hover:border-purple-200 dark:hover:border-purple-800/50 transition-all duration-500 overflow-hidden relative"
              >
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-105"></div>
                
                <div className="relative z-10 flex items-start space-x-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <FiAward className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400">
                      {cert.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                      {cert.org}
                    </p>
                    
                    <button className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <FiAward className="w-4 h-4" />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </div>
              </motion.a>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-full text-center py-16"
            >
              <FiAward className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Coming Soon</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">Certifications and achievements will be updated soon!</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

