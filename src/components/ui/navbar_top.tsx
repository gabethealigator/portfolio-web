import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggleButton from "./theme_button";
import { FiHome } from "react-icons/fi";

export default function NavbarTop() {
  return (
    <header className="hidden lg:flex md:flex h-14 w-full items-center justify-center fixed backdrop-blur drop-shadow-sm z-10">
      <div className="flex justify-between w-full max-w-screen-md">
        <nav className="m-auto flex gap-14 items-center">
          <Button
            variant="ghost" className="h-10 w-10 rounded-full"
            onClick={() => scrollToSection("home")}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiHome />
              </motion.div>
            </AnimatePresence>
          </Button>

          <Button
            variant="link"
            className="group flex h-9 w-max items-center justify-center px-0 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg"
            onClick={() => scrollToSection("sobre")}
          >
            Sobre
          </Button>

          <Button
            variant="link"
            className="group flex h-9 w-max items-center justify-center px-0 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg"
            onClick={() => scrollToSection("habilidades")}
          >
            Habilidades
          </Button>

          <Button
            variant="link"
            className="group flex h-9 w-max items-center justify-center px-0 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg"
            onClick={() => scrollToSection("historico")}
          >
            Histórico
          </Button>

          <Button
            variant="link"
            className="grouVjp flex h-9 w-max items-center justify-center px-0 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg"
            onClick={() => window.open("https://github.com/gabrielmslima/portfolio-web")}
          >
            Repositorio
          </Button>

          <ThemeToggleButton variant="ghost" />
        </nav>
      </div>
    </header>
  );
}

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
