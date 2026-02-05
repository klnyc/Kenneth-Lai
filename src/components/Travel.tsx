import { useState } from "react";
import { photos } from "../photos";

export const Travel = (): JSX.Element => {
  const [loadedCount, setLoadedCount] = useState(0);

  const handleImageLoad = () => {
    setLoadedCount((count) => count + 1);
  };

  const photosLoaded = loadedCount === photos.length;

  return (
    <div id="travel" className="section">
      {!photosLoaded && <div className="spinner"></div>}

      <div id="photo-grid" className={photosLoaded ? "show" : ""}>
        {photos.map((fileName) => (
          <div key={fileName} className="photo">
            <img
              src={`photos/${fileName}`}
              onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <div className="photo-overlay">
              <div className="overlay-text">{fileName.split(".")[0]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
