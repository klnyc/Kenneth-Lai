import { Travel } from "./Travel";
import { Code } from "./Code";
import { SectionType } from "../constants";

interface BodyProps {
  selectedSection: SectionType;
}

const Section = ({ selectedSection }: BodyProps): JSX.Element => {
  switch (selectedSection) {
    case SectionType.TRAVEL:
      return <Travel />;
    case SectionType.CODE:
      return <Code />;
  }
};

const Body = ({ selectedSection }: BodyProps): JSX.Element => {
  return (
    <div id="body">
      <Section selectedSection={selectedSection} />
    </div>
  );
};

export { Body };
