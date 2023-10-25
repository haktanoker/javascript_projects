const bg = document.querySelector(".bg");
const counter = document.querySelector("#counter");

var count = 0;

var interval = setInterval(styleUpdate, 20);

function styleUpdate() {
    counter.innerHTML = `${count}%`;
    count++;
    if (count > 100) {
        clearInterval(interval);
    }
    bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;
    counter.style.opacity = `${scale(count, 0, 100, 1, 0)}`;
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}