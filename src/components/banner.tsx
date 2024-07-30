import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Highlight } from '@/components/ui/highlight'
import data from '@/data.json'
import { FlipWords } from '@/components/ui/flip-words'
import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

function Banner() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const handleImageLoaded = () => {
    setImageLoaded(true)
  }
  return (
    <div className='md:mx-5 mt-4'>
      <Avatar className="h-1/2 md:h-1/6 w-1/2 md:w-1/3 xl:w-1/6 m-auto">
        {!imageLoaded && <Skeleton className='h-48 md:h-60 lg:h-80 xl:h-52 2xl:h-[19rem] w-full rounded-full' /> }
        <AvatarImage 
        src={data.banner.image} 
        alt="avatar" 
        onLoad={() => handleImageLoaded()} />
        <AvatarFallback data-testid="avatar-fallback">AG</AvatarFallback>
      </Avatar>
      <div className='w-full md:w-3/5 2xl:w-2/5 mx-auto lg:mb-4'>
        <div className='flex flex-col items-center text-center'>
          <CardHeader className="px-4 py-2">
            <CardTitle className='text-5xl md:text-6xl uppercase'>Adrià Gomis</CardTitle>
          </CardHeader>
          <CardContent className="px-4 py-2 md:px-0 md:py-0 text-center md:text-start text-lgtext-nowrap w-auto md:w-[375px] h-[70px]">
              <Highlight className='font-semibold mx-1 p-2'>Full-stack Developer</Highlight>
              specializing in <FlipWords className='px-0 font-semibold' words={['React', 'Express', 'Next.js', 'PostgreSQL', 'MongoDB']} duration={2000} />
          </CardContent>
        </div>
        <div className="flex flex-col items-center text-center pb-2">
          <CardHeader className='pb-2 pt-0'>
            <CardTitle className='uppercase'>About Me</CardTitle>
          </CardHeader>
          <CardContent className="px-4 py-2 md:px-0 md:py-0 text-center gap-y-2 flex flex-col">
            <p>I am a self-taught full-stack developer who has worked on several projects both in teams and on my own.</p>
            <p>Throughout my learning journey, I have always looked to expand my knowledge and to step out of my comfort zone, be it by seeking out new technologies, taking on complex problems, or studying an assortment of courses and books.</p>
            <p>My passion is in creating efficient, modern projects that are easy to use and attractive for the end user and have a clear and concise codebase that can be iterated upon.</p>
          </CardContent>
        </div>
      </div>
    </div>
  )
}

export default Banner