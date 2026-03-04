import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App
