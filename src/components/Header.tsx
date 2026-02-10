import { Link } from "react-router";
import { ExternalLink } from "./ExternalLink";
import { SectionType, personalLinks } from "../constants";

interface HeaderProps {
  selectedSection: SectionType;
  setSelectedSection: (section: SectionType) => void;
}

interface SectionLinkProps extends HeaderProps {
  section: SectionType;
}

const PersonalLinks = (): JSX.Element => {
  return (
    <div className="personal-links">
      {personalLinks.map((link) => (
        <ExternalLink href={link.url} imgSrc={link.imgSrc} key={link.url} />
      ))}
    </div>
  );
};

const SectionLink = ({
  section,
  selectedSection,
  setSelectedSection,
}: SectionLinkProps): JSX.Element => {
  return (
    <Link
      to={`${section === SectionType.HOME ? "/" : `/${section.toLowerCase()}`}`}
    >
      <button
        className={`section-link ${
          section === selectedSection && "section-link-selected"
        }`}
        onClick={() => setSelectedSection(section)}
      >
        {section}
      </button>
    </Link>
  );
};

export const Header = (props: HeaderProps): JSX.Element => {
  const SectionLinks = (): JSX.Element => {
    return (
      <div className="section-links">
        <Link to="/">
          <button
            id="title-initial"
            onClick={() => props.setSelectedSection(SectionType.HOME)}
          >
            KL
          </button>
        </Link>

        {Object.values(SectionType)
          .filter((section) => section !== SectionType.HOME)
          .map((section) => (
            <SectionLink section={section} {...props} key={section} />
          ))}
      </div>
    );
  };

  return (
    <div id="header">
      <Link to="/">
        <button
          id="title"
          onClick={() => props.setSelectedSection(SectionType.HOME)}
        >
          Kenneth Lai
        </button>
      </Link>
      <SectionLinks />
      <PersonalLinks />
    </div>
  );
};
