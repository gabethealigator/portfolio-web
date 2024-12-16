import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/lib/theme_provider";
import { useCursorContext } from "@/lib/cursor_context_provider";

const ThemeToggleButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { theme, setTheme } = useTheme();
  const { setCursorVariant } = useCursorContext();
  return (
    <Button
      {...props}
      ref={ref}
      className={`ml-4 rounded-full w-10 h-10 relative ${props.className || ""}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      onMouseEnter={() => setCursorVariant('buttonHover')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 45, opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          {theme === "dark" ? (
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiSun />
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMoon />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
});

export default ThemeToggleButton;

