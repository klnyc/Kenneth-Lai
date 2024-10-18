import { Photography } from "./Photography";
import { Code } from "./Code";
import { SectionType } from "../constants";

interface BodyProps {
  selectedSection: SectionType;
}

const Body = ({ selectedSection }: BodyProps): JSX.Element => {
  switch (selectedSection) {
    case SectionType.PHOTOGRAPHY:
      return <Photography />;
    case SectionType.CODE:
      return <Code />;
  }
};

export { Body };
