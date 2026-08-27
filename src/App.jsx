import { useCallback, useState } from 'react'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoaderFinish = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading && (
        <Loader onFinish={handleLoaderFinish} />
      )}

      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App