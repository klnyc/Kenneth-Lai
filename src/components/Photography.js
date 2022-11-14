export const Photography = () => {
  const renderPhoto = (fileName, text) => {
    return (
      <div className="photo">
        <img src={`photos/${fileName}.jpg`} />
        <div class="overlay">
          <div class="photo_text">{text}</div>
        </div>
      </div>
    );
  };

  return (
    <div id="photography">
      <div id="photo_grid">
        <div className="photo_row">
          {renderPhoto("Tribute in Light (Bridge)", "Tribute in light")}
          {renderPhoto("Chinatown", "Chinatown")}
          {renderPhoto("Mongkok", "Mongkok")}
        </div>
        <div className="photo_row">
          {renderPhoto(
            "Tokyo International Forum (Front)",
            "Tokyo International Forum"
          )}
          {renderPhoto(
            "Incheon International Airport (Right)",
            "Incheon International Airport"
          )}

          {renderPhoto("Shinjuku (Street)", "Shinjuku")}
        </div>
        <div className="photo_row">
          {renderPhoto("Senso-Ji", "Senso-Ji")}
          {renderPhoto(
            "Dongdaemun Design Plaza (Outdoors)",
            "Dongdaemun Design Plaza"
          )}
          {renderPhoto("Dangsan (Station)", "Dangsan")}
        </div>
      </div>
    </div>
  );
};
