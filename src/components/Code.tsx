import { projects } from "../projects";
import { Project } from "./Project";

export const Code = (): JSX.Element => {
  return (
    <div id="code" className="section">
      {projects.map((project) => (
        <Project {...project} key={project.name} />
      ))}
    </div>
  );
};
