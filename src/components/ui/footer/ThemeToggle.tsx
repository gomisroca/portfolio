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
    <button
      id="themeToggle"
      className="hover:text-primary-500 w-fit cursor-pointer rounded-md px-2 font-semibold text-zinc-500 transition duration-200 ease-in-out hover:scale-110 active:scale-90"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <Sun data-testid="sun-icon" className="h-4 w-4" />
      ) : (
        <Moon data-testid="moon-icon" className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
