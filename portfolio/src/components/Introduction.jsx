import React from 'react';
import { Container, Wrapper } from "./Layout";
import targetBlankIcon from "../assets/icons/target-blank.svg";

const Introduction = React.forwardRef((props, ref) => {
    return (
        <section id="introduction" ref={ref} className="py-[150px] bg-white">
            <Container>
                <Wrapper className="text-center">
                    <p className="mb-14">
                        Curieux et touche à tout, je suis un développeur web avec une sensibilité artistique affirmée.<br />
                        Spécialisé dans le développement front-end, je m'intéresse aussi au back-end et à l'UX/UI, car j’aime comprendre et créer l’expérience dans son ensemble.<br />
                        Après une période consacrée à d'autres projets personnels, je suis de retour et je me suis remis à niveau en explorant des technologies modernes comme React, TypeScript, Next.js...
                    </p>
                    <p className="mb-14">
                        Créatif, organisé, à l'écoute,<br />
                        je fais toujours de mon mieux pour proposer un travail minutieux.
                    </p>
                    <p className="mb-14">
                        Je suis en recherche d'opportunités professionnelles dans le développement web, en présentiel comme en full remote.
                    </p>
                    <hr className="my-20 w-[80px] mx-auto border-accent border-t-2" />
                    <p>Pour en apprendre plus sur moi,<br />
                        <a href="/cv-raphael-brisson.pdf" target="_blank" rel="noopener noreferrer" className="font-bold inline-flex items-center gap-2 cursor-alias">
                            Consulter mon CV
                            <img src={targetBlankIcon} alt="Ouvrir dans un nouvel onglet" className="w-4 h-4" />
                        </a>
                    </p>
                </Wrapper>
            </Container>
        </section>
    );
});

export default Introduction;