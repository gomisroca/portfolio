import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import data from '@/data.json'
import Project from '@/components/singles/Project'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Projects() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Card className="border-2 hover:border-emerald-300 has-[.aos-init:hover]:border-neutral-200 dark:has-[.aos-init:hover]:border-neutral-800 dark:hover:border-emerald-600 transition duration-200 m-auto w-[90%] md:w-1/2">
      <CardHeader className="text-center w-full m-auto">
        <CardTitle className="capitalize font-mw">Projects</CardTitle>
      </CardHeader>
      <CardContent className="w-full m-auto flex flex-col gap-y-4 md:gap-y-2 justify-evenly">
        {data.projects
          .sort((a, b) => b.date - a.date)
          .map(project => (
            <div data-aos="fade-up">
              <Project project={project} />
            </div>
          ))}
      </CardContent>
    </Card>
  )
}

export default Projects
