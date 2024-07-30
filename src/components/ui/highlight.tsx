"use client";
import { cn } from "@/lib/utils";
import { motion  } from "framer-motion";
import React from "react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r via-30% via-pink-200 to-rose-500 from-transparent dark:via-pink-800 dark:to-rose-600 text-black dark:text-white`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
