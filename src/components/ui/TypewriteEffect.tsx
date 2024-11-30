import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function Typewriter({
  text = "",
  speed = 50,
  className = "",
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    // Ensure text is a string and reset displayed text
    const safeText = text || "";
    setDisplayedText("");

    // If text is empty, do nothing
    if (!safeText) return;

    // Create typing effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= safeText.length) {
        setDisplayedText(safeText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    // Cleanup interval on component unmount or text change
    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return (
    <div className={`inline-block ${className}`}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
      </motion.span>
    </div>
  );
}
