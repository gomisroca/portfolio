import { CardHeader, CardTitle } from '@/components/ui/card';
import data from '@/data.json';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Project from '@/components/singles/project';

function Projects() {
  return (
    <div className="mx-auto w-full md:w-3/5 lg:mb-4 2xl:w-2/5">
      <CardHeader className="m-auto w-full py-2 text-center">
        <CardTitle className="font-display uppercase">Projects</CardTitle>
      </CardHeader>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}>
        <CarouselContent>
          {data.projects
            .sort((a, b) => b.date - a.date)
            .map((project) => (
              <CarouselItem key={project.name} className="flex w-full">
                <Project project={project} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}

export default Projects;
