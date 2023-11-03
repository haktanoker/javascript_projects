const notifyCont = document.querySelector(".notify_div");
const btn = document.querySelector("button");

const texts = [
    "Error message",
    "The server configured changed",
    "Success message",
    "Test notification"
];
const colors = [
    "#ffc09f",
    "#ffee93",
    "#adf7b6",
    "#a0ced9"
];

btn.addEventListener("click", getNotification);

function getNotification() {
    let random = randomNumber(0, colors.length);
    const notify = document.createElement("div");
    notify.classList.add("notify");
    notify.innerText = texts[random];
    notify.style.backgroundColor = `${colors[random]}`;
    notifyCont.appendChild(notify);
    setTimeout(() => notify.classList.add("visible"), 10);

    setTimeout(() => {
        notify.classList.remove("visible");
        setTimeout(() => notify.remove(), 300)
    }, 3000)
}

function randomNumber(min, max) {
    var number = Math.floor(Math.random() * (max - min) + min);
    return number;
};