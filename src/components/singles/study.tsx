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
        <TooltipTrigger className="cursor-default text-left group items-center justify-start mx-auto w-full bg-white/40 dark:bg-black/40 rounded-md border-2 md:hover:border-neutral-300 md:dark:hover:border-neutral-700 transition duration-200">
          <div className="flex flex-col justify-center py-2 px-4">
            <a href={study.url} target="_blank" rel="noopener noreferrer" className="w-fit">
              <CardTitle className="text-md md:text-xl uppercase hover:text-rose-500 dark:hover:text-rose-600 transition duration-200">
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
                  className="w-fit flex items-center text-neutral-600 dark:text-neutral-200 hover:text-rose-500 dark:hover:text-rose-600 transition-color duration-200 font-semibold">
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
