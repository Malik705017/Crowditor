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
        <svg width="65" height="31" viewBox="0 0 93 31" fill="none" xmlns="http://www.w3.org/2000/svg" name={buttonLabel}
        onClick={(event) => handleClick(event, i)}>
          <path d="M0 15C0 6.71573 6.71573 0 15 0H78C86.2843 0 93 6.71573 93 15V16C93 24.2843 86.2843 31 78 31H15C6.71573 31 0 24.2843 0 16V15Z" fill="#669278"
          
          className={i === clickedId ? "customButton active" : "customButton"}
          />
          <text fontFamily="Verdana" fontSize="15" fill="white" x="15%" y="70%" className={i === clickedId ? "text active_text" : "text"}>{buttonLabel}</text>
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