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
    const generatedObjects = Array.from({ length: 20 }).map((_, index) => {
      const imagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      const speed = Math.random() * (10) + 80; 
      const scale = Math.random() * (0.3 - 0.2) + 0.2;
      const direction = index % 2 === 0 ? 'moveRight' : 'moveLeft';
      const top = `${Math.random() * (100 - 5) + 5}%`;
      const left = `${Math.random() * (100 - 5) + 5}%`;
      return { imagePath, speed, scale, direction, top, left }; 
    });

    setObjects(generatedObjects);
  }, []);

  return (
    <div className="moving-objects-container absolute top-0 left-0 w-full h-full pointer-events-none">
      {objects.map((obj, index) => (
        <Parallax speed={-Math.random() * 20 - 10} key={index}>
        <img
          key={index}
          src={process.env.PUBLIC_URL + obj.imagePath}
          style={{
            animation: `${obj.direction} ${obj.speed}s linear infinite`,
            transform: `scale(${obj.scale})`,
            top: obj.top,
            left: obj.left, 
            mixBlendMode: 'screen',
            position: 'absolute',
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
