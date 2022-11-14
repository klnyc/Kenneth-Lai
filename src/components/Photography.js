export const Photography = () => {
  // [file name, photo text]
  const photos = [
    [
      ["Tribute in Light (Bridge)", "Tribute in light"],
      ["Chinatown", "Chinatown"],
      ["Mongkok", "Mongkok"],
    ],
    [
      ["Tokyo International Forum (Front)", "Tokyo International Forum"],
      [
        "Incheon International Airport (Right)",
        "Incheon International Airport",
      ],
      ["Shinjuku (Street)", "Shinjuku"],
    ],
    [
      ["Senso-Ji", "Senso-Ji"],
      ["Dongdaemun Design Plaza (Outdoors)", "Dongdaemun Design Plaza"],
      ["Dangsan (Station)", "Dangsan"],
    ],
    [
      ["FDR Drive", "FDR Drive"],
      ["Weehawken", "Weehawken"],
      ["JFK Airport", "JFK Airport"],
    ],
  ];

  const renderPhoto = (fileName, text) => {
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
    <div id="photography">
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
