import { ProjectProps } from "./components/Project";

export const projects: ProjectProps[] = [
  {
    name: "iDestination",
    description: `Travel planning web application that allows users to keep track of places 
      that they have traveled to in the past and places that they plan to visit in the future. 
      Users can search, add, and filter locations on a map and view real-time weather of any city.`,
    imgSrc: "/screenshots/idestination.png",
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
    imgSrc: "/screenshots/paperrockets.png",
    techStack: ["JavaScript", "React", "Firebase", "Sass", "Bootstrap", "HTML"],
    projectUrl: "https://paperrockets.web.app/",
    githubUrl: "https://github.com/klnyc/Paper-Rockets",
  },
  {
    name: "WeOut",
    description: `Fully responsive instant messaging application that allows users to
      create chatrooms to message friends and family.`,
    imgSrc: "/screenshots/weout.png",
    techStack: ["JavaScript", "React", "Firebase", "Sass", "Bootstrap", "HTML"],
    projectUrl: "https://weout.web.app/",
    githubUrl: "https://github.com/klnyc/WeOut",
  },
  {
    name: "Jukebox Center",
    description: `E-commerce website that sells music albums.
      Users can filter albums by genre, add albums to their cart to
      checkout as a user or guest, and view their order history.`,
    imgSrc: "/screenshots/jukeboxcenter.png",
    techStack: [
      "JavaScript",
      "React",
      "Redux",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Webpack",
      "Heroku",
      "HTML",
      "CSS",
    ],
    projectUrl: "https://github.com/klnyc/JukeboxCenter",
    githubUrl: "https://github.com/klnyc/JukeboxCenter",
  },
  {
    name: "Sudoku",
    description: `Number-placement puzzle. 
      The goal is to fill the 9x9 grid with digits so that 
      each column, each row, and each of the nine 3x3 subgrids 
      contain all of the digits from 1 to 9 exactly once.`,
    imgSrc: "/screenshots/sudoku.png",
    techStack: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
    ],
    projectUrl: "https://klnyc.github.io/Sudoku/",
    githubUrl: "https://github.com/klnyc/Sudoku",
  },
  {
    name: "Ball Drop",
    description: `In this game, try to catch every falling ball. 
      The basket follows your mouse movements and the ball drops faster after every successful catch.`,
    imgSrc: "/screenshots/balldrop.png",
    techStack: [
      "JavaScript",
      "React",
      "Vite",
      "HTML",
      "CSS",
    ],
    projectUrl: "https://klnyc.github.io/Ball-Drop/",
    githubUrl: "https://github.com/klnyc/Ball-Drop",
  },
];
