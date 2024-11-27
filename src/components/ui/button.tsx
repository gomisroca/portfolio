import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Button({
  children,
  id,
  onClick,
  className,
  tooltip,
}: {
  children: React.ReactNode;
  id?: string;
  onClick?: () => void;
  className?: string;
  tooltip: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.button
            id={id ?? "button"}
            onClick={onClick}
            className={cn(
              "font-semibold bg-neutral-700 dark:bg-neutral-300 text-neutral-100 dark:text-neutral-900 dark:hover:text-primary-700 hover:text-primary-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 w-fit rounded-xl p-2",
              className
            )}
            whileHover={{
              scale: 1.25,
              zIndex: 10,
              transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 10,
              },
            }}
            whileTap={{
              scale: 1.5,
              zIndex: 10,
              transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 15,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
              duration: 0.4,
            }}
          >
            {children}
          </motion.button>
        </TooltipTrigger>
        <TooltipContent className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

Button.displayName = "Button";
export default Button;
