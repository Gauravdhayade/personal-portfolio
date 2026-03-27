import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaCode, FaJava, FaDatabase, FaTools, FaStar } from 'react-icons/fa';
import { SiSpring, SiPython, SiReact, SiMysql, SiJavascript, SiGit, SiPostman, SiSwagger, SiHibernate, SiFastapi } from 'react-icons/si';

const iconMap = {
  Java: FaJava,
  Python: SiPython,
  FastAPI: SiFastapi,
  'Spring Boot': SiSpring,
  'Spring MVC': SiSpring,
  'Spring Security': SiSpring,
  'React.js': SiReact,
  'React Hooks': SiReact,
  MySQL: SiMysql,
  'SQL Queries': SiMysql,
  Indexing: SiMysql,
  'Query Optimization': SiMysql,
  'REST APIs': SiJavascript,
  JPA: SiHibernate,
  Hibernate: SiHibernate,
  'JWT Authentication': FaCode,
  JWT: FaCode,
  Maven: FaCode,
  HTML5: SiJavascript,
  CSS3: SiJavascript,
  JavaScript: SiJavascript,
  Git: SiGit,
  GitHub: SiGit,
  Postman: SiPostman,
  Swagger: SiSwagger,
  'VS Code': FaCode,
  default: FaCode
};

const categoryIcons = {
  Backend: FaJava,
  Frontend: SiReact,
  Database: FaDatabase,
  Tools: FaTools
};

// Get proficiency label based on level
const getProficiencyLabel = (level) => {
  if (level >= 85) return 'Advanced';
  if (level >= 75) return 'Intermediate';
  return 'Beginner';
};

// Get proficiency label color
const getProficiencyColor = (level) => {
  if (level >= 85) return 'text-emerald-400';
  if (level >= 75) return 'text-orange-400';
  return 'text-blue-400';
};

const SkillCard = ({ skill, index, categoryIndex }) => {
  const Icon = iconMap[skill.name] || iconMap.default;
  const isPrimary = skill.isPrimaryStack;
  const proficiencyLabel = getProficiencyLabel(skill.level);
  const proficiencyColor = getProficiencyColor(skill.level);
  
  return (
    <motion.div
      key={skill.name}
      className={`group relative p-6 lg:p-8 glass rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-3 backdrop-blur-xl ${
        isPrimary
          ? 'border-2 border-primary/60 hover:border-primary hover:shadow-primary/50 bg-gradient-to-br from-primary/10 to-transparent'
          : 'border border-white/10 hover:border-primary/50 hover:shadow-primary/30'
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (categoryIndex * 0.1) + (index * 0.05), type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-1 ${
        isPrimary ? 'bg-gradient-to-br from-primary/30 via-primary/10 to-transparent' : 'bg-gradient-to-br from-primary/20 to-transparent'
      }`}></div>
      
      {/* Primary Stack Badge */}
      {isPrimary && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-br from-primary to-orange-500 rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <FaStar className="w-4 h-4 text-white" />
        </div>
      )}
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Container */}
        <div className="mb-4">
          <div className={`w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center p-3 rounded-xl backdrop-blur-xl border transition-all duration-500 group-hover:scale-110 ${
            isPrimary
              ? 'bg-primary/20 border-primary/50 group-hover:bg-primary/30'
              : 'bg-white/10 border-white/20 group-hover:bg-primary/20'
          }`}>
            <Icon className={`w-7 h-7 lg:w-8 lg:h-8 transition-all duration-500 ${
              isPrimary ? 'text-primary group-hover:text-orange-300' : 'text-white group-hover:text-primary'
            }`} />
          </div>
        </div>
        
        {/* Skill Name */}
        <h4 className={`text-sm lg:text-base font-bold capitalize mb-2 group-hover:text-primary transition-colors line-clamp-2 ${
          isPrimary ? 'text-primary' : 'text-white'
        }`}>
          {skill.name}
        </h4>
        
        {/* Proficiency Tag */}
        <div className={`inline-block mb-3 px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${proficiencyColor} ${
          proficiencyLabel === 'Advanced' ? 'bg-emerald-500/20 border-emerald-500/40' :
          proficiencyLabel === 'Intermediate' ? 'bg-orange-500/20 border-orange-500/40' :
          'bg-blue-500/20 border-blue-500/40'
        }`}>
          {proficiencyLabel}
        </div>
        
        {/* Proficiency Level Display */}
        <div className="flex items-center justify-between mb-2 mt-auto">
          <span className="text-xs text-neutral-400 font-medium">Proficiency</span>
          <span className={`text-xs font-bold group-hover:text-primary/80 transition-colors ${
            isPrimary ? 'text-primary' : 'text-primary'
          }`}>{skill.level}%</span>
        </div>
        
        {/* Progress Bar */}
        <div
          className="w-full h-2 bg-neutral-800/80 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={skill.level}
          aria-label={`${skill.name} proficiency`}
        >
          <motion.div
            className={`h-full rounded-full shadow-glow ${
              isPrimary
                ? 'bg-gradient-to-r from-primary via-orange-400 to-orange-500'
                : 'bg-gradient-to-r from-primary via-orange-400 to-orange-500'
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillsData = resumeData.skillsData || {};
  const categoryOrder = ['Backend', 'Frontend', 'Database', 'Tools'];

  return (
    <section id="skills" className="py-24 lg:py-32 bg-gradient-to-b from-transparent via-neutral-950/50 to-transparent relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.h2
          className="text-hero font-black bg-gradient-to-r from-primary via-white to-primary/70 bg-clip-text text-transparent mb-20 lg:mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        {/* Skills by Category */}
        <div className="space-y-16 lg:space-y-20">
          {categoryOrder.map((category, categoryIndex) => {
            const CategoryIcon = categoryIcons[category] || categoryIcons.Backend;
            const categorySkills = skillsData[category] || [];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8 lg:mb-10">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/50 group">
                    <CategoryIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white capitalize">
                      {category}
                    </h3>
                    <div className="h-1 w-16 mt-2 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                  {categorySkills.map((skill, index) => (
                    <SkillCard 
                      key={skill.name} 
                      skill={skill} 
                      index={index} 
                      categoryIndex={categoryIndex}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fallback for flat skills list (backward compatibility) */}
        {(!skillsData || Object.keys(skillsData).length === 0) && (resumeData.skills || []).length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
            {(resumeData.skills || []).map((skill, index) => {
              const Icon = iconMap[skill] || iconMap.default;
              return (
                <motion.div
                  key={skill}
                  className="group relative p-8 glass rounded-3xl h-full shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:bg-white/10 border-primary/30"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  <div className="relative z-10 flex flex-col items-center space-y-4 h-full justify-center">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center p-4 rounded-2xl bg-white/10 group-hover:bg-primary/20 backdrop-blur-xl border border-white/20 transition-all duration-500 group-hover:scale-110">
                      <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-white group-hover:text-primary transition-all duration-500" />
                    </div>
                    <h4 className="text-lg lg:text-xl font-bold text-white text-center capitalize tracking-wide group-hover:text-primary transition-colors">
                      {skill.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h4>
                    <div className="w-20 h-2 bg-neutral-800 rounded-full overflow-hidden group-hover:bg-primary/30 transition-colors">
                      <div className="h-full bg-gradient-to-r from-primary to-white/50 w-4/5 rounded-full shadow-glow"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
