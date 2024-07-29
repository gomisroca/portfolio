import {ThemeProvider} from '@/providers/theme-provider'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Skills from '@/components/panels/Skills'
import Projects from '@/components/panels/Projects'
import Studies from '@/components/panels/Studies'
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-ui-theme">
      <div style={{ backgroundImage: `url('bg.jpg')` }} className='bg-cover bg-center bg-no-repeat bg-fixed'>
        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100/50 dark:from-neutral-950 dark:via-from-neutral-950 dark:to-neutral-900/70">
          <Navbar />
          <div className="flex flex-col gap-y-4">
            <Banner />
            <Skills />
            <Projects />
            <Studies />
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
