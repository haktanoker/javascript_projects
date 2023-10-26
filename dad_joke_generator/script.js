const joke = document.querySelector("#joke");
const jokeEl = document.querySelector("#joke");
const btn = document.querySelector(".btn");

btn.addEventListener("click", getJoke)
getJoke();
async function getJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };
    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    jokeEl.innerText = data.joke;
}