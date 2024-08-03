import { CardDescription, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { LucideLink } from 'lucide-react';

type Study = {
  name: string;
  date: string;
  url: string;
  school: string;
  certificate: string;
};

function Study({ study }: { study: Study }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="group mx-auto w-full cursor-default items-center justify-start rounded-md border-2 bg-white/40 text-left transition duration-200 dark:bg-black/40 md:hover:border-neutral-300 md:dark:hover:border-neutral-700">
          <div className="flex flex-col justify-center px-4 py-2">
            <a href={study.url} target="_blank" rel="noopener noreferrer" className="w-fit">
              <CardTitle className="text-base uppercase transition duration-200 hover:text-rose-500 dark:hover:text-rose-600 md:text-xl">
                {study.name}
              </CardTitle>
            </a>
            <CardDescription className="flex flex-col text-xs md:text-sm">
              <span>
                {study.date} | {study.school}
              </span>
              {study.certificate && (
                <a
                  href={study.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center font-semibold text-neutral-600 transition-colors duration-200 hover:text-rose-500 dark:text-neutral-200 dark:hover:text-rose-600">
                  <LucideLink className="h-3" />
                  Certificate
                </a>
              )}
            </CardDescription>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Visit Website</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default Study;
