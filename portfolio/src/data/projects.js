import rbImage from '../assets/projects/rb.jpg';
import sartheImage from '../assets/projects/sarthe.jpg';
import chantillyImage from '../assets/projects/chantilly.jpg';
import valdardenneImage from '../assets/projects/val-d-ardenne.jpg';
import hardreleasesImage from '../assets/projects/hard-releases.jpg';

const projectsData = [
    {
        id: 1,
        title: "Portfolio & identité graphique",
        description: "Programmation<br /> React + Tailwind <br /><br />Graphisme <br />Webdesign : Adobe XD <br /> Logo : Adobe Illustrator <br /> CV : InDesign <br />",
        imageUrl: rbImage,
        link: "https://github.com/RaphaelBrisson/portfolio/tree/main/portfolio",
        category: ["programmation", "graphisme"],
    },
    {
        id: 2,
        title: "Sarthe tourisme",
        description: "Wordpress - PHP - JS - SCSS",
        imageUrl: sartheImage,
        link: "https://www.sarthetourisme.com/",
        category: ["programmation"],
    },
    {
        id: 3,
        title: "Chantilly Senlis",
        description: "Wordpress - PHP - JS - SCSS",
        imageUrl: chantillyImage,
        link: "https://www.chantilly-senlis-tourisme.com/",
        category: "programmation",
    },
    {
        id: 4,
        title: "Val d'Ardenne",
        description: "Wordpress - PHP - JS - SCSS",
        imageUrl: valdardenneImage,
        link: "https://www.valdardennetourisme.com/",
        category: "programmation",
    },
    {
        id: 5,
        title: "Hard Releases",
        description: "Projet scolaire<br/>Adobe XD - Laravel - API Rest",
        imageUrl: hardreleasesImage,
        link: "./hard-releases",
        category: "programmation",
    },
];

export default projectsData;