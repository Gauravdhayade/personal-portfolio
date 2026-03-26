import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaCode, FaJava } from 'react-icons/fa';
import { SiSpring, SiPython, SiReact, SiMysql, SiJavascript } from 'react-icons/si';

const iconMap = {
  Java: FaJava,
  Python: SiPython,
  'Spring Boot': SiSpring,
  'React.js': SiReact,
  MySQL: SiMysql,
  'REST APIs': SiJavascript,
  default: FaCode
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-center text-4xl font-bold mb-16 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {(resumeData.skills || []).map((skill, index) => {
            const Icon = iconMap[skill] || iconMap.default;
            return (
              <motion.div
                key={skill}
                className="group p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur rounded-xl border border-white/50 dark:border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-14 h-14 flex items-center justify-center p-3 rounded-xl bg-blue-100 dark:bg-blue-900/50">
                    <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">
                    {skill}
                  </h4>
                  <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className="h-full bg-blue-500 rounded-full w-4/5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
