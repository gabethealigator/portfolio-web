import React, { useState } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggleButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);

    if (newIsDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Button
      {...props}
      ref={ref}
      className={`ml-4 rounded-full w-10 h-10 ${props.className || ""}`}
      onClick={toggleTheme}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: isDarkMode ? 45 : -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </motion.div>
    </Button>
  );
});

ThemeToggleButton.displayName = "ThemeToggleButton";

export default ThemeToggleButton;

