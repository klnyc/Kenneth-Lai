import GitHubIcon from "./assets/icons/github.svg";
import YouTubeIcon from "./assets/icons/youtube.svg";
import LinkedInIcon from "./assets/icons/linkedin.svg";
import InstagramIcon from "./assets/icons/instagram.svg";

export enum SectionType {
  HOME = "Home",
  CODE = "Code",
  TRAVEL = "Travel",
}

export const personalLinks: {
  url: string;
  imgSrc: string;
}[] = [
  {
    url: "https://www.linkedin.com/in/kennethklai/",
    imgSrc: LinkedInIcon,
  },
  {
    url: "https://github.com/klnyc",
    imgSrc: GitHubIcon,
  },
  {
    url: "https://www.instagram.com/kl.nyc/",
    imgSrc: InstagramIcon,
  },
  {
    url: "https://www.youtube.com/watch?v=49xpx7a_prY",
    imgSrc: YouTubeIcon,
  },
];
