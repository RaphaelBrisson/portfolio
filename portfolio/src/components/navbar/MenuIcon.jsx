import { useState } from "react";
import { motion, AnimatePresence, transform } from "framer-motion";

export default function MenuIcon({className = ""}) {
  const [open, setOpen] = useState(false);

  return (
    <button
      className={`${className}` + ' h-[55px] w-[55px] group isolate'}
      onClick={() => setOpen((v) => !v)}
      aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
    >
      <svg viewBox="0 0 100 100" width="55" height="55" xmlns="http://www.w3.org/2000/svg">
        {/* Losange */}
        <polygon
          points="50,5 95,50 50,95 5,50"
          fill="none"
          stroke="white"
          strokeWidth="3"
          className="transition duration-300 origin-center group-hover:rotate-[15deg] group-hover:stroke-accent"
        />

        {/* Animation */}
        <g>
          <AnimatePresence mode="wait">
            {!open ? <BurgerLines key="burger" /> : <CrossLines key="cross" />}
          </AnimatePresence>
        </g>
      </svg>
    </button>
  );
}

function BurgerLines() {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transform="translate(32, 35)"
    >
      <motion.rect
        y="0"
        width="36"
        height="5"
        fill="white"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transformOrigin="left center"
        transition={{ duration: 0.2 }}
      />
      <motion.rect
        y="12"
        width="36"
        height="5"
        fill="white"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transformOrigin="left center"
        transition={{ duration: 0.25, delay: 0.05 }}
      />
      <motion.rect
        y="24"
        width="36"
        height="5"
        fill="white"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transformOrigin="left center"
        transition={{ duration: 0.3, delay: 0.1 }}
      />
    </motion.g>
  );
}

function CrossLines() {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Ligne \ */}
      <motion.line
        x1="50"
        y1="50"
        x2="50"
        y2="50"
        animate={{ x1: 38, y1: 38, x2: 62, y2: 62 }}
        exit={{ x2: 50, y2: 50 }}
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        transition={{ duration: 0.2 }}
      />
      {/* Ligne / */}
      <motion.line
        x1="50"
        y1="50"
        x2="50"
        y2="50"
        animate={{ x1: 62, y1: 38, x2: 38, y2: 62 }}
        exit={{ x2: 50, y2: 50 }}
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        transition={{ duration: 0.2 }}
      />
    </motion.g>
  );
}
