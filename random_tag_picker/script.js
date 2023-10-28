const input = document.querySelector("#input");
const tagCont = document.querySelector(".tags");

input.focus();
// I used keyup, not keydown, to prevent it from returning a null value when the key is pressed for the first time.
input.addEventListener("keyup", (e) => {
    let allTags = document.querySelectorAll(".tag");
    createTag(e.target.value);
    if (e.key === "Enter") {
        if (allTags.length == 0) {
            alert("Veri gir")
        } else if (allTags.length == 1) {
            alert("En az 2 adet veri gir")
        } else {
            startRepeat();
        }
    };
});

function startRepeat() {
    const tags = document.querySelectorAll(".tag");
    var selectedNumber = randomNumber(0, tags.length);
    var startLoop = setInterval(() => {
        var number = randomNumber(0, tags.length);
        tags.forEach((tag) => {
            tag.style.backgroundColor = "#3F72AF"
        })
        tags[number].style.backgroundColor = "#112D4E"
    }, 100);
    setTimeout(() => {
        clearInterval(startLoop);
        tags.forEach((tag) => {
            tag.style.backgroundColor = "#3F72AF"
        })
        tags[selectedNumber].style.backgroundColor = "brown"
        setTimeout(() => {
            input.value = "";
            tagCont.innerHTML = '';
        }, 2000);
    }, 4000); // change 5000 for change the loop's second 
};

function randomNumber(min, max) {
    var number = Math.floor(Math.random() * (max - min) + min);
    return number;
};

function createTag(value) {
    let tags = value.split(",")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => tag.trim());

    tagCont.innerHTML = '';

    tags.forEach((tag) => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag
        tagCont.appendChild(tagEl)
    })
};