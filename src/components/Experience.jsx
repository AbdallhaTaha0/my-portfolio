import { motion } from "motion/react";
const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section
        className="py-32 bg-background-light dark:bg-background-dark transition-colors duration-300"
        id="experience"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative pl-10 border-l-2 border-gray-200 dark:border-gray-700 space-y-12">
              <div className="relative group">
                <div className="absolute -left-[49px] bg-primary h-6 w-6 rounded-full border-4 border-white dark:border-gray-900 top-8"></div>
                <div className="bg-surface-light dark:bg-surface-dark p-10 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 transition-all hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        Frontend Developer Intern
                      </h3>
                      <p className="text-primary text-lg font-medium mt-1">
                        DEPI - Digital Egypt Pioneers Initiatives
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-1.5 rounded-full inline-block">
                        Nov '25 — Jul '26 (Expected)
                      </div>
                      <div className="mt-2 text-sm text-gray-500 dark:text-gray-500 italic flex items-center justify-end gap-1">
                        <span className="material-symbols-outlined text-sm">
                          location_on
                        </span>{" "}
                        Egypt, United States
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-4 list-disc list-inside text-gray-600 dark:text-gray-300 marker:text-primary leading-relaxed">
                    <li className="pl-2">
                      Learning and applying <strong>React.js</strong> to build
                      modern front-end applications.
                    </li>
                    <li className="pl-2">
                      Developing reusable UI components and managing component
                      state effectively.
                    </li>
                    <li className="pl-2">
                      Working with JavaScript (ES6+), HTML, and CSS to create
                      responsive interfaces.
                    </li>
                    <li className="pl-2">
                      Gaining hands-on experience with best practices and
                      real-world workflows.
                    </li>
                    <li className="pl-2">
                      Collaborating in a learning-focused environment to improve
                      problem-solving skills.
                    </li>
                    <li className="pl-2">
                      Implemented modern JavaScript frameworks, improving site
                      performance by <strong>25%</strong>.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Experience;
