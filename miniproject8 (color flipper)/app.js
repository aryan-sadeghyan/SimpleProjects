const tag = document.querySelector("#color-tag");
const box = document.querySelector("#box");
const btn = document.querySelector("#btn");
const body = document.querySelector("body");

const colors = ["#B9151B", "#FFFF9F", "#AD2EA4", "#000000", "#37FFA4"];

btn.addEventListener("click", () => {
  let index = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[index];

  tag.textContent = colors[index];
});
