import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Link } from 'react-router-dom'

type Study = {
  name: string;
  date: string;
  url: string;
};

function Study({ study }: {study: Study}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className="cursor-default text-left group"
          data-aos="fade-up">
          <Link to={study.url} target="_blank" rel="noopener noreferrer">
            <Card className="flex flex-col justify-center py-2 px-4 border-transparent dark:border-transparent group-hover:border-emerald-300 dark:group-hover:border-emerald-600 transition duration-200">
              <CardTitle className="capitalize group-hover:text-emerald-300 transition duration-200">
                {study.name}
              </CardTitle>
              <CardDescription>{study.date}</CardDescription>
            </Card>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Visit Website</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default Study
