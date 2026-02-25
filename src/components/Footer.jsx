const Footer = () => {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark py-10 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Abdallah Taha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
