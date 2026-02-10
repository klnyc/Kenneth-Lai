import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Header } from "./Header";
import { Home } from "./Home";
import { Code } from "./Code";
import { Travel } from "./Travel";
import { SectionType } from "../constants";

export const App = (): JSX.Element => {
  const [selectedSection, setSelectedSection] = useState<SectionType>(
    SectionType.HOME,
  );

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code" element={<Code />} />
          <Route path="/travel" element={<Travel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
