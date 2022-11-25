import { useState } from "react";
import { Header } from "./Header";
import { Photography } from "./Photography";
import { Code } from "./Code";
import { SectionType } from "../constants";

export const App = () => {
  const [section, setSection] = useState(SectionType.CODE);

  const displaySection = () => {
    switch (section) {
      case SectionType.PHOTOGRAPHY:
        return <Photography />;
      case SectionType.CODE:
        return <Code />;
    }
  };

  return (
    <div className="app">
      <Header section={section} setSection={setSection} />
      {displaySection()}
    </div>
  );
};
