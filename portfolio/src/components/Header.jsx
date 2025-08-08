import React from 'react';
import { Container } from "../components/Layout";

import photo from '../assets/raphael.jpg';

import { motion, AnimatePresence } from "framer-motion";


const Header = React.forwardRef(({ theme }, ref) => {
  return (
    <header className="flex h-svh relative" id="header" ref={ref}>

      <div className="flex bg-black text-white w-1/2 relative">

        {/* Center: Name and Title */}
        <Container className="flex flex-col justify-center">
          <h1>
            <span className="font-extrabold text-3xl mb-2 block">Raphaël Brisson</span>
            <span className="font-light text-2xl">Développeur Web</span>
          </h1>

          <AnimatePresence mode="wait">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              className="w-[40px] h-[3px] bg-accent mt-6 origin-left"
              transformOrigin="left center"
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
            </motion.span>
          </AnimatePresence>
        </Container>

        {/* Bottom: Down arrow */}
        <div className="flex justify-center absolute bottom-[25px] left-0 w-full">
          <a href="#introduction" className='group'>

          <svg
            viewBox="0 0 100 100"
            width="40"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Losange */}
            <polygon
              points="50,5 95,50 50,95 5,50"
              fill="none"
              stroke="white"
              strokeWidth="5"
              className="transition duration-300 origin-center group-hover:rotate-[15deg] group-hover:stroke-accent"
            />
            <motion.g
              animate={{ translateY: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <line x1="38" y1="46" x2="50" y2="58" stroke="white" strokeWidth="7" strokeLinecap="round"></line>
              <line x1="62" y1="46" x2="50" y2="58" stroke="white" strokeWidth="7" strokeLinecap="round"></line>
            </motion.g>

          </svg>
        </a>
        </div>
      </div>
      {/* Right side: Photo */}
      <div className="w-1/2 h-full">
        <img src={photo} alt="Raphaël Brisson" className="object-cover w-full h-full" />
      </div>
    </header>
  );
});

export default Header;