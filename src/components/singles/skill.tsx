import { CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import { motion } from 'motion/react';

type Skill = {
  name: string;
  badge: string;
};

function Badge({ name, badge }: { name: string; badge: string }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        rotateZ: Math.floor(Math.random() * 10) - 5,
        transition: { duration: 0.2, ease: 'easeInOut' },
        zIndex: 99,
      }}
      className="flex justify-end md:gap-2">
      {!imageLoaded && <Skeleton className="h-6 w-32 md:h-8 lg:h-10" />}
      <img
        className="rounded-md transition duration-200 hover:brightness-150 dark:invert"
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        src={badge}
        alt={name}
      />
    </motion.div>
  );
}

function Skill({ category, items }: { category: string; items: Skill[] }) {
  return (
    <div className="mx-auto items-center justify-center">
      <CardTitle className="mb-2 text-center font-display text-base uppercase md:text-lg xl:text-xl">
        {category}
      </CardTitle>
      <div className="flex flex-col items-center gap-y-1">
        {items.map((item, index) => (
          <Badge key={index} name={item.name} badge={item.badge} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
