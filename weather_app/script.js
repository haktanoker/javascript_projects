const input = document.querySelector("#city_value");
const btn = document.querySelector("button");
const sehir = document.querySelector("#sehir");
const sicaklik = document.querySelector("#sicaklik span");
const durum = document.querySelector("#durum");
const hissedilen = document.querySelector("#hissedilen span");

function getWeather() {
    let API = "YOUR_API_KEY";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API}&units=metric&lang=tr`;
    fetch(url)
        .then((res) => res.json())
        .then(city => {
            const { name, sys: { country }, main: { temp, feels_like }, weather: [{ description }] } = city;
            sehir.innerHTML = `${name}, ${country}`;
            sicaklik.innerHTML = `${temp}`;
            durum.innerHTML = `${description}`;
            hissedilen.innerHTML = `${feels_like}`;
        }).catch(err => alert("API ile ilgili bir hata oluştu."));
};
btn.addEventListener("click", () => {
    getWeather(input.value);
    input.value = "";
    input.focus();
})
input.addEventListener("keypress", function () {
    if (event.key == "Enter") {
        btn.click();
    }
});
