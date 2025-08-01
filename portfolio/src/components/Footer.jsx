import React from 'react';
import { Container } from "./Layout";
import logo from '../assets/logo-black.svg';

const Footer = () => {
  return (
    <footer className="pb-[50px]">
      
      <Container>
        <div className="flex flex-col justify-between items-center">
          <p className="mb-12">
            À bientôt 👋
          </p>
          <img src={logo} alt="logo RB" className="w-[45px]" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
