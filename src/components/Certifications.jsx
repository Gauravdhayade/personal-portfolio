import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FiAward, FiDownload, FiExternalLink } from "react-icons/fi";
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 lg:py-32 bg-gradient-to-b from-purple-950/30 via-neutral-900/20 to-neutral-950/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-hero font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500/80 bg-clip-text text-transparent text-center mb-24 lg:mb-32"
        >
          Certifications & Achievements
        </motion.h2>

        <div
          className="grid gap-8 lg:gap-10 auto-rows-fr"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}
        >
          {(resumeData.certifications || []).map((cert, index) => (
            <motion.a
              key={cert.title || index}
              href={cert.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative block h-full rounded-3xl border border-neutral-700/40 bg-neutral-900/70 backdrop-blur-xl p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none rounded-3xl border border-transparent shadow-[0_0_30px_rgba(99,102,241,0.18)] opacity-70 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.32)] transition-all duration-300"></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <FaCertificate className="w-7 h-7 text-emerald-400" />
                    <span className="text-xs text-emerald-300 uppercase tracking-wider font-semibold">Certified</span>
                  </div>
                  <span className="text-xs font-medium text-neutral-400 rounded-full px-3 py-1 bg-neutral-800/60">✔ Verified</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-3 line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-sm text-neutral-400 mb-2">Issued by</p>
                <p className="text-lg font-semibold text-white mb-4">{cert.org}</p>
                {cert.date && (
                  <p className="text-sm text-neutral-500 mb-6">Date: {cert.date}</p>
                )}

                <span className="block w-16 h-[2px] bg-emerald-500/70 rounded-full mb-6" />

                <div className="flex items-center gap-3 pt-6 border-t border-neutral-700/40">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {(!resumeData.certifications || resumeData.certifications.length === 0) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            className="col-span-full text-center py-32 max-w-4xl mx-auto glass p-20 lg:p-24 rounded-3xl border-neutral-700/50 shadow-2xl"
          >
            <FiAward className="w-32 h-32 mx-auto mb-12 text-neutral-600 animate-pulse" />
            <h3 className="text-5xl font-black text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Achievements
            </h3>
            <p className="text-2xl text-neutral-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Certifications and professional achievements will be featured here.
            </p>
            <div className="flex gap-6 justify-center">
              <a href="#skills" className="btn-primary px-12 py-5 text-xl">My Skills</a>
              <a href="#projects" className="btn-secondary px-12 py-5 border-2 text-xl hover:border-primary/80">Projects</a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;

