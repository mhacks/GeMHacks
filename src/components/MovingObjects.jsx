import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import '../MovingObjects.css';

const imagePaths = [
  '/images/abstract/b01.svg',
  '/images/abstract/b02.svg',
  '/images/abstract/b07.svg',
  '/images/abstract/b08.svg',
  '/images/abstract/b09.svg',
  '/images/abstract/b10.png',
  '/images/abstract/b12.png',
];

const MovingObjects = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const totalObjects = 20;
    const generatedObjects = Array.from({ length: totalObjects }).map((_, index) => {
      const imagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      const speed = Math.random() * 10 + 80;
      const direction = index % 2 === 0 ? 'moveLeft' : 'moveRight';
      const xPos = direction === 'moveRight' ? Math.random() * 50 + 50 : Math.random() * 50 - 30; 
      return { imagePath, speed, direction, xPos };
    });

    setObjects(generatedObjects);
  }, []);

  return (
    <div className="moving-objects-container">
      {objects.map((obj, index) => (
        <Parallax speed={-Math.random() * 20 - 10} key={index}>
          <img
            src={process.env.PUBLIC_URL + obj.imagePath}
            style={{
              animation: `${obj.direction} ${obj.speed}s linear infinite`,
              top: `${(Math.random()*100) - 8}vh`,
              left: `${obj.xPos}%`, 
            }}
            className="moving-object"
            alt=""
          />
        </Parallax>
      ))}
    </div>
  );
};

export default MovingObjects;
