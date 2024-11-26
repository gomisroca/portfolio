import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import data from '@/data.json';
import { FlipWords } from '@/components/ui/flip-words';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import About from './panels/About';

function Banner() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoaded = () => {
    setImageLoaded(true);
  };
  return (
    <div className="mt-4 md:mx-5">
      <Avatar className="m-auto mb-4 h-fit rounded-3xl md:h-1/6 md:w-1/3 xl:w-1/6">
        {!imageLoaded && (
          <Skeleton
            data-testid="avatar-fallback"
            className="h-48 w-full rounded-3xl md:h-60 lg:h-80 xl:h-52 2xl:h-[19rem]"
          />
        )}
        <AvatarImage
          src={data.banner.image}
          alt="avatar"
          onLoad={() => handleImageLoaded()}
          className="rounded-3xl object-cover dark:brightness-75"
        />
      </Avatar>
      <div className="mx-auto w-full md:w-3/5 lg:mb-4 2xl:w-2/5">
        <div className="flex flex-col items-center text-center">
          <CardHeader className="px-4 py-2">
            <CardTitle className="font-display text-5xl uppercase md:text-6xl">Adrià Gomis</CardTitle>
          </CardHeader>
          <CardContent className="flex h-[70px] w-auto flex-row gap-x-1 text-nowrap px-4 py-2 text-center text-sm md:w-[375px] md:p-0 md:text-start md:text-lg">
            <span className="font-semibold">Full-stack Developer</span>
            <span>specializing in</span>
            <FlipWords
              className="px-0 font-semibold"
              words={['React', 'Express', 'Next.js', 'PostgreSQL', 'MongoDB']}
              duration={2000}
            />
          </CardContent>
        </div>
        <About />
      </div>
    </div>
  );
}

export default Banner;
