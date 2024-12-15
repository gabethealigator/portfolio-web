import { Button } from "@/components/ui/button";
import ThemeToggleButton from "./theme_button";

export default function NavbarTop() {
  return (
    <header className="hidden lg:flex h-14 w-full items-center justify-center fixed backdrop-blur drop-shadow-sm z-10">
      <div className="flex justify-between w-full max-w-screen-md">
        <nav className="m-auto flex gap-6 items-center">
          <Button variant="link" className="group flex h-9 w-max items-center justify-center px-4 py-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg">
              Sobre
          </Button>

          <Button variant="link" className="group flex h-9 w-max items-center justify-center px-4 py-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg">
              Contato
          </Button>

          <Button variant="link" className="group flex h-9 w-max items-center justify-center px-4 py-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg">
              Projetos
          </Button>

          <Button variant="link" className="group flex h-9 w-max items-center justify-center px-4 py-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg">
              Repositorio
          </Button>

          <ThemeToggleButton variant="outline" />
        </nav>
      </div>
    </header>
  );
}

