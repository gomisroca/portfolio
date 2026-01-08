import { MousePointerClick } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { motion } from "framer-motion";

function Lightbox({
  children,
  dialogClass,
}: {
  children: React.ReactNode;
  dialogClass?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger className="w-full cursor-pointer">
        <motion.span
          animate={{
            scale: 1.1,
            rotateZ: 10,
            transition: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
          className="absolute top-2 right-2 rounded-full bg-zinc-200 p-1 shadow-md dark:bg-zinc-800"
        >
          <MousePointerClick className="h-6 w-6 text-zinc-800 dark:text-zinc-200" />
        </motion.span>
        {children}
      </DialogTrigger>
      <DialogContent className={dialogClass}>{children}</DialogContent>
    </Dialog>
  );
}

export default Lightbox;
