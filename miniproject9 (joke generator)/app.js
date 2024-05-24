const joke = document.getElementById("joke");
const button = document.getElementById("btn");

const apikey = "971ceb58NvW6iaZK6Mo5IQ==JtwaQ8q7cEbVOr7c";
const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=";

const options = {
  method: "GET",
  headers: { "X-Api-Key": apikey },
};
button.addEventListener("click", async () => {
  try {
    joke.textContent = "loading...";
    button.disabled = true;
    button.innerText = "loading";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    console.log(data[0].joke);
    joke.textContent = data[0].joke;
    button.disabled = false;
    button.innerText = "tell me a joke";
  } catch (error) {
    joke.textContent = "no connection";
    button.disabled = false;
    button.innerText = "tell me a joke";
  }
});
