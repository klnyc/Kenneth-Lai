import { ProjectProps } from "./components/Project";

export const projects: ProjectProps[] = [
  {
    name: "iDestination",
    description: `iDestination is a travel planning web application which allows users to keep track of places 
      that they have traveled to in the past and places that they plan to visit in the future. 
      Users can search, add, and filter locations on an integrated map and view real-time weather of any city.`,
    imgSrc: "/screenshots/idestination.png",
    techStack: [
      "JavaScript",
      "React",
      "Redux",
      "Firebase",
      "Webpack",
      "Google Maps API",
      "Open Weather API",
      "CSS",
    ],
    projectUrl: "https://idestination.web.app/",
    githubUrl: "https://github.com/klnyc/iDestination",
    youtubeUrl: "https://www.youtube.com/watch?v=WpM40BC9rbk",
  },
  {
    name: "Paper Rockets",
    description: `Paper Rockets is a website for paper trading stocks in the U.S. stock market. 
      Users can buy/sell shares and track publicly traded companies in their watchlist.`,
    imgSrc: "/screenshots/paperrockets.png",
    techStack: [
      "JavaScript",
      "React",
      "Firebase",
      "IEX Cloud API",
      "Sass",
      "Bootstrap",
    ],
    projectUrl: "https://paperrockets.web.app/",
    githubUrl: "https://github.com/klnyc/Paper-Rockets",
  },
  {
    name: "WeOut",
    description: `WeOut is an instant messaging application that allows users to
      create chatrooms and talk with friends, family, and community members.`,
    imgSrc: "/screenshots/weout.png",
    techStack: ["JavaScript", "React", "Firebase", "Sass", "Bootstrap"],
    projectUrl: "https://weout.web.app/",
    githubUrl: "https://github.com/klnyc/WeOut",
  },
  {
    name: "Jukebox Center",
    description: `Jukebox Center is an e-commerce website that sells music albums.
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
      "CSS",
    ],
    projectUrl: "https://jukeboxcenter.herokuapp.com/",
    githubUrl: "https://github.com/klnyc/JukeboxCenter",
  },
];
