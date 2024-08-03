import { CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type Skill = {
  name: string;
  badge: string;
};

const Badge = ({ name, badge }: { name: string; badge: string }) => (
  <div className="flex md:gap-2 justify-end">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="cursor-default">
          <img
            className="rounded-md dark:invert hover:brightness-150 transition duration-200"
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
    <div className="items-center justify-center mx-auto">
      <CardTitle className="uppercase mb-2 text-center text-md md:text-lg xl:text-xl">{category}</CardTitle>
      <div className="flex flex-col gap-y-1 items-center">
        {items.map((item, index) => (
          <Badge key={index} name={item.name} badge={item.badge} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
