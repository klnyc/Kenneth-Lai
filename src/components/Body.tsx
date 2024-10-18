import { Photography } from "./Photography";
import { Code } from "./Code";
import { SectionType } from "../constants";

const Body = ({ section }): JSX.Element => {
  switch (section) {
    case SectionType.PHOTOGRAPHY:
      return <Photography />;
    case SectionType.CODE:
      return <Code />;
  }
};

export { Body };
