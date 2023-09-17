// CongratulatoryTile.tsx
import React, { useState } from "react";
import "./CongratulatoryTile.css";

interface CongratulatoryTileProps {
  houseName: string;
}

const CongratulatoryTile: React.FC<CongratulatoryTileProps> = ({
  houseName,
}) => {
  const [isShown, setIsShown] = useState(false);

  const handleShowButtonClick = () => {
    setIsShown(true);
  };

  return (
    <div>
      <button onClick={handleShowButtonClick}>Show Congratulatory Tile</button>
      {isShown && (
        <div className="overlay">
          <div className="tile popped-out">
            <div className="tile-content">
              <h1>Congratulations!</h1>
              <p>You got this house:</p>
              <p className="house-name">{houseName}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CongratulatoryTile;
