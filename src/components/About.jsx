import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FaGlobe, FaMobile, FaServer } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Left - Icons */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="space-y-8">
              <motion.div 
                className="flex items-center gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <FaGlobe className="text-[#ff4d4d] text-3xl" />
                <div>
                  <h3 className="text-white font-semibold text-lg">Website Development</h3>
                  <p className="text-neutral-400 text-sm">Building responsive and modern web applications</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <FaMobile className="text-[#ff4d4d] text-3xl" />
                <div>
                  <h3 className="text-white font-semibold text-lg">App Development</h3>
                  <p className="text-neutral-400 text-sm">Creating mobile and web applications with modern tech</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <FaServer className="text-[#ff4d4d] text-3xl" />
                <div>
                  <h3 className="text-white font-semibold text-lg">Hosting</h3>
                  <p className="text-neutral-400 text-sm">Deploying and maintaining applications in the cloud</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - About & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              About me
            </motion.h2>
            
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
              {resumeData.summary}
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center p-4 bg-white/5 rounded-lg"
              >
                <div className="text-3xl font-black text-[#ff4d4d] mb-2">1+</div>
                <div className="text-sm text-neutral-400">Years Exp</div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center p-4 bg-white/5 rounded-lg"
              >
                <div className="text-3xl font-black text-[#ff4d4d] mb-2">100%</div>
                <div className="text-sm text-neutral-400">Client Satisfaction</div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center p-4 bg-white/5 rounded-lg"
              >
                <div className="text-3xl font-black text-[#ff4d4d] mb-2">2</div>
                <div className="text-sm text-neutral-400">Live Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

