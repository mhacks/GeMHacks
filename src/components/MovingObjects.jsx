import React, { useEffect, useState } from 'react';
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
      const direction = Math.random() > 0.5 ? 'moveRight' : 'moveLeft'; 
      const top = `${index * (Math.random() * 5) + 10}%`; 
      const left = `${Math.random() * 100}%`;
      return { imagePath, speed, scale, direction, top, left }; // Include left property
    });

    setObjects(generatedObjects);
  }, []);

  return (
    <div className="moving-objects-container absolute top-0 left-0 w-full h-full pointer-events-none">
      {objects.map((obj, index) => (
        <img
          key={index}
          src={process.env.PUBLIC_URL + obj.imagePath}
          style={{
            animation: `${obj.direction} ${obj.speed}s linear infinite`,
            transform: `scale(${obj.scale})`,
            top: obj.top,
            left: obj.left, 
            mixBlendMode: 'add',
          }}
          className="moving-object"
          alt=""
        />
      ))}
    </div>
  );
};

export default MovingObjects;
