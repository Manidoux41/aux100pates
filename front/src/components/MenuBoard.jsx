import React, { useEffect, useState } from "react";

const MenuBoard = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  return (
    <>
      <div className={`menu-container ${isVisible ? 'visible' : ''}`}>
        <div className="menu-board">
          <div className="menu-content">
            <h1>Nos menus</h1>
            <ul>
              <li>Reine</li>
              <li>4 saisons</li>
              <li>Jardinière</li>
              <li>Végétarienne...</li>
              <li></li>
            </ul>
            <h2>Le reste des menus seront intégrés directement via la backend de l'application...</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBoard;
