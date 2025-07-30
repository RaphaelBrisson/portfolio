// import photo from '../assets/raphael.jpg';
// function Header() {
//   return (
//     <header className="flex max-sm:flex-col items-center justify-center">
//       <h1 className='block flex-1/2 columns-2'>
//         <span className="font-extrabold text-6xl block">Raphaël Brisson</span>
//         <span className="font-light text-3xl block">Développeur Front-End</span>
//       </h1>
//       <img className='flex-1/2 columns-2' src={photo} alt="Raphaël Brisson" />
//     </header>
//   );
// }

// export default Header;

import { Container } from "../components/Layout";
import MenuIcon from './header/MenuIcon';

import logo from '../assets/logo.svg';
import photo from '../assets/raphael.jpg';

import { motion, AnimatePresence, transform } from "framer-motion";


function Header() {
  return (
    <header className="flex h-svh relative" id="header">

      {/* navbar */}
      <Container className="fixed flex items-center justify-between w-full z-[100] mt-[25px]">
        <a href="#header">
          <img src={logo} alt="logo RB" className="w-[45px]" />
        </a>
        <MenuIcon className="mx-auto" />
        <div className='w-[45px]'></div>
      </Container>


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
        <a href="#introduction" className="flex justify-center absolute bottom-[25px] w-full left-0 group">

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
            <g>
              <line x1="38" y1="50" x2="50" y2="62" stroke="white" strokeWidth="7" strokeLinecap="round"></line>
              <line x1="62" y1="50" x2="50" y2="62" stroke="white" strokeWidth="7" strokeLinecap="round"></line>
            </g>

          </svg>
        </a>
      </div>
      {/* Right side: Photo */}
      <div className="w-1/2 h-full">
        <img src={photo} alt="Raphaël Brisson" className="object-cover w-full h-full" />
      </div>
    </header>
  );
}

export default Header;