import React, { useEffect, useRef, useState } from "react";
import inputKeyValue from "../../services/inputKeyValue";
import inputValue from "../../services/inputValue";
import resultValue from "../../services/resaultValue";
import ButtonNumber from "../buttons/ButtonNumber";
import Display from "../display/Display";
import style from "./calcWrapper.module.css";

const CalcWrapper = () => {
  const refMain = useRef();
  const [result, setResult] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [tempValue, setTempValue] = useState("");
  const [pressKey, setPressKey] = useState();

  const change = (e) => {
    if (tempValue === "0" || isNaN(tempValue)) {
      setTempValue("");
    }
    if (e.type === "click") {
      inputValue(e, tempValue, setTempValue);
    } else {
      inputKeyValue(e.key, tempValue, setTempValue);
    }

    setPressKey(e.key);
  };

  const reset = () => {
    setSecondValue("");
    setTempValue("");
    setResult();
  };

  const equally = () => {
    setTempValue("");
  };

  const deleteNum = () => {
    if (tempValue.length === 1) {
      setTempValue("");
    } else {
      setTempValue(tempValue.substring(0, tempValue.length - 1));
      setSecondValue("");
    }
  };

  if (pressKey === "Backspace") {
    deleteNum();
    setPressKey();
  }

  if (pressKey === "Escape") {
    reset();
    setPressKey();
  }
  console.log(tempValue);
  console.log(secondValue);
  console.log(result);
  useEffect(() => {
    refMain.current.focus();

    if (tempValue === "0") {
      setTempValue("");
      return;
    } else {
      resultValue(tempValue, setResult);
    }

    if (tempValue === "") {
      setSecondValue(result);
      setResult("");
      //   setTempValue(secondValue);
      console.log(tempValue);
      console.log(secondValue);
    } else {
      setSecondValue(tempValue);
    }
  }, [tempValue]);

  return (
    <div
      className={style.wrapper}
      ref={refMain}
      tabIndex="0"
      onKeyDown={change}
    >
      <div>
        <Display result={result} value={secondValue} />
      </div>
      <div className={style["button_section"]}>
        <div className={""}>
          <ButtonNumber value={"AC"} cb={reset} />
        </div>
        <div className={""}>
          <ButtonNumber value={"<--"} cb={deleteNum} />
        </div>
        <div className={""}>
          <ButtonNumber value={"%"} />
        </div>
        <div className={""}>
          <ButtonNumber value={"/"} cb={change} />
        </div>
        <div className={""}>
          <ButtonNumber value={7} cb={change} />
        </div>
        <div className={""}>
          <ButtonNumber value={8} cb={change} />
        </div>
        <div className={""}>
          <ButtonNumber value={9} cb={change} />
        </div>
        <div className={""}>
          <ButtonNumber value={"*"} cb={change} />
        </div>
        <div className={""}>
          <ButtonNumber value={4} cb={change} />
        </div>
        <div className={""}>
          <ButtonNumber value={5} cb={change} />
        </div>
        <div className={""}>
          <ButtonNumber value={6} cb={change} />
        </div>
        <div className={""}>
          <ButtonNumber value={"-"} cb={change} />
        </div>
        <div className={""}>
          <ButtonNumber value={1} cb={change} />
        </div>
        <div className={""}>
          <ButtonNumber value={2} cb={change} />
        </div>
        <div className={""}>
          <ButtonNumber value={3} cb={change} />
        </div>
        <div className={""}>
          <ButtonNumber value={"+"} cb={change} />
        </div>
        <div className={""}>
          <ButtonNumber value={"."} cb={change} />
        </div>
        <div className={""}>
          <ButtonNumber value={0} cb={change} />
        </div>
        <div className={style.result}>
          <ButtonNumber value={"="} cb={equally} />
        </div>
      </div>
    </div>
  );
};

export default CalcWrapper;
