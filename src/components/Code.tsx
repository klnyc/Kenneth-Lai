export const Code = (): JSX.Element => {
  return (
    <div id="code">
      <div className="project">
        <div className="project_image">
          <a href="https://idestination.web.app/">
            <img src="/screenshots/idestination.png" />
          </a>
        </div>
        <div className="project_description">
          <div className="project_title">
            <a
              href="https://idestination.web.app/"
              className="text-decoration-none"
            >
              iDestination
            </a>
          </div>
          <div className="project_summary">
            iDestination is a travel planning web application which allows users
            to keep track of places that they have traveled to in the past and
            places that they plan to visit in the future. Users can search, add,
            and filter locations on an integrated map and view real-time weather
            of any city.
          </div>
          <div className="project_technologies">
            JavaScript, React, Redux, Firebase, Webpack, Google Maps API, Open
            Weather API, HTML, CSS
          </div>
          <div className="project_links">
            <a href="https://idestination.web.app/">
              <img src="icons/link.svg" />
            </a>
            <a href="https://github.com/klnyc/iDestination">
              <img src="icons/github.svg" />
            </a>
            <a href="https://www.youtube.com/watch?v=WpM40BC9rbk">
              <img src="icons/youtube.svg" />
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project_image">
          <a href="https://jukeboxcenter.herokuapp.com/">
            <img src="/screenshots/jukeboxcenter.png" />
          </a>
        </div>
        <div className="project_description">
          <div className="project_title">
            <a
              href="https://jukeboxcenter.herokuapp.com/"
              className="text-decoration-none"
            >
              Jukebox Center
            </a>
          </div>
          <div className="project_summary">
            Jukebox Center is an e-commerce website that sells music albums.
            Users can filter albums by genre, add albums to their cart to
            checkout as a user or guest, and view their order history.
          </div>
          <div className="project_technologies">
            JavaScript, React, Redux, Express, PostgreSQL, Sequelize, Webpack,
            Heroku, HTML, CSS
          </div>
          <div className="project_links">
            <a href="https://jukeboxcenter.herokuapp.com/">
              <img src="icons/link.svg" />
            </a>
            <a href="https://github.com/klnyc/JukeboxCenter">
              <img src="icons/github.svg" />
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project_image">
          <a href="https://paperrockets.web.app/">
            <img src="/screenshots/paperrockets.png" />
          </a>
        </div>
        <div className="project_description">
          <div className="project_title">
            <a
              href="https://paperrockets.web.app/"
              className="text-decoration-none"
            >
              Paper Rockets
            </a>
          </div>
          <div className="project_summary">
            Paper Rockets is a website for paper trading stocks in the U.S.
            stock market. Users can buy/sell shares and track publicly traded
            companies in their watchlist using real-time stock data.
          </div>
          <div className="project_technologies">
            JavaScript, React, Firebase, IEX Cloud API, HTML, Sass, Bootstrap
          </div>
          <div className="project_links">
            <a href="https://paperrockets.web.app/">
              <img src="icons/link.svg" />
            </a>
            <a href="https://github.com/klnyc/Paper-Rockets">
              <img src="icons/github.svg" />
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project_image">
          <a href="https://weout.web.app/">
            <img src="/screenshots/weout.png" />
          </a>
        </div>
        <div className="project_description">
          <div className="project_title">
            <a href="https://weout.web.app/" className="text-decoration-none">
              WeOut
            </a>
          </div>
          <div className="project_summary">
            WeOut is an instant messaging application that allows users to
            create circles and chat with members within their circles,
            identified by unique screen names.
          </div>
          <div className="project_technologies">
            JavaScript, React, Firebase, HTML, Sass, Bootstrap
          </div>
          <div className="project_links">
            <a href="https://weout.web.app/">
              <img src="icons/link.svg" />
            </a>
            <a href="https://github.com/klnyc/WeOut">
              <img src="icons/github.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
