import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideLink } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

type Project = {
  name: string;
  gitUrl: string;
  liveUrl: string;
  images: string[];
  description: string;
  date: number;
};

function Project({ project }: { project: Project }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoaded = () => {
    setImageLoaded(true);
  };
  return (
    <Card className="group mx-2 flex w-full flex-col border-2 bg-white/40 transition duration-200 ease-in dark:bg-black/40 md:mx-0 md:hover:border-neutral-300 md:hover:shadow-md md:dark:hover:border-neutral-700">
      {!imageLoaded && <Skeleton className="h-48 w-full md:h-80 lg:h-80 xl:h-[26rem]" />}
      {project.images.length === 1 ? (
        <img
          alt={project.name}
          loading="lazy"
          src={project.images[0]}
          className="rounded-t-md transition duration-200 group-hover:contrast-[1.1]"
          onLoad={() => handleImageLoaded()}
        />
      ) : (
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}>
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index} className="flex w-full">
                <img
                  alt={`${project.name} image ${index + 1}`}
                  loading="lazy"
                  src={image}
                  className="rounded-t-md transition duration-200 group-hover:contrast-[1.1]"
                  onLoad={() => handleImageLoaded()}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
      <div className="flex flex-1 flex-col justify-between">
        <CardHeader className="mx-auto my-2 pb-0 pt-2 text-center">
          <CardTitle className="text-center text-xl uppercase transition duration-200 group-hover:text-rose-500 dark:group-hover:text-rose-600">
            {project.name}
          </CardTitle>
          <CardDescription>{project.date}</CardDescription>
        </CardHeader>
        <CardContent className="text-ellipsis pb-2 text-center italic text-neutral-700 dark:text-neutral-300">
          {project.description}
        </CardContent>
        <CardFooter className="m-auto mb-0 flex items-center gap-x-2 pb-4">
          {project.gitUrl && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="size-[40px] cursor-default" asChild>
                  <Button size="icon" className="size-[40px]">
                    <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
                      <img
                        loading="lazy"
                        alt="Github logo"
                        src="./github-mark.svg"
                        className="p-1 invert dark:invert-0"
                      />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github Repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          {project.liveUrl && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="size-[40px] cursor-default" asChild>
                  <Button size="icon">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <LucideLink />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live Website</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}

export default Project;
