import { CardTitle } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type Content = {
  name: string;
  badge: string;
  specialized?: boolean;
};

type Skill = {
  name: string;
  content: Content[];
};

function Skill({ skill }: {skill: Skill}) {
  return (
    <div className="items-center justify-center mx-auto">
      <CardTitle className="uppercase mb-2 text-xl text-center">{skill.name}</CardTitle>
      <div className="items-start">
      {skill.content.map(content => (
        <div className="flex md:gap-2 justify-end" key={content.name}>
           {content.specialized && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="cursor-default">🔥</TooltipTrigger>
                <TooltipContent>
                  <p>High Proficiency</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="cursor-default">
                <div className="flex items-center">
                  <img
                    src={content.badge}
                    alt={content.name}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{content.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Skill
