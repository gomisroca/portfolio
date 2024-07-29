import {ThemeProvider} from '@/providers/theme-provider'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Skills from '@/components/panels/Skills'
import Projects from '@/components/panels/Projects'
import Studies from '@/components/panels/Studies'
import { useRef } from 'react'
import { useIsVisible } from '@/hooks/useIsVisible'

function App() {
  const skillsRef = useRef(null);
  const isVisible1 = useIsVisible(skillsRef);
  const studiesRef = useRef(null);
  const isVisible2 = useIsVisible(studiesRef);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-ui-theme">
      <div style={{ backgroundImage: `url('bg.jpg')` }} className='bg-cover bg-center bg-no-repeat bg-fixed'>
        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100/50 dark:from-neutral-950 dark:via-from-neutral-950 dark:to-neutral-900/70">
          <Navbar />
          <div className="flex flex-col gap-y-4">
            <Banner />
            <div ref={ skillsRef } className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
              <Skills />
            </div>
            <Projects />
            <div ref={ studiesRef } className={`mb-5 md:mb-10 transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
              <Studies />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
