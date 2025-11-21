import { useState } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { SectionType } from "../constants";

export const App = (): JSX.Element => {
  const [selectedSection, setSelectedSection] = useState<SectionType>(
    SectionType.HOME
  );

  return (
    <div className="app">
      <Header
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <Body selectedSection={selectedSection} />
    </div>
  );
};
