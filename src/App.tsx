import {ThemeProvider} from '@/lib/theme-provider'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Skills from '@/components/panels/Skills'
import Projects from '@/components/panels/Projects'
import Studies from '@/components/panels/Studies'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-ui-theme">
      <div className="font-bitter">
        <Navbar />
        <div className="mx-6 my-2">
          <Banner />
        </div>
        <div className="flex flex-col gap-y-4">
          <div data-aos="fade-up">
            <Skills />
          </div>
          <div data-aos="fade-up">
            <Projects />
          </div>
          <div data-aos="fade-up" className="mb-10">
            <Studies />
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
