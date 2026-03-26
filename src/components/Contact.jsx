import React, { useState } from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Future: EmailJS or API call
    setStatus('Message sent! I\'ll get back to you soon.');
    setTimeout(() => setStatus(''), 5000);
  };

  const { phone, email, github, linkedin } = resumeData.personal;

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl text-gray-600 dark:text-gray-400 mb-20 max-w-2xl mx-auto"
        >
          I'm currently open to new opportunities. Let's build something amazing together!
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Email</h4>
                  <a href={`mailto:${email}`} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Phone</h4>
                  <a href={`tel:${phone}`} className="font-medium">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 p-5 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-slate-900 hover:text-white">
                  <FiGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 p-5 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white">
                  <FiLinkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-12 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full p-4 border border-gray-200 dark:border-slate-700 rounded-xl bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-900 dark:text-gray-100 placeholder-gray-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full p-4 border border-gray-200 dark:border-slate-700 rounded-xl bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-900 dark:text-gray-100 placeholder-gray-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full p-4 border border-gray-200 dark:border-slate-700 rounded-xl bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-vertical text-gray-900 dark:text-gray-100 placeholder-gray-500"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={!!status}
                className="w-full flex items-center justify-center space-x-2 p-5 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:from-emerald-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-lg"
              >
                <FiSend />
                <span>{status || 'Send Message'}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
