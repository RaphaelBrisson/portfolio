import { useState, useRef } from "react";
import { Container } from "./Layout";
import logo from '../assets/logo.svg';
import MenuIcon from './navbar/MenuIcon';
import { motion, AnimatePresence } from "framer-motion";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Navbar = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);

  useOnClickOutside(menuRef, closeMenu, menuIconRef);

  return (
    <>
    <Container className="fixed flex items-center justify-between w-full z-[100] mt-[25px] mix-blend-difference">
      <a href="#header">
        <img src={logo} alt="logo RB" className="w-[45px]" />
      </a>
      <div ref={menuIconRef}>
        <MenuIcon 
          theme={theme} 
          className="mx-auto menu-icon" 
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen} 
        />
      </div>
      <div className='w-[45px]'></div>
      
    </Container>
    <AnimatePresence>
        {isMenuOpen && (
          <motion.ul 
            ref={menuRef}
            initial={{ opacity: 0, y: -20, translateX: '50%' }}
            animate={{ opacity: 1, y: 0, translateX: '50%' }}
            exit={{ opacity: 0, y: -20, translateX: '50%' }}
            transition={{ duration: 0.3 }}
            className="fixed text-white top-[52px] right-1/2 translate-x-1/2 text-center z-10 bg-black px-14 pt-10 pb-4 [&>li]:mb-4 [&>li]:ease-in-out [&>li]:duration-300 [&>li:hover]:text-accent border border-white border-opacity-10"
          >
            <li><a href="#introduction" onClick={closeMenu}>Introduction</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projets</a></li>
            <li><a href="#experiences-formations" onClick={closeMenu}>Expériences</a></li>
            <li><a href="#experiences-formations" onClick={closeMenu}>Formations</a></li>
            <li><a href="#tech" onClick={closeMenu}>Technologies</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;