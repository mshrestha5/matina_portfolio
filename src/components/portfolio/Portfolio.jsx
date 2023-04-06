import React from "react";
import "./portfolio.css";
// import P4 from "../../assets/p4.png";
import DOWNLOAD from "../../assets/download.png";
import P2 from "../../assets/p2.png";
import P1 from "../../assets/p1.jfif";
import P3 from "../../assets/p3.png";

import IMG6 from "../../assets/portfolio6.jpg";
// import D1 from "../../assets/D1.gif";
import PRIME1 from "../../assets/prime1.PNG";

const data = [
  {
    id: 1,
    image: PRIME1,
    title: "image 1",
    sitename: "Algorizin Websites",
    github: "https://app.algorizin.com/questions?page=1",
    demo: "https://app.algorizin.com/questions?page=1",
  },
  {
    id: 2,
    image: DOWNLOAD,
    title: "image 2",
    sitename: "DETECTING THE PATTERN OF VARIOUS COVID WAVES",
    github:
      "https://github.com/mshrestha5/Covid-Pattern/blob/main/Detecting%20the%20pattern%20of%20covid%20waves.ipynb",
    demo: "http://localhost:8888/notebooks/Grad%20Final%20Project/Copy_1.ipynb",
  },
  {
    id: 3,
    image: P2,
    title: "image 3",
    sitename: "Movie Site",
    github: "https://github.com/mshrestha5/movieSite",
    demo: "https://user-images.githubusercontent.com/104951387/212558685-f9a365c7-16ef-4cfd-b169-0f5419e8481a.gif",
  },
  {
    id: 4,
    image: P1,
    title: "image 1",
    sitename: "Travel Website",
    github: "https://github.com/mshrestha5/travelWebsite",
    demo: "https://github.com/mshrestha5/travelWebsite/blob/master/ezgif.com-optimize.gif",
  },
  {
    id: 5,
    image: P3,
    title: "image 1",
    sitename: "To-do-list",
    github: "https://github.com/mshrestha5/to-do-list",
    demo: "https://github.com/mshrestha5/to-do-list/blob/master/react4.gif",
  },
  {
    id: 6,
    image: IMG6,
    title: "image 1",
    github: "https://github.com",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, sitename, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{sitename}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
