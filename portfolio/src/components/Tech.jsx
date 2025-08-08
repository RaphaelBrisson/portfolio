import React from 'react';
import squareIcon from '../assets/icons/square.svg';
import { Container, Wrapper } from "./Layout";

const Tech = () => {
  const technologies = [
    'JavaScript', 'React', 'Next.js', 'TypeScript', 'PHP', 'Laravel',
    'Node.js', 'MySQL', 'PhpMyAdmin', 'Tailwind CSS','WordPress',
    'Git', 'Github/Gitlab','HTML', 'CSS/SCSS', 'Adobe XD', 'Figma', 'Adobe Illustrator', 'Adobe Photoshop'
  ];

  return (
    <section id="tech" className="bg-black text-white py-[150px]">
      <Container className="">
        <Wrapper className="">
          <h2 className="text-[3rem] font-bold mb-20 text-center">Technologies</h2>
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
