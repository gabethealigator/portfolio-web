import { FiFileText, FiHome, FiMenu, FiUser } from "react-icons/fi";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggleButton from "./theme_button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from "@/components/ui/drawer";
import React from "react";

export default function NavBarBot() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className="lg:hidden fixed z-10 bottom-0 backdrop-blur w-full h-14 px-4">
        <div className="flex items-center h-full justify-between">
          <nav className="flex items-center">
            <Button variant="ghost" className="h-10 w-10 rounded-full">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiHome />
                </motion.div>
              </AnimatePresence>
            </Button>
          </nav>

          <nav>
            <ThemeToggleButton variant="ghost" />

            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" className="h-10 w-10 rounded-full">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiMenu />
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="gap-6 p-6">
                  <div className="flex justify-evenly gap-6">
                    <div className="flex flex-col items-center">
                      <Button variant="ghost" className="h-10 w-10">
                        <FiHome />
                      </Button>
                      <span className="text-xs">Home</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Button variant="ghost" className="h-10 w-10">
                        <FiUser />
                      </Button>
                      <span className="text-xs">Sobre</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Button variant="ghost" className="h-10 w-10">
                        <FiFileText />
                      </Button>
                      <span className="text-xs">Habilidades</span>
                    </div>
                  </div>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          </nav>
        </div>
      </header>
    </>
  );
}
