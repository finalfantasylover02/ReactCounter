import React, { useState, useEffect } from "react";
import "../../styles/index.css"; // Import the CSS file containing the styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function to clear the interval when component unmounts
  }, []); // Empty dependency array ensures that the effect runs only once on mount
  
  const days = Math.floor(count / (60 * 60 * 24));
  const hours = Math.floor((count % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((count % (60 * 60)) / 60);
  const seconds = count % 60;



  return (
    <div className="bigCounter">
      <FontAwesomeIcon icon={faClock}/>
      <div>{days}</div>
      <div>{hours} </div>
      <div>{minutes} </div>
      <div>{seconds} </div>
    </div>
  );
};

export default Counter;