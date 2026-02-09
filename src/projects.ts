import { ProjectProps } from "./components/Project";

export const projects: ProjectProps[] = [
  {
    name: "iDestination",
    description: `Travel planning web application that allows users to keep track of places 
      that they have been to and places they plan to visit. 
      Users can search, add, and filter locations on a map and view real-time weather of any city.`,
    imgSrc: "idestination.png",
    techStack: [
      "JavaScript",
      "React",
      "Redux",
      "Firebase",
      "Webpack",
      "Google Maps API",
      "Open Weather API",
      "HTML",
      "CSS",
    ],
    projectUrl: "https://idestination.web.app/",
    githubUrl: "https://github.com/klnyc/iDestination",
    youtubeUrl: "https://www.youtube.com/watch?v=WpM40BC9rbk",
  },
  {
    name: "Paper Rockets",
    description: `Fully responsive web application for paper trading stocks in the U.S. stock market. 
      Users can buy/sell shares and track publicly traded companies in their watchlist.`,
    imgSrc: "paperrockets.png",
    techStack: ["JavaScript", "React", "Firebase", "Sass", "Bootstrap", "HTML"],
    projectUrl: "https://paperrockets.web.app/",
    githubUrl: "https://github.com/klnyc/Paper-Rockets",
  },
  {
    name: "WeOut",
    description: `Fully responsive instant messaging application that allows users to
      create chatrooms to message friends and family.`,
    imgSrc: "weout.png",
    techStack: ["JavaScript", "React", "Firebase", "Sass", "Bootstrap", "HTML"],
    projectUrl: "https://weout.web.app/",
    githubUrl: "https://github.com/klnyc/WeOut",
  },
  {
    name: "Playbox",
    description: `A collection of mini web games, including Ball Drop and Sudoku.`,
    imgSrc: "balldrop.png",
    techStack: ["Typescript", "React", "Vite", "CSS"],
    projectUrl: "https://klnyc.github.io/Playbox/",
    githubUrl: "https://github.com/klnyc/Playbox",
  },
];
