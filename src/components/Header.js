import { SectionType } from "../constants";

export const Header = ({ section, setSection }) => {
  const renderSectionLinks = () => {
    return (
      <div className="section-links">
        <div className="title-initals">KL</div>
        <span
          className={`px-2 ${
            section === SectionType.PHOTOGRAPHY ? "section-link-selected" : ""
          }`}
          onClick={() => setSection(SectionType.PHOTOGRAPHY)}
        >
          PHOTOGRAPHY
        </span>
        <span
          className={`px-2 ${
            section === SectionType.CODE ? "section-link-selected" : ""
          }`}
          onClick={() => setSection(SectionType.CODE)}
        >
          CODE
        </span>
      </div>
    );
  };

  const renderPersonalLinks = () => {
    return (
      <div className="personal-links">
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
