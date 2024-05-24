const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

const url = "https://api.api-ninjas.com/v1/quotes?category=happiness";
const key = "971ceb58NvW6iaZK6Mo5IQ==JtwaQ8q7cEbVOr7c";

const options = {
  method: "GET",
  headers: { "X-Api-Key": key },
};

async function fetchAPI() {
  quote.innerHTML = " loading... ";
  author.innerHTML = "";
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  quote.innerHTML = data[0].quote;
  author.innerHTML = ` " ${data[0].author} "`;
}

btn.addEventListener("click", () => {
  fetchAPI();
});

document.addEventListener("DOMContentLoaded", () => {
  fetchAPI();
});
