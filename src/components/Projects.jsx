import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FaGithub, FaCodeBranch, FaFolderOpen, FaExternalLinkAlt, FaSpinner } from "react-icons/fa";

const Projects = () => {
  const [allRepos, setAllRepos] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loadingAll, setLoadingAll] = useState(false);
  const [errorAll, setErrorAll] = useState('');

  const handleToggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const featuredProject = resumeData.projects.find((project) =>
    project.name.toLowerCase().includes('expense')
  ) || resumeData.projects[0];

  useEffect(() => {
    if (!showAll || allRepos.length > 0) return;

    const controller = new AbortController();

    const fetchAllRepos = async () => {
      setLoadingAll(true);
      setErrorAll('');
      try {
        const response = await fetch('https://api.github.com/users/Gauravdhayade/repos?per_page=100', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setAllRepos(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setErrorAll(err.message);
        }
      } finally {
        setLoadingAll(false);
      }
    };

    fetchAllRepos();

    return () => controller.abort();
  }, [showAll, allRepos.length]);

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-hero font-black bg-gradient-to-r from-primary via-white to-primary/80 bg-clip-text text-transparent text-center mb-24 lg:mb-32"
        >
          Projects
        </motion.h2>

        {/* Featured Project (only Expense Tracker) */}
        <div className="mb-12 lg:mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-black text-white text-center mb-10"
          >
            Featured Project
          </motion.h3>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group rounded-3xl border border-neutral-800/70 bg-neutral-900/70 backdrop-blur-xl p-8 lg:p-10 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
          >
            <div className="flex items-start gap-3 mb-5">
              <FaFolderOpen className="w-7 h-7 text-primary mt-1" />
              <h4 className="text-2xl font-extrabold text-white leading-tight">{featuredProject.name}</h4>
            </div>

            <p className="text-neutral-300 mb-5 line-clamp-2">{featuredProject.desc}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Spring Boot', 'React.js', 'MySQL', 'REST APIs'].map((tech) => (
                <span key={tech} className="text-xs text-white/90 bg-primary/20 border border-primary/50 rounded-lg px-3 py-1">{tech}</span>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-neutral-800/60 flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/Gauravdhayade/expense-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center w-full sm:w-auto py-3 px-6 text-sm font-bold text-white bg-gradient-to-r from-primary to-cyan-500 rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300"
              >
                <FaGithub className="w-4 h-4" />
                View Repo
              </a>

              <button
                onClick={() => window.open("https://gauravdhayade.github.io/expense-tracker/", "_blank")}
                title="View Live Project"
                className="inline-flex items-center gap-2 justify-center w-full sm:w-auto py-3 px-6 text-sm font-bold text-white border border-white/30 bg-transparent rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Live Demo
              </button>
            </div>
          </motion.article>

          <div className="mt-8 text-center">
            <button
              onClick={handleToggleShowAll}
              className="inline-flex items-center gap-2 px-7 py-3 text-base font-bold rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              {showAll ? 'Hide Projects' : 'View All Projects'}
              <FaCodeBranch className="w-4 h-4" />
            </button>
          </div>
        </div>

        {showAll && (
          <>
            {loadingAll ? (
              <div className="flex flex-col items-center justify-center py-20 glass p-12 rounded-3xl text-center max-w-lg mx-auto">
                <FaSpinner className="w-16 h-16 text-primary animate-spin mb-8" />
                <h3 className="text-2xl font-bold text-white mb-4">Loading projects...</h3>
              </div>
            ) : errorAll ? (
              <div className="text-center text-red-300 mb-8">Failed to load projects: {errorAll}</div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {allRepos.length > 0 ? (
                  allRepos.map((repo, index) => (
                    <motion.article
                      key={repo.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="group rounded-3xl border border-neutral-800/70 bg-neutral-900/70 backdrop-blur-xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                    >
                      <h4 className="text-xl font-bold text-white mb-3">{repo.name}</h4>
                      <p className="text-neutral-300 mb-4 line-clamp-2">{repo.description || 'No description available.'}</p>
                      {repo.language && (
                        <span className="text-xs text-white/90 bg-primary/20 border border-primary/50 rounded-lg px-3 py-1 mb-5 inline-block">{repo.language}</span>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-2 justify-center w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-primary to-cyan-500 rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300"
                      >
                        <FaGithub className="w-4 h-4" />
                        View Repo
                      </a>
                    </motion.article>
                  ))
                ) : (
                  <div className="col-span-full text-center p-16 glass border border-neutral-700/50 rounded-3xl">No repositories found.</div>
                )}
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
};

export default Projects;

