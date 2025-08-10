import React from 'react';
import squareIcon from '../assets/icons/square.svg';
import { Container, Wrapper } from "./Layout";

const Tech = () => {
  const technologies = [
    'JS', 'React', 'Next.js', 'TypeScript', 'WordPress', 'PHP', 'Laravel',
    'Node.js', 'MySQL', 'PhpMyAdmin', 'Tailwind',
    'Git', 'Github/Gitlab', 'Docker', 'HTML', 'CSS/SCSS', 'Adobe XD/Figma', 'Adobe Illustrator', 'Adobe Photoshop'
  ];

  return (
    <section id="tech" className="bg-black text-white py-[90px] md:py-[150px]">
      <Container className="">
        <Wrapper className="">
          <h2 className="text-2xl md:text-3xl font-bold mb-20 text-center">Technologies</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
            {technologies.map((tech) => (
              <li key={tech} className="flex items-center">
                <img src={squareIcon} alt="" className="w-3 h-3 mr-3" />
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </Wrapper>
      </Container>
    </section>
  );
};

export default Tech;
