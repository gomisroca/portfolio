import { Avatar, AvatarImage } from './ui/avatar';
import { CardContent, CardHeader, CardTitle } from './ui/card';
import { Highlight } from './ui/highlight';
import data from '../data.json';
import { FlipWords } from './ui/flip-words';
import { useState } from 'react';
import { Skeleton } from './ui/skeleton';

function Banner() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoaded = () => {
    setImageLoaded(true);
  };
  return (
    <div className="mt-4 md:mx-5">
      <Avatar className="m-auto size-1/2 md:h-1/6 md:w-1/3 xl:w-1/6">
        {!imageLoaded && (
          <Skeleton
            data-testid="avatar-fallback"
            className="h-48 w-full rounded-full md:h-60 lg:h-80 xl:h-52 2xl:h-[19rem]"
          />
        )}
        <AvatarImage src={data.banner.image} alt="avatar" onLoad={() => handleImageLoaded()} />
      </Avatar>
      <div className="mx-auto w-full md:w-3/5 lg:mb-4 2xl:w-2/5">
        <div className="flex flex-col items-center text-center">
          <CardHeader className="px-4 py-2">
            <CardTitle className="text-5xl uppercase md:text-6xl">Adrià Gomis</CardTitle>
          </CardHeader>
          <CardContent className="h-[70px] w-auto text-nowrap px-4 py-2 text-center text-lg md:w-[375px] md:p-0 md:text-start">
            <Highlight className="mx-1 p-2 font-semibold">Full-stack Developer</Highlight>
            specializing in{' '}
            <FlipWords
              className="px-0 font-semibold"
              words={['React', 'Express', 'Next.js', 'PostgreSQL', 'MongoDB']}
              duration={2000}
            />
          </CardContent>
        </div>
        <div className="flex flex-col items-center pb-2 text-center">
          <CardHeader className="pb-2 pt-0">
            <CardTitle className="uppercase">About Me</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-2 px-4 py-2 text-center md:p-0">
            <p>
              I am a self-taught full-stack developer who has worked on several projects both in teams and on my own.
            </p>
            <p>
              Throughout my learning journey, I have always looked to expand my knowledge and to step out of my comfort
              zone, be it by seeking out new technologies, taking on complex problems, or studying an assortment of
              courses and books.
            </p>
            <p>
              My passion is in creating efficient, modern projects that are easy to use and attractive for the end user
              and have a clear and concise codebase that can be iterated upon.
            </p>
          </CardContent>
        </div>
      </div>
    </div>
  );
}

export default Banner;
