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
  '/images/abstract/b11.png',
  '/images/abstract/b12.png',
];

const MovingObjects = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const generatedObjects = Array.from({ length: 20 }).map(() => {
      const imagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      const speed = Math.random() * (10) + 80;
      const scale = Math.random() * (0.3 - 0.2) + 0.2; 
      const direction = Math.random() > 0.5 ? 'moveRight' : 'moveLeft'; 
      const xPos = Math.random() * 100; 
      return { imagePath, speed, scale, direction, xPos };
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
              transform: `scale(${obj.scale})`,
              top: `${index * 15}%`,
              left: `${obj.xPos}%`, 
              opacity: 0.9,
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
