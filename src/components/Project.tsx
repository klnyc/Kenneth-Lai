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
      <div className="project_title">
        <Link
          href={projectUrl}
          imgSrc={imgSrc}
          className="text-decoration-none"
          text={name}
        />
      </div>
      <div className="project_image">
        <Link href={projectUrl} imgSrc={imgSrc} />
      </div>
      <div className="project_description">{description}</div>
      <div className="project_technologies">
        Tech stack: {techStack.join(", ")}
      </div>
      <div className="project_links">
        <Link href={projectUrl} imgSrc="icons/link.svg" />
        <Link href={githubUrl} imgSrc="icons/github.svg" />
        {youtubeUrl && <Link href={youtubeUrl} imgSrc="icons/youtube.svg" />}
      </div>
    </div>
  );
};
