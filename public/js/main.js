function hex_code(x){
  let table = [
    "0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"
  ];
  let hex = "";
  x = Number(x);
  while(x != 0){
    let code = x%16;
    hex += table[code];
    x /= 16;
    x = Math.floor(x);
  }

  let i = 0;
  let n = hex.length;
  let temp = hex;
  if(n == 1){
    temp += "0";
  }
  if(n == 0){
    return "00";
  }
  hex = "";
  while(i < n){
    hex += temp[n-i-1];
    i++;
  }
  return hex;
}

function changeColor(red, blue, green, alpha) {
  let r = red.value;
  let b = blue.value;
  let g = green.value;
  let a = alpha.value/10;
  let colorCombination = `rgba(${r},${g},${b},${a})`;
  const colorPicker = document.querySelector("div.container");
  colorPicker.style.backgroundColor = colorCombination;
  let color = document.getElementById("color");
  let hex_color = document.getElementById("hex_color");
  color.innerText = `(${r},${g},${b},${a})`;
  hex_color.innerText = `${hex_code(r)}${hex_code(g)}${hex_code(b)}`
  console.log(colorPicker.style.backgroundColor);
}

const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const alpha = document.getElementById("alpha");
let code = document.getElementById("colorCode");
let hex_color = document.getElementById("colorCodeHex");

red.addEventListener("input", () => changeColor(red, blue, green, alpha));
green.addEventListener("input", () => changeColor(red, blue, green, alpha));
blue.addEventListener("input", () => changeColor(red, blue, green, alpha));
alpha.addEventListener("input", () => changeColor(red, blue, green, alpha));

code.addEventListener("click", (e) => {
  let text = code.innerText;
  navigator.clipboard.writeText(text);
  let toast = document.getElementById("toast");
  toast.style.color = "black";
  toast.style.background = "white"
  setTimeout(() => {
    toast.style.color = "transparent";
    toast.style.background = "transparent";
  }, 500);
})


hex_color.addEventListener("click", (e) => {
  let text = hex_color.innerText;
  navigator.clipboard.writeText(text);
  let toast = document.getElementById("toast");
  toast.style.color = "black";
  toast.style.background = "white"
  setTimeout(() => {
    toast.style.color = "transparent";
    toast.style.background = "transparent";
  }, 500);
})