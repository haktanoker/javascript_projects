const container = document.querySelector(".image_slider");
const img = document.querySelectorAll("img.images");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const deneme = document.querySelector("#deneme");
const contWidth = container.clientWidth;
var imgCount = 0;

var after = () => {
    if (imgCount == img.length - 1) {
        imgCount = 0
    } else {
        imgCount++;
    }
    img.forEach((item) => {
        item.style.transform = `translateX(-${contWidth * imgCount}px)`;
        console.log(`translateX(-${contWidth * imgCount}px)`);
    });
};
var before = () => {
    if (imgCount == 0) {
        imgCount = img.length - 1
    } else {
        imgCount--;
    }
    img.forEach((item) => {
        item.style.transform = `translateX(-${contWidth * imgCount}px)`;
        console.log(`translateX(${contWidth * imgCount}px)`);
    });
};

next.addEventListener("click", after);
prev.addEventListener("click", before);

// Otomatik dönmesini sağlayan kod
setInterval(after, 5000);