import { motion } from "motion/react";
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section className="py-32" id="education">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto bg-surface-light dark:bg-surface-dark rounded-2xl shadow-lg border-l-8 border-primary overflow-hidden">
            <div className="p-10 md:p-14">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-10 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300">
                    Faculty of Computer and Information Sciences
                  </p>
                  <p className="text-primary text-lg font-medium mt-2">
                    Ain Shams University
                  </p>
                </div>
                <div className="text-right">
                  <span className="block text-base font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 px-5 py-2.5 rounded-lg">
                    Jan '24 — Present
                  </span>
                  <span className="block text-sm text-gray-500 mt-2">
                    Cairo, Egypt
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold mb-3">
                    GPA
                  </span>
                  <span className="text-4xl font-display font-bold text-gray-900 dark:text-white">
                    3.5
                    <span className="text-xl text-gray-400 font-normal ml-1">
                      /4.0
                    </span>
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold mb-3">
                    Expected Graduation
                  </span>
                  <span className="text-4xl font-display font-bold text-gray-900 dark:text-white">
                    2028
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Education;
