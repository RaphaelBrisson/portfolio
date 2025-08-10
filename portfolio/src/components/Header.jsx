import React from 'react';
import { Container } from "../components/Layout";

import photo from '../assets/raphael.jpg';

import { motion, AnimatePresence } from "framer-motion";


const Header = React.forwardRef(({ theme }, ref) => {
  return (
    <header className="flex h-svh relative max-md:flex-col" id="header" ref={ref}>

      <div className="flex md:bg-black text-white w-full md:w-1/2 relative h-full max-md:absolute max-md:top-1/2 max-md:translate-y-[-50%]">

        <Container className="flex flex-col justify-center max-md:justify-end max-md:h-[80%]">
          
          <h1>
            <span className="font-extrabold text-4xl md:text-5xl mb-2 block">Raphaël Brisson</span>
            <span className="font-light text-xl md:text-2xl">Développeur Web</span>
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

        <div className="flex justify-center absolute bottom-[35px] left-0 w-full">
          <a href="#introduction" className='group'>

            <svg
              viewBox="0 0 100 100"
              width="40"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
            >
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

      <div className="relative z-[-1] w-1/2 h-full max-md:w-full max-md:after:content-[''] max-md:after:absolute max-md:after:inset-0 max-md:after:bg-black max-md:after:opacity-50">
        <img src={photo} alt="Raphaël Brisson" className="object-cover w-full h-full" />
      </div>
    </header>
  );
});

export default Header;