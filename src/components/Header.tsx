import { SectionType } from "../constants";

interface HeaderProps {
  selectedSection: SectionType;
  setSelectedSection: (section: SectionType) => void;
}

interface SectionLinkProps extends HeaderProps {
  section: SectionType;
}

const PersonalLinks = (): JSX.Element => {
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

const SectionLink = ({
  section,
  selectedSection,
  setSelectedSection,
}: SectionLinkProps): JSX.Element => {
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

export const Header = (props: HeaderProps): JSX.Element => {
  const SectionLinks = (): JSX.Element => {
    return (
      <div className="section_links">
        <div className="title_initials">KL</div>
        {Object.values(SectionType).map((section) => (
          <SectionLink section={section} {...props} />
        ))}
      </div>
    );
  };

  return (
    <div className="header p-4 m-0">
      <div className="title">KENNETH LAI</div>
      <SectionLinks />
      <PersonalLinks />
    </div>
  );
};
