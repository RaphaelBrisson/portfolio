import moreIcon from "../assets/icons/more.svg";
import React, { useState, useMemo } from "react";
import projectsData from "../data/projects.js";

const PROJECTS_PER_PAGE = 8;
const CATEGORIES = ["tous", "programmation", "graphisme"];

const ProjectCard = ({ project }) => {
    return (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block group relative aspect-square overflow-hidden bg-white">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <h3 className="text-white text-xl font-bold text-center">{project.title}</h3>
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
        return projectsData.filter((p) => p.category === activeFilter);
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
        <section id="projects" ref={ref} data-theme="dark" className="bg-black text-white py-[150px] px-[50px]">
            <h2 className="text-2xl font-bold text-center mb-8">Mes réalisations</h2>
            <div className="flex justify-center gap-4 mb-16">
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleFilterClick(category)}
                        className={`capitalize px-4 py-2 rounded-sm text-sm font-bold transition-colors duration-300 ${
                            activeFilter === category ? "bg-accent text-black" : "bg-white/10 hover:bg-white/20"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProjects.slice(0, visibleCount).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    {hasMoreProjects && ( <div className="text-center mt-16"> <button onClick={handleLoadMore} className="p-2 rounded-full hover:bg-accent/20 transition-colors duration-300"> <img src={moreIcon} alt="Charger plus de projets" className="w-10 h-10" /> </button> </div> )}
        </section>
    );
});

export default Projects;