// get elements
const input = document.querySelector("input");
const button = document.querySelector("button");
const icon = document.querySelector("i");
const span = document.querySelector("span");
const notification = document.querySelector(".notification");

// variables
const alphab = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const special = [
  "!",
  "¡",
  "?",
  "$",
  "%",
  "&",
  "/",
  "(",
  ")",
  "=",
  "#",
  "@",
  ":",
  "_",
  "-",
  "{",
  "}",
  "[",
  "]",
];
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const allChars = [...alphab, ...special, ...nums];

//functions
function handleIcon() {
  if (input.value === "") {
    return;
  }
  const pwd = input.value;
  span.textContent = pwd;
  notification.style.right = 0;
  copyToClipboard();
  setTimeout(() => {
    notification.style.right = "-350px";
  }, 2000);
}

function generatePwd() {
  input.value = "";
  const carrier = [];
  const charNum = 14;
  const length = allChars.length;
  for (let i = 0; i < charNum; i++) {
    const random = Math.floor(Math.random() * length);
    carrier.push(allChars[random]);
  }
  input.value = carrier.join("");
}

function copyToClipboard() {
  input.select();
  input.setSelectionRange(0, 14);
  navigator.clipboard.writeText(input.value);
}

// event listeners
button.addEventListener("click", generatePwd);
icon.addEventListener("click", handleIcon);
