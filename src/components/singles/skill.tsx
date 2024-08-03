import { CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type Skill = {
  name: string;
  badge: string;
};

const Badge = ({ name, badge }: { name: string; badge: string }) => (
  <div className="flex justify-end md:gap-2">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="cursor-default">
          <img
            className="rounded-md transition duration-200 hover:brightness-150 dark:invert"
            loading="lazy"
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
