import { Card, CardTitle } from '../ui/card';
import data from '../../data.json';
import Skill from '../singles/Skill';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface skill {
  name: string;
  badge: string;
}

const SkillCategory = ({ category, items }: { category: string; items: skill[] }) => (
  <Card
    className="
    mx-2
    flex w-full
    flex-col border-2
    bg-white/40 p-4 transition 
    duration-200 ease-in
    dark:bg-black/40 md:mx-0 md:hover:border-neutral-300 md:dark:hover:border-neutral-700">
    <CardTitle className="mx-auto mb-4 mt-0 text-center uppercase">{category}</CardTitle>
    <div className="grid w-full grid-cols-2 justify-evenly gap-y-4 odd:before:border-2 lg:flex">
      {Object.keys(items).map((category: string, index: number) => (
        // @ts-expect-error: index signature for dynamic access
        <Skill key={index} category={category} items={items[category]} />
      ))}
    </div>
  </Card>
);

function Skills() {
  return (
    <div className="mx-auto w-full md:w-3/5 lg:mb-4 2xl:w-2/5">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}>
        <CarouselContent>
          {Object.keys(data.skills).map((category: string, index: number) => (
            <CarouselItem key={index} className="flex w-full">
              {/* @ts-expect-error: index signature for dynamic access */}
              <SkillCategory category={category} items={data.skills[category]} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Skills;
