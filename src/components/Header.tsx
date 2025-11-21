import { Link } from "./Link";
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
        <Link href={link.url} imgSrc={link.imgSrc} />
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
    <span
      className={`section-link ${
        section === selectedSection ? "section-link-selected" : ""
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
      <div className="section-links">
        <div id="title-initial">KL</div>
        {Object.values(SectionType).map((section) => (
          <SectionLink section={section} {...props} />
        ))}
      </div>
    );
  };

  return (
    <div id="header">
      <div id="title">Kenneth Lai</div>
      <SectionLinks />
      <PersonalLinks />
    </div>
  );
};
