import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { MousePointerClick } from 'lucide-react';

function About() {
  const [display, setDisplay] = useState(false);
  return (
    <div className="mx-auto flex w-fit flex-col items-center pb-2 text-center" onClick={() => setDisplay(!display)}>
      {!display && (
        <motion.span
          animate={{
            scaleX: [1, 1.1],
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: 'mirror',
            },
          }}>
          <Button className="flex flex-row gap-2 font-display font-semibold uppercase" onClick={() => setDisplay(true)}>
            <span>About me</span>
            <MousePointerClick />
          </Button>
        </motion.span>
      )}
      {display && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            type: 'spring',
            duration: 0.2,
            damping: 25,
            stiffness: 500,
          }}
          className="flex flex-col gap-y-2 px-4 py-2 text-center md:p-0">
          <p>I am a self-taught full-stack developer who has worked on several projects both in teams and on my own.</p>
          <p>
            Throughout my learning journey, I have always looked to expand my knowledge and to step out of my comfort
            zone, be it by seeking out new technologies, taking on complex problems, or studying an assortment of
            courses and books.
          </p>
          <p>
            My passion is in creating efficient, modern projects that are easy to use and attractive for the end user
            and have a clear and concise codebase that can be iterated upon.
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default About;
