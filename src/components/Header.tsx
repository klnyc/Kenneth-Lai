import { SectionType } from "../constants";

interface HeaderProps {
  selectedSection: SectionType;
  setSelectedSection: (section: SectionType) => void;
}

export const Header = ({
  selectedSection,
  setSelectedSection,
}: HeaderProps): JSX.Element => {
  const renderSectionLink = (section: SectionType): JSX.Element => {
    return (
      <span
        className={`px-2 ${
          section === selectedSection ? "section_link_selected" : ""
        }`}
        onClick={() => setSelectedSection(section)}
      >
        {section}
      </span>
    );
  };

  const renderSectionLinks = (): JSX.Element => {
    return (
      <div className="section_links">
        <div className="title_initials">KL</div>
        {Object.values(SectionType).map((section) =>
          renderSectionLink(section)
        )}
      </div>
    );
  };

  const renderPersonalLinks = (): JSX.Element => {
    return (
      <div className="personal_links">
        <a href="https://www.linkedin.com/in/kennethklai/">
          <img src="icons/linkedin.svg" />
        </a>
        <a href="https://github.com/klnyc">
          <img src="icons/github.svg" />
        </a>
        <a href="https://www.instagram.com/kl.nyc/">
          <img src="icons/instagram.svg" />
        </a>
        <a href="https://www.youtube.com/watch?v=49xpx7a_prY">
          <img src="icons/youtube.svg" />
        </a>
      </div>
    );
  };

  return (
    <div className="header p-4 m-0">
      <div className="title">KENNETH LAI</div>
      {renderSectionLinks()}
      {renderPersonalLinks()}
    </div>
  );
};
