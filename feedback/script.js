const hearts = document.querySelectorAll(".heart i");
const btn = document.querySelector("button");

var feedback = 0;

hearts.forEach(heart => {
    heart.addEventListener("mouseenter", (e) => {
        let actID = Number(e.target.id);
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].style.color = "#998ba1";
        }
        for (let i = 0; i <= actID - 1; i++) {
            hearts[i].style.color = "red";
        }
    });

    heart.addEventListener("click", (e) => {
        for (let i = 0; i <= Number(e.target.id) - 1; i++) {
            hearts[i].style.color = "red";
        }
        removeActive();
        heart.classList.add("active");
        feedback = e.target.id;
        console.log(feedback);
    });
});

function removeActive() {
    hearts.forEach(heart => { heart.classList.remove("active") })
}

btn.addEventListener("click", () => {
    if (feedback == 0) {
        document.querySelector(".att").style.opacity = "1";
    } else {
        document.querySelector(".container").innerHTML = `
    <h1 style="margin:2rem 0">Your feedback rating is ${feedback}/5</h1>
    `}
})