import React, { useEffect, useState } from 'react';
import '../MovingObjects.css'; 

const imagePaths = [
  '/images/abstract/b01.svg',
  '/images/abstract/b02.svg',
  '/images/abstract/b07.svg',
];

const MovingObjects = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const generatedObjects = Array.from({ length: 5 }).map(() => {
      const imagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      const speed = Math.random() * (100) + 5; 
      // scale between 0.5 and 0.6
      const scale = Math.random() * (0.3 - 0.2) + 0.2;
      const direction = Math.random() > 0.5 ? 'moveRight' : 'moveLeft'; // Choose direction
      return { imagePath, speed, scale, direction };
    });

    setObjects(generatedObjects);
  }, []);

  return (
    <div className="moving-objects-container">
      {objects.map((obj, index) => (
        <img
          key={index}
          src={process.env.PUBLIC_URL + obj.imagePath}
          style={{
            animation: `${obj.direction} ${obj.speed}s linear infinite`,
            transform: `scale(${obj.scale})`,
            bottom: `${index * 20}%`, 
          }}
          className="moving-object"
          alt=""
        />
      ))}
    </div>
  );
};

export default MovingObjects;
