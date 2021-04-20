import React from "react";
import style from "./buttonNumber.module.css";

const ButtonNumber = ({ value, cb }) => {
  const change = (e) => {
    cb(e);
  };

  return (
    <div
      className={style.button}
      onClick={change}
      value={value}
      //   tabIndex="0"
      //   onKeyDown={(e) => console.log(e.key)}
    >
      {value}
    </div>
  );
};

export default ButtonNumber;
