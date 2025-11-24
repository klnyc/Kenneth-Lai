import { useState } from "react";
import { photos } from "../photos";

interface PhotoProps {
  fileName: string;
}

const Photo = ({ fileName }: PhotoProps): JSX.Element => {
  const [loading, setLoading] = useState(true);

  return (
    <div key={fileName} className="photo">
      {loading && <div className="photo-skeleton"></div>}

      <img src={`photos/${fileName}`} onLoad={() => setLoading(false)} />
      <div className="photo-overlay">
        <div className="overlay-text">{fileName.split(".")[0]}</div>
      </div>
    </div>
  );
};

export const Travel = (): JSX.Element => {
  return (
    <div id="travel" className="section">
      <div id="photo-grid">
        {photos.map((fileName) => (
          <Photo fileName={fileName} />
        ))}
      </div>
    </div>
  );
};
