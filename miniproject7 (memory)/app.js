const cardsArray = [
  {
    name: "cheeseburger",
    img: "./images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "./images/fries.png",
  },
  {
    name: "hotdog",
    img: "./images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },
  {
    name: " pizza",
    img: "./images/pizza.png",
  },
  {
    name: "cheeseburger",
    img: "./images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "./images/fries.png",
  },
  {
    name: "hotdog",
    img: "./images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },
  {
    name: " milkshake",
    img: "./images/milkshake.png",
  },
  {
    name: "pizza",
    img: "./images/pizza.png",
  },
];
let source;
let i = 0;
const chosen = [];
cardsArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
function creatBoard() {
  cardsArray.forEach(() => {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/blank.png");
    card.setAttribute("id", i);
    i++;
    grid.appendChild(card);
    addEventListener("click", flipCard);
  });
}
creatBoard();

function flipCard(e) {
  const cardId = e.target.id;
  chosen.push(cardsArray[cardId].name);
  e.target.setAttribute("src", cardsArray[cardId].img);
}
