import { ThemeProvider } from "@/components/ui/theme-provider"
import Navbar from "@/components/ui/navbar"
import Banner from "@/components/banner"
import Footer from "@/components/ui/footer"
import SkillsPanel from "@/components/skills-panel"
import ProjectsPanel from "@/components/projects-panel"
import StudiesPanel from "@/components/studies-panel"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react"

function App() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="font-bitter">
                <Navbar />
                <div className="mx-6 my-2">
                    <Banner />
                </div>
                <div className="flex flex-col gap-y-4">
                    <div data-aos="fade-up">
                        <SkillsPanel  />
                    </div>
                    <div data-aos="fade-up">
                        <ProjectsPanel />
                    </div> 
                    <div data-aos="fade-up" className="mb-10">
                        <StudiesPanel />
                    </div>
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default App
