const boxs = document.querySelectorAll(".box");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

let selected = "";

boxs.forEach((box) => {
  box.addEventListener("click", (e) => {
    removeActive();
    box.classList.add("active");
    selected = e.target.innerText || e.target.parentNode.innerText;
    console.log(selected);
  });
});

function removeActive() {
  boxs.forEach((box) => {
    box.classList.remove("active");
  });
}

btn.addEventListener("click", () => {
  if (selected !== "") {
    container.innerHTML = `<strong>thank you!</strong>
  <br>
  <br>
  Feedback : ${selected}
  <br>
  <br>
  We will use you feedback to emprove our client support`;
  }
});
