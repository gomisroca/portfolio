import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { LucideLink } from 'lucide-react';
import { Link } from 'react-router-dom'

type Study = {
  name: string;
  date: string;
  url: string;
  school: string;
  certificate: string;
};

function Study({ study }: {study: Study}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className="cursor-default text-left group items-center justify-start mx-auto w-full"
          data-aos="fade-up">
            <Card className="flex flex-col justify-center py-2 px-4 border-transparent dark:border-transparent group-hover:border-emerald-300 dark:group-hover:border-emerald-600 transition duration-200">
              <Link to={study.url} target="_blank" rel="noopener noreferrer">
                <CardTitle className="text-1xl xl:text-2xl capitalize hover:text-emerald-300 transition duration-200">
                  {study.name}
                </CardTitle>
              </Link>
              <CardDescription className='flex flex-col'>
                <span>{study.date} | {study.school}</span>
                {study.certificate && 
                  <a 
                  href={study.certificate} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='flex items-center text-neutral-600 dark:text-neutral-200 hover:text-emerald-300 transition-color duration-200'>
                    <LucideLink className='h-3' />
                    Certificate
                  </a>}
              </CardDescription>
            </Card>
        </TooltipTrigger>
        <TooltipContent>
          <p>Visit Website</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default Study
