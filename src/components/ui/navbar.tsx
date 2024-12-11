import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Logo from "./logo";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center justify-center px-4">
      <div className="flex justify-between w-full max-w-screen-xl items-center">
        {/* Logo */}
        <div className="lg:flex filter-none dark:filter invert">
          <Logo className="w-auto h-[4rem] lg:h-20 mt-1 ml-[-15px]" />
        </div>

        {/* Menu Button (for mobile) */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden ml-auto">
              <Menu />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="mr-6 hidden lg:flex">
              <Logo className="h-6 w-6" />
            </div>
            <div className="grid gap-2 py-6">
              <a href="#" className="flex w-full items-center py-2 text-lg font-semibold">
                Sobre
              </a>
              <a href="#" className="flex w-full items-center py-2 text-lg font-semibold">
                Contato
              </a>
              <a href="#" className="flex w-full items-center py-2 text-lg font-semibold">
                Projetos
              </a>
            </div>
          </SheetContent>
        </Sheet>

        {/* Navbar Links (for larger screens) */}
        <nav className="ml-auto hidden lg:flex gap-6">
          <Button variant="link" className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg">
            Sobre
          </Button>

          <Button variant="link" className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg">
            Contato
          </Button>

          <Button variant="link" className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-lg">
            Projetos
          </Button>
        </nav>
      </div>
    </header>
  );
}

