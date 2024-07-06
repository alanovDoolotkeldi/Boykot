import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Used() {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  
  const [isMin, setIsMin] = useState(getRandomNumber(0, 10));
  const [isMax , setIsMax] = useState(getRandomNumber(70000, 80000));

  useEffect(() => {
    let animationFrameId;

    const increment = () => {
      if (isMin < isMax) {
        setIsMin(prevMin => prevMin + 1);
        animationFrameId = requestAnimationFrame(increment);
      }
    };

    increment();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isMin, isMax]);

  const { t } = useTranslation();
  
  return (
    <div className='used-texts'>
      <h1>{isMin}</h1>
      <p>{t("колдонуучунун саны")}</p>
    </div>
  );
}

export default Used;
