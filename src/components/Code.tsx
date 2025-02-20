import { projects } from "../projects";
import { Project } from "./Project";

export const Code = (): JSX.Element => {
  return (
    <div id="code">
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </div>
  );
};
