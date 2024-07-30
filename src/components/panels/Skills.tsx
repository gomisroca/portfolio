import { Card, CardTitle } from '@/components/ui/card'
import data from '@/data.json'
import Skill from '@/components/singles/Skill';
import { Carousel, CarouselContent, CarouselItem,  } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"

interface skill {
  name: string;
  badge: string;
}

const SkillCategory = ({ category, items }: {category: string, items: skill[]}) => (
  <Card className='
    p-4
    mx-2 md:mx-0
    flex flex-col
    border-2 md:hover:border-neutral-300 md:dark:hover:border-neutral-700 
    bg-white/40 dark:bg-black/40
    transition ease-in duration-200 w-full'>
    <CardTitle className="uppercase text-center mx-auto mt-0 mb-4">{category}</CardTitle>
    <div className='grid grid-cols-2 lg:flex justify-evenly w-full gap-y-4 odd:before:border-2'>
      {Object.keys(items).map((category: string, index: number) => (
        // @ts-ignore: index signature for dynamic access
        <Skill key={index} category={category} items={items[category]} />
      ))}
    </div>
  </Card>
);

function Skills() {
  return (
    <div className="w-full md:w-3/5 2xl:w-2/5 mx-auto lg:mb-4">
      <Carousel 
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      >
        <CarouselContent>
          {Object.keys(data.skills).map((category: string, index: number) => (
            <CarouselItem
            key={index} 
            className="w-full flex"
            >
              {/* @ts-ignore: index signature for dynamic access */}
              <SkillCategory category={category} items={data.skills[category]} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Skills
