import { useState } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { SectionType } from "../constants";

export const App = () => {
  const [section, setSection] = useState(SectionType.CODE);

  return (
    <div className="app">
      <Header section={section} setSection={setSection} />
      <Body section={section} />
    </div>
  );
};
