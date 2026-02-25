import { useEffect, useState } from 'react'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-8 right-6 lg:right-10 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface-light/90 dark:bg-surface-dark/90 text-gray-700 dark:text-gray-200 shadow-lg shadow-black/10 backdrop-blur-md border border-gray-200/80 dark:border-gray-700/80 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-200"
      aria-label="Scroll to top"
    >
      <span className="material-symbols-outlined text-xl">arrow_upward</span>
    </button>
  )
}

export default ScrollToTopButton

