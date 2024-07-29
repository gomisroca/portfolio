import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import data from '@/data.json'
import Project from '@/components/singles/Project'

function Projects() {
  return (
    <div className="w-full md:w-4/5 2xl:w-3/5 mx-auto lg:mb-4">
      <CardHeader className="text-center w-full m-auto py-2">
        <CardTitle className="uppercase">Projects</CardTitle>
      </CardHeader>
      <CardContent className="p-0 w-full m-auto flex flex-col gap-y-4 md:gap-y-2 justify-evenly">
        {data.projects
          .sort((a, b) => b.date - a.date)
          .map(project => (
            <div key={project.name}>
              <Project project={project} />
            </div>
          ))}
      </CardContent>
    </div>
  )
}

export default Projects
