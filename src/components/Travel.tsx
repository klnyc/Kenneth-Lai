// Photo structure
// [
//   [file name, display text],
//   [file name, display text],
//   [file name, display text],
// ],

const photos: string[][][] = [
  [
    ["Tribute in Light (Bridge)", "Tribute in light"],
    ["Chinatown", "Chinatown"],
    ["Mongkok", "Mongkok"],
  ],
  [
    ["Tokyo International Forum (Front)", "Tokyo International Forum"],
    ["Incheon International Airport (Right)", "Incheon International Airport"],
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
  [
    ["North Avenue Beach", "North Avenue Beach"],
    ["Shibuya (109)", "Shibuya"],
    ["Shinjuku (Viaduct)", "Shinjuku"],
  ],
  [
    ["Verrazano Bridge", "Verrazano Bridge"],
    ["Dangsan (Balcony)", "Dangsan"],
    ["Haneda Airport (Atrium)", "Haneda Airport"],
  ],
];

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
