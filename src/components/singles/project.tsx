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
import { Separator } from '@/components/ui/separator'
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
  tasks: string[];
  learned: string[];
};

function Project({ project }: {project: Project}) {
  return (
    <Card className="group flex flex-col justify-center border-2 md:hover:border-emerald-300 md:dark:hover:border-emerald-600 transition duration-200">
      <img
        src={project.image}
        className="rounded-t-md group-hover:contrast-[1.1] transition duration-200"
      />
      <CardHeader className="my-2 mx-auto pt-2 pb-0 text-center">
        <CardTitle className="capitalize">{project.name}</CardTitle>
        <CardDescription>- {project.date} -</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col items-center md:gap-2 my-2 pb-2">
        <div className="py-2">{project.description}</div>
        <Separator />
        <div className="flex flex-col md:flex-row md:justify-around gap-y-2 md:gap-y-0 w-full">
          <div>
            <span className="font-semibold">Responsabilities</span>
            <ul className="px-6 list-disc">
              {project.tasks.map(task => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-semibold">Skills Acquired</span>
            <ul className="px-6 list-disc">
              {project.learned.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <Separator />
      </CardContent>
      <CardFooter className="m-auto pb-4 items-center flex gap-x-2">
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
    </Card>
  )
}

export default Project
