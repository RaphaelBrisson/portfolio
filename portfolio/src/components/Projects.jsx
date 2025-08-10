import { Container } from "./Layout";
import React, { useState, useMemo, useRef, useEffect } from "react";

import moreIcon from "../assets/icons/more.svg";
import squareIcon from "../assets/icons/square.svg";
import projectsData from "../data/projects.js";
import useIsMobile from "../hooks/useIsMobile";

const PROJECTS_PER_PAGE = 8;
const CATEGORIES = ["tous", "programmation", "graphisme"];

const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const isMobile = useIsMobile(); // Defaults to < 768px

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isMobile) {
                    setIsIntersecting(entry.isIntersecting);
                }
            },
            {
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0
            }
        );

        const currentRef = cardRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [isMobile]);

    return (
        <a 
            ref={cardRef}
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block group relative aspect-square overflow-hidden bg-white cursor-alias"
        >
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${isMobile && isIntersecting ? 'scale-110' : ''}`} 
            />
            <div 
                className={`absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 ${isMobile && isIntersecting ? 'opacity-100' : ''}`}
            >
                <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-4">{project.title}</h3>
                    <span className="text-sm inline-block" dangerouslySetInnerHTML={{ __html: project.description }}></span>
                </div>
            </div>
        </a>
    );
};

const Projects = React.forwardRef((props, ref) => {
    const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
    const [activeFilter, setActiveFilter] = useState("tous");

    const filteredProjects = useMemo(() => {
        if (activeFilter === "tous") {
            return projectsData;
        }
        return projectsData.filter((p) => {
            if (Array.isArray(p.category)) {
                return p.category.includes(activeFilter);
            }
            return p.category === activeFilter;
        });
    }, [activeFilter]);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + PROJECTS_PER_PAGE);
    };

    const handleFilterClick = (category) => {
        setActiveFilter(category);
        setVisibleCount(PROJECTS_PER_PAGE); // Reset pagination on filter change
    };

    const hasMoreProjects = visibleCount < filteredProjects.length;

    return (
        <section id="projects" ref={ref} className="bg-black text-white py-[90px] md:py-[150px]">
            <Container className="">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-20">Mes réalisations</h2>
                {/* <div className="flex justify-center gap-8 mb-16">
                {CATEGORIES.map((category) => (
                    <div key={category} className="flex flex-col items-center gap-2">
                        <button
                            onClick={() => handleFilterClick(category)}
                            className={`capitalize text-lg font-semibold text-white transition-colors duration-300 ${activeFilter !== category && "hover:text-accent"}`}
                        >
                            {category}
                        </button>
                        {activeFilter === category && <img src={squareIcon} alt="" className="w-3 h-3" />}
                    </div>
                ))}
            </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProjects.slice(0, visibleCount).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                {hasMoreProjects && (<div className="text-center mt-16">


                    <button onClick={handleLoadMore} className="group transition-colors duration-300">
                        <svg
                            viewBox="0 0 100 100"
                            width="50"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <polygon
                                points="50,5 95,50 50,95 5,50"
                                fill="none"
                                stroke="white"
                                strokeWidth="3"
                                className="transition duration-300 origin-center group-hover:rotate-[15deg] group-hover:stroke-accent"
                            />
                            <line x1="35" y1="50" x2="65" y2="50" stroke="white" strokeWidth="6" strokeLinecap="round"></line>
                            <line x1="50" y1="35" x2="50" y2="65" stroke="white" strokeWidth="6" strokeLinecap="round"></line>


                        </svg>
                    </button>

                </div>)}
            </Container>
        </section >
    );
});

export default Projects;
