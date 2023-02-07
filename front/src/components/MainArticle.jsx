import React, { useEffect, useState } from "react";
import terrasse from "../assets/images/terrasse.jpg";

const MainArticle = () => {
  const [showImage, setShowImage] = useState(false);
  const [hideImage, setHideImage] = useState(false);
  
  useEffect(() => {
    setShowImage(false);
  }, []);

  const handleMouseLeave = () => {
    setHideImage(true);
    setTimeout(() => {
      setShowImage(false);
      setHideImage(false);
    }, 0);
  };

  return (
    <article>
      {showImage ? (
        <div className={`content-image ${hideImage ? "rotate-out" : ""}`} onMouseLeave={handleMouseLeave}>
            <img src={terrasse} alt="terrasse" />
        </div>
      ) : (
        <div
          className={`content-text ${hideImage ? "rotate-out" : ""}`}
          onMouseEnter={() => setShowImage(true)}
          onMouseLeave={handleMouseLeave}
        >
          <h2>Bienvenue au 100 Pâtes</h2>
          <p> Le restaurant Aux 100 pâtes à Dannemarie (68) est un bar à pâtes qui se situe le long de la piste cyclable, l'Eurovelo 6, au niveau du port de plaisance de Dannemarie (68) dans le Sundgau. Nous vous proposons 4 sortes de pâtes avec plus de 40 accompagnements réalisés sur place à la minute. Des desserts maisons, des boissons fraiches et chaudes et des glaces sont aussi sur notre carte. </p>
        </div>
      )}
      
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </article>
  );
};

export default MainArticle;
