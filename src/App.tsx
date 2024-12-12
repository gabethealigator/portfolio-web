import { Button } from "./components/ui/button";
import Navbar from "./components/ui/navbar";
import { ThemeProvider } from "./lib/theme_provider";
import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { FiGithub, FiLinkedin, FiMoon, FiSun } from "react-icons/fi";

function App() {
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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <div className="h-80"></div>

      <div className="flex flex-col justify-center h-full text-left lg:w-2/6 mx-auto px-3">
        <div className="flex gap-3">
          <Button variant="outline" size="icon">
            <FiLinkedin/>
          </Button>
          <Button variant="outline" size="icon">
            <FiGithub/>
          </Button>
        </div>

        <p className="border border-muted rounded-sm p-3 w-auto font-medium text-md text-center mb-10 mt-2">
          Olá, sou dev Fullstack e moro em São Paulo.
        </p>

        <div className="flex items-center justify-between lg:flex-row flex-col-reverse">
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-semibold tracking-wide font-[Spectral]">
              Gabriel Nunes
            </h1>
            <p className="text-sm">
              Artesão Digital ( Programador / Inovador / Solucionador )
            </p>
          </div>

          <div className="flex justify-center order-[-1] mt-10 lg:mt-0 lg:order-1">
            <Avatar className="w-28 h-28 border border-muted">
              <AvatarImage src="https://avatars.githubusercontent.com/u/140721470?v=4" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div>
          <h1 className="font-[Spectral] text-2xl mt-10 underline underline-offset-[6px] decoration-muted decoration-[6px]">
            Sobre Mim
          </h1>

          <p className="text-justify mt-5">
            Olá! Meu nome é Gabriel Nunes, sou um desenvolvedor Fullstack de São Paulo, apaixonado por tecnologia e inovação. Atualmente, estou finalizando o curso de Desenvolvimento de Sistemas na ETEC de Sapopemba e já acumulo experiências com diversas ferramentas e linguagens.
          </p>
        </div>
      </div>

      <Button
        variant="outline"
        className="fixed bottom-4 mx-3 my-2 rounded-3xl w-10 h-10"
        onClick={toggleTheme}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: isDarkMode ? 45 : -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isDarkMode ? <FiSun/> : <FiMoon/>}
        </motion.div>
      </Button>
    </ThemeProvider>
  );
}

export default App;

