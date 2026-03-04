import { motion } from "motion/react";
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section
        className="py-32 bg-background-light dark:bg-background-dark transition-colors duration-300"
        id="skills"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Skills &amp; Expertise
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Technical Skills */}
            <div className="bg-surface-light dark:bg-surface-dark p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3.5 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                  <span className="material-symbols-outlined text-3xl">
                    terminal
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Technical
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium">
                  React.js
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium">
                  JavaScript ES6+
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium">
                  Responsive Design
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium">
                  CSS Frameworks
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium">
                  C++
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium">
                  Flutter (Basic)
                </span>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-surface-light dark:bg-surface-dark p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3.5 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600 dark:text-green-400">
                  <span className="material-symbols-outlined text-3xl">
                    groups
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Soft Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-sm">
                  Teamwork
                </span>
                <span className="px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-sm">
                  Flexible
                </span>
                <span className="px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-sm">
                  Communication
                </span>
                <span className="px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-sm">
                  Time Management
                </span>
                <span className="px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-sm">
                  Learning Mindset
                </span>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-surface-light dark:bg-surface-dark p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3.5 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
                  <span className="material-symbols-outlined text-3xl">
                    translate
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Languages
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                      Arabic
                    </span>
                    <span className="text-sm text-gray-500">Native</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                      English
                    </span>
                    <span className="text-sm text-gray-500">Professional</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Skills;
