import React, { useState } from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('⚠️ Please provide name, email, and message.');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus('⚠️ Please enter a valid email address.');
      return false;
    }

    if (message.trim().length < 10) {
      setStatus('⚠️ Message should be at least 10 characters long.');
      return false;
    }

    return true;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (sending) return;

    if (!validateForm()) {
      window.setTimeout(() => setStatus(''), 5000);
      return;
    }

    setStatus('');
    setSending(true);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    if ([serviceID, templateID, publicKey].some((x) => !x || x.includes('YOUR_'))) {
      await new Promise((resolve) => setTimeout(resolve, 1250));
      setStatus('✅ (Demo send) Message sent successfully! Configure EmailJS keys to send real emails.');
      setFormData({ name: '', email: '', message: '' });
      setSending(false);
      window.setTimeout(() => setStatus(''), 5000);
      return;
    }

    try {
      await emailjs.send(serviceID, templateID, {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }, publicKey);

      setStatus('✅ Message sent successfully! I\'ll reply within 24 hours.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('❌ Failed to send message. Please try again or check EmailJS configuration.');
    } finally {
      setSending(false);
      window.setTimeout(() => setStatus(''), 5000);
    }
  };

  const { phone, email, github, linkedin, portfolio } = resumeData.personal;

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-black relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-l from-emerald-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-hero font-black bg-gradient-to-r from-emerald-400 via-white to-emerald-400/80 bg-clip-text text-transparent text-center mb-8 lg:mb-12"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl lg:text-2xl text-neutral-300 text-center max-w-3xl mx-auto mb-20 lg:mb-24 leading-relaxed"
        >
          I'm excited about new opportunities. Let's discuss how we can collaborate on impactful projects!
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:sticky lg:top-24 lg:self-start"
          >
            <div className="glass p-10 lg:p-12 rounded-3xl shadow-2xl border border-white/10 mb-8">
              <h3 className="text-3xl font-black text-white mb-12 bg-gradient-to-r from-emerald-400 to-primary/80 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              
              <div className="space-y-8">
                <a href={`mailto:${email}`} className="group flex items-start gap-6 p-6 hover:bg-white/10 rounded-2xl transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-2 border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/30 to-primary/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all">
                    <FiMail className="w-8 h-8 text-emerald-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white mb-2 group-hover:text-emerald-400">Email</h4>
                    <p className="text-lg text-neutral-300">{email}</p>
                  </div>
                </a>

                <a href={`tel:${phone}`} className="group flex items-start gap-6 p-6 hover:bg-white/10 rounded-2xl transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-2 border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/30 to-primary/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all">
                    <FiPhone className="w-8 h-8 text-emerald-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white mb-2 group-hover:text-emerald-400">Phone</h4>
                    <p className="text-lg text-neutral-300">{phone}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/10">
              <h4 className="text-2xl font-bold text-white mb-8">Find Me Online</h4>
              <div className="flex flex-wrap gap-4 lg:gap-6">
                <a href={github} target="_blank" rel="noopener noreferrer" className="group flex-1 min-w-[140px] flex items-center gap-3 p-5 bg-neutral-900/50 hover:bg-neutral-800/70 rounded-2xl backdrop-blur border border-neutral-700/50 hover:border-neutral-600 hover:shadow-lg transition-all duration-400 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-neutral-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110">
                    <FiGithub className="w-6 h-6 text-neutral-200" />
                  </div>
                  <span className="font-semibold text-white group-hover:text-neutral-200">GitHub</span>
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="group flex-1 min-w-[140px] flex items-center gap-3 p-5 bg-gradient-to-r from-blue-600/20 to-blue-700/20 hover:from-blue-500/30 hover:to-blue-600/30 rounded-2xl backdrop-blur border border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue/20 transition-all duration-400 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/40 to-blue-600/40 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110">
                    <FiLinkedin className="w-6 h-6 text-blue-200 group-hover:text-white" />
                  </div>
                  <span className="font-semibold text-white group-hover:text-blue-100">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass p-10 lg:p-12 rounded-3xl shadow-2xl border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-12 bg-gradient-to-r from-emerald-400 to-primary/80 bg-clip-text text-transparent text-center">
                Send a Message
              </h3>
              
              <form onSubmit={sendEmail} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      required
                      disabled={sending}
                      className="w-full p-5 lg:p-6 border-2 border-neutral-700/50 rounded-2xl bg-neutral-900/50 backdrop-blur-xl text-white placeholder-neutral-500 focus:border-primary/60 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-400 text-lg font-medium peer"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      required
                      disabled={sending}
                      className="w-full p-5 lg:p-6 border-2 border-neutral-700/50 rounded-2xl bg-neutral-900/50 backdrop-blur-xl text-white placeholder-neutral-500 focus:border-primary/60 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-400 text-lg font-medium peer"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project or how we can work together..."
                    value={formData.message}
                    required
                    disabled={sending}
                    className="w-full p-5 lg:p-6 border-2 border-neutral-700/50 rounded-2xl bg-neutral-900/50 backdrop-blur-xl text-white placeholder-neutral-500 resize-vertical focus:border-primary/60 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-400 text-lg font-medium peer"
                    onChange={handleChange}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-3 p-6 lg:p-7 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-400 group ${
                    sending 
                      ? 'bg-neutral-700/50 border-2 border-neutral-600 cursor-not-allowed' 
                      : 'btn-primary shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02]'
                  }`}
                >
                  {sending ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="text-center p-8 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/40 rounded-2xl backdrop-blur text-emerald-300 text-lg font-semibold"
                  >
                    {status}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

