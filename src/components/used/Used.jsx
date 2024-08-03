import  { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

function Used() {
  const {count} = useSelector((state)=>state.count)
  // const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  
  // const [isMin, setIsMin] = useState(getRandomNumber(0, 10));
  // const [isMax , setIsMax] = useState(getRandomNumber(70000, 80000));
  // const [reset, setReset] = useState(false);

  // useEffect(() => {
  //   let animationFrameId;

    // const increment = () => {
    //   if (isMin < isMax) {
    //     setIsMin(prevMin => prevMin + 1);
    //     animationFrameId = requestAnimationFrame(increment);
    //   } else {
    //     setReset(true);
    //   }
    // };
    // if (!reset) {
    //   increment();
    // } else {
    //   const timeoutId = setTimeout(() => {
    //     setIsMin(getRandomNumber(0, 10));
    //     setIsMax(getRandomNumber(70000, 80000));
    //     setReset(false);
    //   }, 10000);

    //   return () => clearTimeout(timeoutId);
    // }

    // return () => cancelAnimationFrame(animationFrameId);
  // }, [isMin, isMax, reset]);
  

  const { t } = useTranslation();
  
  return (
    <div className='used-texts'>
      <h1>{count}</h1>
      <p>{t("колдонуучунун саны")}</p>
    </div>
  );
}

export default Used;
