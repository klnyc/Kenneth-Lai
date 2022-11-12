export const Header = () => {
  const renderSectionLinks = () => {

  }
  
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
    <div className="header p-4">
      <div className="title">Kenneth Lai</div>
      {renderPersonalLinks()}
    </div>
  );
};
