import { photos } from "../photos";

export const Travel = (): JSX.Element => {
  const renderPhoto = (fileName: string): JSX.Element => {
    return (
      <div key={fileName} className="photo">
        <img src={`photos/${fileName}`} />
        <div className="photo-overlay">
          <div className="overlay-text">{fileName.split(".")[0]}</div>
        </div>
      </div>
    );
  };

  return (
    <div id="travel" className="section">
      <div id="photo-grid">
        {photos.map((fileName) => renderPhoto(fileName))}
      </div>
    </div>
  );
};
