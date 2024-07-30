import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { LucideLink } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type Project = {
  name: string;
  gitUrl: string;
  liveUrl: string;
  image: string;
  description: string;
  date: number;
  comment: string;
};

function Project({ project }: {project: Project}) {
  return (
    <Card className='
    group
    mx-2 md:mx-0
    group flex flex-col
    border-2 md:hover:border-neutral-300 md:dark:hover:border-neutral-700 
    bg-white/40 dark:bg-black/40
    transition ease-in duration-200 w-full'>
      <img
        alt={project.name}
        loading="lazy"
        src={project.image}
        className="rounded-t-md group-hover:contrast-[1.1] transition duration-200"
      />
      <div className='flex-1 flex flex-col justify-between'>
        <CardHeader className="my-2 mx-auto pt-2 pb-0 text-center">
          <CardTitle className=" uppercase text-xl text-center group-hover:text-rose-500 dark:group-hover:text-rose-600 transition duration-200">{project.name}</CardTitle>
          <CardDescription>{project.date}</CardDescription>
        </CardHeader>
        <CardContent className="italic text-neutral-700 dark:text-neutral-300 text-center text-ellipsis pb-2" dangerouslySetInnerHTML={{__html: project.comment}} />
        <CardFooter className="m-auto mb-0 pb-4 items-center flex gap-x-2">
          {project.gitUrl && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="cursor-default h-[40px] w-[40px]" asChild>
                  <Button size="icon" className="h-[40px] w-[40px]">
                    <Link
                      to={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        loading="lazy"
                        alt="Github logo"
                        src="./github-mark.svg"
                        className="p-1 invert dark:invert-0"
                      />
                    </Link>
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
                <TooltipTrigger className="cursor-default h-[40px] w-[40px]" asChild>
                  <Button size="icon">
                    <Link
                      to={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      <LucideLink />
                    </Link>
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
  )
}

export default Project
