import metro from "../assets/metro.png";
import metro2 from "../assets/metro2.png";
import { motion } from "motion/react";
const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section className="py-32" id="projects">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Project 1 */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-soft border border-gray-100 dark:border-gray-700 group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
              <div className="h-56 bg-gradient-to-r from-gray-800 to-gray-900 relative overflow-hidden flex items-center justify-center shrink-0">
                {/* <span className="material-symbols-outlined text-7xl text-gray-600 dark:text-gray-700">subway</span> */}
                <img src={metro2} />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Metro System Project
                  </h3>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2.5 py-1 rounded font-bold uppercase tracking-wide">
                    1st Place Winner
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-base leading-relaxed">
                  A comprehensive system developed for Ain Shams University
                  college project.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-gray-600 dark:text-gray-400 mt-auto">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Subscription management &amp; fare calculation logic (C++)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">
                      check_circle
                    </span>
                    <span>
                      User-friendly graphical interface using{" "}
                      <strong>Flutter</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">
                      check_circle
                    </span>
                    <span>Applied OOP principles for optimal performance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Project 2 (Coming Soon) */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center p-10 text-center min-h-[450px]">
              <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-gray-400 text-4xl">
                  code
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                More Projects Coming Soon
              </h3>
              <p className="text-gray-500 dark:text-gray-500 max-w-xs mt-3 text-base leading-relaxed">
                I am constantly building and learning. Check my GitHub for the
                latest updates.
              </p>
              <a
                className="mt-8 text-primary font-medium hover:underline flex items-center gap-2 text-lg"
                href="https://github.com/AbdallhaTaha0"
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub{" "}
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
