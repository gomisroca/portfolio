import { MousePointerClick } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Lightbox({
  children,
  dialogClass,
}: {
  children: React.ReactNode;
  dialogClass?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
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
          className="absolute right-2 top-2 rounded-full bg-zinc-200 p-1 shadow-md dark:bg-zinc-800"
        >
          <MousePointerClick className="h-6 w-6 text-zinc-800 dark:text-zinc-200" />
        </motion.span>
        {children}
      </DialogTrigger>
      <DialogContent className={cn("rounded-md", dialogClass)}>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Lightbox;
