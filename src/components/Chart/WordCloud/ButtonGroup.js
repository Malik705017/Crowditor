import React, { useState } from "react";
import "./button-group.css";

const ButtonGroup = ({ buttons, doSomethingAfterClick }) => {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (event, id) => {
    setClickedId(id);
    doSomethingAfterClick({id});
  };

  const Tab = ({buttonLabel, i}) => {
      return(
        <svg width="117" height="59" viewBox="0 0 117 59" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.972 4.98562C23.1981 1.97124 26.1281 0 29.3823 0H81.781C84.7787 0 87.5248 1.67587 88.8956 4.34178L111.006 47.3418C113.743 52.6658 109.877 59 103.891 59H11.8908C6.21113 59 2.34034 53.2467 4.48043 47.9856L21.972 4.98562Z" fill="#669278"
        name={buttonLabel}
        onClick={(event) => handleClick(event, i)}
        className={i === clickedId ? "customButton active" : "customButton"}
        />
        <text fontFamily="Verdana" fontSize="15" fill="white" x="50" y="50" textAnchor="middle" alignement-baseline="middle" className={i === clickedId ? "text active_text" : "text"}>{buttonLabel}</text>
      </svg> 
      )
  }

  return (
    <>
      {buttons.map((buttonLabel, i) => (
          <Tab buttonLabel = {buttonLabel} i ={i} key={i}/>


      ))}
    </>
  );
};

export default ButtonGroup;