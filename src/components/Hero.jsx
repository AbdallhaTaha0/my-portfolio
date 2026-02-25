import photo from "../assets/profile.jpg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    
      <section
        className="min-h-screen flex items-center justify-center py-24 lg:py-32 relative overflow-hidden "
        id="about"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 dark:bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-16 lg:gap-24 relative z-10">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <img
                alt="Abdallah Taha Portrait"
                className="relative w-full h-full object-cover rounded-full border-4 border-surface-light dark:border-surface-dark shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
                src={photo}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1 space-y-8">
            <div>
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 tracking-wide">
                AVAILABLE FOR HIRE
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-4">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                  Abdallah Taha
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium">
                Frontend Developer
              </h2>
            </div>
            <p className="text-lg leading-loose max-w-xl mx-auto md:mx-0 text-gray-600 dark:text-gray-400">
              Passionate Frontend Developer intern eager to contribute to
              dynamic teams. I have a solid foundation in web technologies and a
              commitment to delivering innovative solutions and enhancing user
              experiences.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-5 pt-2">
              <a
                className="px-8 py-3.5 bg-primary hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-1"
                href="#contact"
              >
                Contact Me
              </a>
              <a
                className="px-8 py-3.5 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                href="#projects"
              >
                View Projects
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-8 pt-6 text-gray-500 dark:text-gray-400">
              <a
                className="hover:text-primary transition-colors text-2xl"
                href="https://www.linkedin.com/in/abdallah-taha01"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                className="hover:text-primary transition-colors text-2xl"
                href="https://github.com/AbdallhaTaha0"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                className="hover:text-primary transition-colors text-2xl"
                href="mailto:AT010Abdallha@gmail.com"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default Hero;
