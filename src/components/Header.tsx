import { SectionType } from "../constants";

export const Header = ({ section, setSection }): JSX.Element => {
  const renderSectionLinks = () => {
    return (
      <div className="section_links">
        <div className="title_initials">KL</div>
        <span
          className={`px-2 ${
            section === SectionType.CODE ? "section_link_selected" : ""
          }`}
          onClick={() => setSection(SectionType.CODE)}
        >
          CODE
        </span>
        <span
          className={`px-2 ${
            section === SectionType.PHOTOGRAPHY ? "section_link_selected" : ""
          }`}
          onClick={() => setSection(SectionType.PHOTOGRAPHY)}
        >
          PHOTOGRAPHY
        </span>
      </div>
    );
  };

  const renderPersonalLinks = () => {
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
        <a href="https://www.youtube.com/watch?v=WpM40BC9rbk">
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
