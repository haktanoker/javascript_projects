const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const millisecond = document.querySelector(".millisecond");
const startwatch = document.querySelector(".start");
const stopwatch = document.querySelector(".stop");
const clearwatch = document.querySelector(".clear");

var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

function baslat() {
    startwatch.disabled = true;

    let counterInt = setInterval(function () {
        milliseconds++
        if (milliseconds == 100) {
            seconds++;
            milliseconds = 0;
            if (seconds == 60) {
                minutes++;
                seconds = 0;
                if (minutes == 60) {
                    hours++;
                    minutes = 0;
                }
            }
        }
        millisecond.textContent = milliseconds;
        second.textContent = seconds < 10 ? `0${seconds}` : seconds;
        minute.textContent = minutes < 10 ? `0${minutes}` : minutes;
        hour.textContent = hours < 10 ? `0${hours}` : hours;
    }, 10);

    stopwatch.addEventListener("click", function () {
        clearInterval(counterInt);
        startwatch.disabled = false;
    });

    clearwatch.addEventListener("click", function () {
        clearInterval(counterInt);
        startwatch.disabled = false;
        milliseconds = 0;
        seconds = 0;
        minutes = 0
        hours = 0;
        millisecond.textContent = "00";
        second.textContent = "00";
        minute.textContent = "00";
        hour.textContent = "00";
    });

}
startwatch.addEventListener("click", baslat);
