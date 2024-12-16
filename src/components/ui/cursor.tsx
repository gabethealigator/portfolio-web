import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useCursorContext } from "@/lib/cursor_context_provider"

function CustomCursor() {
  const { cursorVariant } = useCursorContext()
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 15, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const variants = {
    default: {
      scale: 1,
      backgroundColor: "white",
      mixBlendMode: "difference" as const,
    },
    buttonHover: {
      scale: 1.5,
      backgroundColor: "white",
      mixBlendMode: "difference" as const,
    },
    textHover: {
      height: "20px",
      width: "5px",
      backgroundColor: "white",
      mixBlendMode: "difference" as const,
    }
  };

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        cursorX.set(centerX - 10 + distanceX * 0.1);
        cursorY.set(centerY - 10 + distanceY * 0.1);
      } else {
        cursorX.set(clientX - 10);
        cursorY.set(clientY - 10);
      }
    };

    const handleButtonMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON') {
        setTargetElement(target);
      }
    };

    const handleButtonMouseLeave = () => {
      setTargetElement(null);
    };

    window.addEventListener('mousemove', moveCursor);

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleButtonMouseEnter);
      button.addEventListener('mouseleave', handleButtonMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleButtonMouseEnter);
        button.removeEventListener('mouseleave', handleButtonMouseLeave);
      });
    };
  }, [targetElement]);

  return (
    <motion.div
      className="fixed left-0 top-0 w-5 h-5 rounded-full z-50 pointer-events-none bg-white mix-blend-difference hidden lg:block md:block"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 150
      }}
    />
  );
}

export default CustomCursor;
