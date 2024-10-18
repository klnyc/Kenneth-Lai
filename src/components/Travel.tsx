import photos from "../photos";

export const Travel = (): JSX.Element => {
  const renderPhoto = (fileName: string, text: string): JSX.Element => {
    return (
      <div key={fileName} className="photo">
        <img src={`photos/${fileName}.jpg`} />
        <div className="overlay">
          <div className="photo_text">{text}</div>
        </div>
      </div>
    );
  };

  return (
    <div id="travel">
      <div id="photo_grid">
        {photos.map((row, index) => {
          return (
            <div key={index} className="photo_row">
              {row.map(([fileName, text]) => renderPhoto(fileName, text))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
