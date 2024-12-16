import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import React from "react";

const TextCycle: React.FC<{ className?: string }> = React.memo(({ className }) => {
  const words = useMemo(() => ["Inovador", "Solucionador", "Artesão", "Desenvolvedor", "Criador", "Técnico"], []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        className="absolute"
        key={index}
        initial={{ y: "-80%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "80%", opacity: 0 }}
        transition={{ duration: 0.37 }}
      >
        <p className={`${className}`}>{words[index]}</p>
      </motion.div>
    </AnimatePresence>
  );
});

export default TextCycle;

