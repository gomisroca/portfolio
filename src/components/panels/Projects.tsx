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
    <Card className="border-0 xl:border-2 hover:border-emerald-300 has-[.aos-init:hover]:border-neutral-200 dark:has-[.aos-init:hover]:border-neutral-800 dark:hover:border-emerald-600 transition duration-200 my-auto mx-0 md:mx-auto w-auto md:w-3/4 xl:w-5/6">
      <CardHeader className="text-center w-full m-auto">
        <CardTitle className="capitalize font-mw">Projects</CardTitle>
      </CardHeader>
      <CardContent className="px-2 md:px-0 xl:px-6 w-full m-auto flex flex-col gap-y-4 md:gap-y-2 justify-evenly">
        {data.projects
          .sort((a, b) => b.date - a.date)
          .map(project => (
            <div key={project.name} data-aos="fade-up">
              <Project project={project} />
            </div>
          ))}
      </CardContent>
    </Card>
  )
}

export default Projects
