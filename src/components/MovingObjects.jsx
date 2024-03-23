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
    const initializeObjects = (totalObjects) => {
      const generatedObjects = Array.from({ length: totalObjects }).map((_, index) => {
        return createObject(index);
      });
  
      setObjects(generatedObjects);
    };

    initializeObjects(20); 
  }, []);


  const createObject = (id) => {
    const imagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    const speed = Math.random() * 10 + 80;
    const direction = id % 2 === 0 ? 'moveLeft' : 'moveRight';
    const xPos = direction === 'moveRight' ? Math.random() * 50 + 50 : Math.random() * 50 - 30;
    return { id, imagePath, speed, direction, xPos };
  };

  const handleAnimationEnd = (id) => {
    setObjects((prevObjects) => {
      const newObjects = [...prevObjects];
      const index = newObjects.findIndex((obj) => obj.id === id);
      if (index !== -1) {
        newObjects[index] = createObject(id);
      }
      return newObjects;
    });
  };

  return (
    <div className="moving-objects-container">
      {objects.map((obj) => (
        <Parallax speed={-Math.random() * 20 - 10} key={obj.id}>
          <img
            src={process.env.PUBLIC_URL + obj.imagePath}
            style={{
              animation: `${obj.direction} ${obj.speed}s linear infinite`,
              top: `${(Math.random() * 100) - 8}vh`,
              left: `${obj.xPos}%`,
              opacity: 0.95,
            }}
            className="moving-object"
            alt=""
            onAnimationEnd={() => handleAnimationEnd(obj.id)}
          />
        </Parallax>
      ))}
    </div>
  );
};

export default MovingObjects;
