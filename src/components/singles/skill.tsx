import { CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';
import { Skeleton } from '../ui/skeleton';

type Skill = {
  name: string;
  badge: string;
};

function Badge({ name, badge }: { name: string; badge: string }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex justify-end md:gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="cursor-default">
            {!imageLoaded && <Skeleton className="h-6 w-32 md:h-8 lg:h-10" />}
            <img
              className="rounded-md transition duration-200 hover:brightness-150 dark:invert"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              src={badge}
              alt={name}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

function Skill({ category, items }: { category: string; items: Skill[] }) {
  return (
    <div className="mx-auto items-center justify-center">
      <CardTitle className="mb-2 text-center text-base uppercase md:text-lg xl:text-xl">{category}</CardTitle>
      <div className="flex flex-col items-center gap-y-1">
        {items.map((item, index) => (
          <Badge key={index} name={item.name} badge={item.badge} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
