const inputEl = document.getElementById("input");
const text = document.querySelector(".text");
const title = document.getElementById("title");
const meaning = document.getElementById("meaning");
const subcontainer = document.getElementById("subContainer");
const audio = document.querySelector("audio");

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

async function fetchAPI(word) {
  try {
    text.style.display = "block";
    text.innerHTML = "loading...";
    subcontainer.style.display = "none";
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();

    title.textContent = data[0].word;
    meaning.textContent = data[0].meanings[0].definitions[0].definition;
    audio.setAttribute("src", data[0].phonetics[0].audio);

    text.style.display = "none";
    subcontainer.style.display = "block";
  } catch (error) {
    text.innerHTML = "error! please try agian";
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value.trim().length > 0 && e.key == "Enter") {
    fetchAPI(e.target.value);
  }
});
