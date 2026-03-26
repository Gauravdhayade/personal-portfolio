import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FaGithub, FaStar, FaCodeBranch, FaFolderOpen, FaSpinner } from "react-icons/fa";

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const GITHUB_USERNAME = 'Gauravdhayade';
  const FEATURED_NAMES = ['digital-customer-onboarding', 'expense-tracker'];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
        if (!response.ok) throw new Error('Failed to fetch');
        const repos = await response.json();

        // Filter: non-fork, has language or stars >0, exclude this portfolio if needed
        const filteredRepos = repos
          .filter(repo => !repo.fork && repo.language && repo.stargazers_count >= 0)
          .map(repo => ({
            name: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: repo.description || `A ${repo.language} project showcasing ${repo.name.toLowerCase().replace(/-/g, ' ')}.`,
            html_url: repo.html_url,
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            languageColor: getLanguageColor(repo.language)
          }));

        setGithubRepos(filteredRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      Java: '#007396',
      Python: '#3776AB',
      JavaScript: '#F7DF1E',
      HTML: '#E34F26',
      Shell: '#89E051'
    };
    return colors[language] || '#6a737d';
  };

  const featuredRepos = githubRepos.filter(repo => 
    repo.html_url.includes('digitalcustomer') || repo.html_url.includes('expense-tracker')
  );

  const otherRepos = githubRepos.filter(repo => !featuredRepos.some(f => f.html_url === repo.html_url));

  if (loading) {
    return (
      <section id="projects" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 className="text-center text-4xl font-bold mb-16 text-gray-800 dark:text-gray-200">
            Projects
          </motion.h2>
          <div className="text-center py-12">
            <FaSpinner className="w-12 h-12 animate-spin mx-auto mb-4 text-blue-600" />
            <p>Loading projects from GitHub...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold mb-16 text-gray-800 dark:text-gray-200"
        >
          Projects
        </motion.h2>

        {/* Featured Resume Projects */}
        {featuredRepos.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredRepos.map((project, index) => (
                <motion.div
                  key={project.html_url}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200/50 dark:border-slate-600 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <FaFolderOpen className="w-6 h-6 text-yellow-500 mr-2" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                        {project.language}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <FaStar />
                        <span>{project.stargazers_count}</span>
                      </div>
                    </div>
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Other GitHub Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Other Projects
          </h3>
          {error ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 text-gray-500 dark:text-gray-400"
            >
              <FaCodeBranch className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Unable to load GitHub projects: {error}</p>
              <p className="mt-2">Resume projects still available above.</p>
            </motion.div>
          ) : otherRepos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherRepos.map((project, index) => (
                <motion.div
                  key={project.html_url}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur p-6 rounded-xl border border-gray-200/50 dark:border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-3 truncate">
                    {project.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="px-2 py-1 text-xs font-medium rounded-full"
                      style={{ backgroundColor: `${project.languageColor}20`, color: project.languageColor }}
                    >
                      {project.language}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <FaStar /> {project.stargazers_count}
                    </span>
                  </div>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    View Repo
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 col-span-full"
            >
              <FaFolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">No additional projects</h4>
              <p className="text-gray-600 dark:text-gray-400">Check back soon for more GitHub repositories!</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

