import { Container } from "./Layout";
import logo from '../assets/logo.svg';
import MenuIcon from './navbar/MenuIcon';

const Navbar = ({ theme }) => {
  return (
    <Container className="fixed flex items-center justify-between w-full z-[100] mt-[25px] mix-blend-difference">
      <a href="#header">
        <img src={logo} alt="logo RB" className="w-[45px]" />
      </a>
      <MenuIcon theme={theme} className="mx-auto menu-icon" />
      <div className='w-[45px]'></div>
    </Container>
  );
};

export default Navbar;
