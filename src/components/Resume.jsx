import { useState } from "react";
import resume from "../assets/resume.png";
import { motion } from "motion/react";

const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section
        className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden transition-colors duration-300"
        id="resume"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 dark:opacity-5"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-20">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="resume-paper w-full max-w-sm bg-white p-3 rounded-sm shadow-2xl rotate-3 relative">
                <div
                  className="w-full h-[520px] overflow-hidden bg-gray-50 relative group cursor-pointer border border-gray-200"
                  onClick={() => setIsPreviewOpen(true)}
                >
                  <img
                    alt="Abdallah Taha Resume Preview"
                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                    src={resume}
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium flex items-center gap-2">
                      <span className="material-symbols-outlined">
                        visibility
                      </span>{" "}
                      Preview
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-8">
                Grab a copy of my Resume
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-10 text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
                For a detailed look at my academic history and professional
                journey, please download my CV. I'm always open to discussing
                new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                <a
                  href={resume}
                  download="Abdallah-Taha-CV.png"
                  className="px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-lg shadow-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center justify-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">download</span>{" "}
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {isPreviewOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setIsPreviewOpen(false)}
          >
            <div
              className="relative w-full max-w-3xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute -top-10 right-0 text-white/80 hover:text-white flex items-center gap-1 text-sm"
                onClick={() => setIsPreviewOpen(false)}
              >
                <span className="material-symbols-outlined text-base">
                  close
                </span>
                Close
              </button>
              <img
                src={resume}
                alt="Abdallah Taha Full Resume"
                className="w-full h-auto rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
              />
            </div>
          </div>
        )}
      </section>
    </motion.div>
  );
};

export default Resume;
