import { CardHeader, CardTitle } from '@/components/ui/card'
import data from '@/data.json'
import Project from '@/components/singles/Project'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

function Projects() {
  return (
    <div className="w-full md:w-3/5 2xl:w-2/5 mx-auto lg:mb-4">
      <CardHeader className="text-center w-full m-auto py-2">
        <CardTitle className="uppercase">Projects</CardTitle>
      </CardHeader>
      <Carousel 
      opts={{
        align: "start",
        loop: true,
      }}>
        <CarouselContent>
        {data.projects
          .sort((a, b) => b.date - a.date)
          .map(project=> (
            <CarouselItem
            key={project.name}
            className="w-full flex"
            >
              <Project project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='hidden md:block'>
          <CarouselPrevious/>
          <CarouselNext/>
        </div>
      </Carousel>
    </div>
  )
}

export default Projects
