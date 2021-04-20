export default function inputValue(event, value, cb) {
  if (
    event.target.textContent === "-" ||
    event.target.textContent === "+" ||
    event.target.textContent === "/" ||
    event.target.textContent === "*"
  ) {
    cb(value + " " + event.target.textContent + " ");
  } else {
    cb(value + event.target.textContent);
  }
}
