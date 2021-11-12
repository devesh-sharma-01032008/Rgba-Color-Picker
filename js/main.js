function changeColor(red, blue, green, alpha) {
  let r = red.value;
  let b = blue.value;
  let g = green.value;
  let a = alpha.value;
  let colorCombination = `rgba(${r},${g},${b},${a})`;
  const colorPicker = document.querySelector("div.container");
  colorPicker.style.backgroundColor = colorCombination;
  let color = document.getElementById("color");
  color.innerText = `(${r},${g},${b},${a})`;
  console.log(colorPicker.style.backgroundColor);
}

const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const alpha = document.getElementById("alpha");
let code = document.getElementById("colorCode");

red.addEventListener("change", () => changeColor(red, blue, green, alpha));
green.addEventListener("change", () => changeColor(red, blue, green, alpha));
blue.addEventListener("change", () => changeColor(red, blue, green, alpha));
alpha.addEventListener("change", () => changeColor(red, blue, green, alpha));

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