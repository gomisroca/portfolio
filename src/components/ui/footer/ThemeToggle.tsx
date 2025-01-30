import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Initialize theme on component mount
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";

    // Determine initial theme
    const initialTheme =
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    setTheme(initialTheme);
    updateTheme(initialTheme);

    // Add event listener for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      updateTheme(newTheme);
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  const updateTheme = (newTheme: "light" | "dark") => {
    // Update document class
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save to localStorage
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    updateTheme(newTheme);
  };

  return (
    <motion.button
      id="themeToggle"
      className="w-fit rounded-md px-2 font-semibold text-zinc-500 hover:text-primary-500"
      onClick={toggleTheme}
      whileHover={{
        scale: 1.25,
        rotate: 0,
        transition: {
          duration: 0.2,
        },
      }}
      whileTap={{
        scale: 1.5,
        zIndex: 10,
        rotate: 180,
        transition: {
          duration: 0.1,
        },
      }}
    >
      {theme === "light" ? (
        <Sun data-testid="sun-icon" className="h-4 w-4" />
      ) : (
        <Moon data-testid="moon-icon" className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
