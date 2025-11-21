import { Link } from "./Link";

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
  techStack,
  projectUrl,
  githubUrl,
  youtubeUrl,
}: ProjectProps): JSX.Element => {
  return (
    <div className="project">
      <div className="project-title">
        <Link
          href={projectUrl}
          imgSrc={imgSrc}
          className="project-link"
          text={name}
        />
      </div>
      <div className="project-image">
        <img src={imgSrc} />
      </div>
      <div className="project-description">{description}</div>
      <div className="project-technologies">
        Tech stack: {techStack.join(", ")}
      </div>
      <div className="project-links">
        <Link href={projectUrl} imgSrc="icons/link.svg" />
        <Link href={githubUrl} imgSrc="icons/github.svg" />
        {youtubeUrl && <Link href={youtubeUrl} imgSrc="icons/youtube.svg" />}
      </div>
    </div>
  );
};
