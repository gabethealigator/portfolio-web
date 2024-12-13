import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);

    if (newIsDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
    if (!newIsDarkMode) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="flex h-14 w-full items-center justify-center px-3 fixed backdrop-blur drop-shadow-sm">
      <div className="flex justify-between w-full max-w-screen-md items-center">
        <nav className="m-auto hidden lg:flex gap-6 items-center">
          <Button variant="link" className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg">
            Sobre
          </Button>

          <Button variant="link" className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg">
            Contato
          </Button>

          <Button variant="link" className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg">
            Projetos
          </Button>

          <Button variant="link" className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg">
            Repositorio
          </Button>

          <Button
            variant="outline"
            className="ml-4 rounded-3xl w-10 h-10 flex items-center justify-center"
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
        </nav>
      </div>
    </header>
  );
}

