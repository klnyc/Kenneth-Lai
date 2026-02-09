import { Link } from "./Link";
import GitHubIcon from "../assets/icons/github.svg";
import LinkIcon from "../assets/icons/link.svg";
import YouTubeIcon from "../assets/icons/youtube.svg";

export interface ProjectProps {
  name: string;
  description: string;
  imgSrc: string;
  techStack: string[];
  projectUrl: string;
  githubUrl: string;
  youtubeUrl?: string;
}

export const Project = ({
  name,
  description,
  imgSrc,
  projectUrl,
  githubUrl,
  youtubeUrl,
}: ProjectProps): JSX.Element => {
  return (
    <div className="project">
      <div className="project-image">
        <img src={require(`../assets/screenshots/${imgSrc}`)} />
      </div>
      <div className="project-title">
        <Link href={projectUrl} className="project-link" text={name} />
      </div>
      <div className="project-description">{description}</div>
      <div className="project-links">
        <Link href={projectUrl} imgSrc={LinkIcon} />
        <Link href={githubUrl} imgSrc={GitHubIcon} />
        {youtubeUrl && <Link href={youtubeUrl} imgSrc={YouTubeIcon} />}
      </div>
    </div>
  );
};
