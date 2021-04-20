function parse(str) {
  return Function(`'use strict'; return (${str})`)();
}

export default function resultValue(value, cb) {
  if (
    value.includes("-") ||
    value.includes("+") ||
    value.includes("*") ||
    value.includes("/")
  ) {
    const str = value
      .split(" ")
      .map((el) => {
        if (el === "-" || el === "+" || el === "*" || el === "/") {
          return el;
        } else {
          return +el;
        }
      })
      .reduce((acc, el) => {
        return acc + el;
      }, "");
    if (value) {
      let result = parse(str);
      if (result === Infinity || result === -Infinity) {
        cb("не допустимі дані");
      } else {
        cb(result);
      }
    }
  } else {
    return;
  }
}
