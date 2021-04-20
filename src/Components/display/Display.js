import React from "react";
import style from "./display.module.css";

const Display = ({ result, value }) => {
  return (
    <div className={style.display}>
      <input
        className={style.value}
        disabled
        // defaultValue="0"
        value={!value ? "0" : value}
        tabIndex="0"
        onKeyDown={(e) => console.log(e.key)}
      />

      <input
        className={style.result}
        // defaultValue="0"
        disabled
        value={!result ? "" : result}
      />
    </div>
  );
};

export default Display;
