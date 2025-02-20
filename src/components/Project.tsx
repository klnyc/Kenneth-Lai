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
      <div className="project_image">
        <a href={projectUrl}>
          <img src={imgSrc} />
        </a>
      </div>
      <div className="project_summary">
        <div className="project_title">
          <a href={projectUrl} className="text-decoration-none">
            {name}
          </a>
        </div>
        <div className="project_description">{description}</div>
        <div className="project_technologies">{techStack.join(", ")}</div>
        <div className="project_links">
          <a href={projectUrl}>
            <img src="icons/link.svg" />
          </a>
          <a href={githubUrl}>
            <img src="icons/github.svg" />
          </a>
          {youtubeUrl && (
            <a href={youtubeUrl}>
              <img src="icons/youtube.svg" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
