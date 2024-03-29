export const Photography = () => {
  // [file name, photo text]
  // [
  //   ["", ""],
  //   ["", ""],
  //   ["", ""],
  // ],
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
    [
      ["Water Tower Place (Top)", "Water Tower Place"],
      ["Museum Of Contemporary Art (Top)", "Museum Of Contemporary Art"],
      ["Navy Pier", "Navy Pier"],
    ],
    [
      ["Hudson Yards (High Bar)", "Hudson Yards"],
      ["Port Authority", "Port Authority"],
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
