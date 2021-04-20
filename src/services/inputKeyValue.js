export default function inputKeyValue(event, value, cb) {
  if (event === "-" || event === "+" || event === "/" || event === "*") {
    cb(value + " " + event + " ");
  } else if (
    event === "1" ||
    event === "2" ||
    event === "3" ||
    event === "4" ||
    event === "5" ||
    event === "6" ||
    event === "7" ||
    event === "8" ||
    event === "9" ||
    event === "0"
  ) {
    return cb(value + event);
  } else {
    return;
  }
}
