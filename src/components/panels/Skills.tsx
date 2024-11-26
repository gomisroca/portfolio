import { CardTitle } from '@/components/ui/card';
import data from '@/data.json';
import Skill from '@/components/singles/skill';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'motion/react';

interface skill {
  name: string;
  badge: string;
}

const SkillCategory = ({ category, items }: { category: string; items: skill[] }) => {
  return (
    <motion.div
      dragConstraints={{ left: 0, right: 0 }}
      drag="x"
      whileDrag={{
        scale: 0.5,
        opacity: 0.5,
        transition: { duration: 2, ease: 'linear' },
      }}
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%'], // Gradient animation
        transition: {
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        },
      }}
      className="mx-2 flex w-full flex-col rounded-lg border-2 bg-gradient-to-br from-cyan-500 to-rose-500 bg-[length:200%_200%] p-[1px] shadow-sm transition duration-200 ease-in hover:opacity-90 dark:opacity-80 md:mx-0">
      <div className="flex h-full w-full flex-col rounded-md bg-zinc-50 p-4 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
        <CardTitle className="mx-auto mb-4 mt-0 text-center font-display uppercase">{category}</CardTitle>
        <div className="grid w-full grid-cols-2 justify-evenly gap-y-4 odd:before:border-2 lg:flex">
          {Object.keys(items).map((category: string, index: number) => (
            // @ts-expect-error: index signature for dynamic access
            <Skill key={index} category={category} items={items[category]} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

function Skills() {
  return (
    <div className="mx-auto w-full rounded-md md:w-3/5 lg:mb-4 2xl:w-2/5">
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
