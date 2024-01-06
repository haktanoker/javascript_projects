const colorPicker = document.getElementById("color");
const colorBG = document.querySelector(".color_bg");
const hex = document.querySelector("#hex");
const rgb = document.querySelector("#rgb");
const input = document.querySelector("#colorEnter");

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

var setColor = () => colorBG.style.backgroundColor = colorPicker.value;
setColor();

function changeInputs(value){
    // hex
    hex.innerText = value;
    // rgb
    let RGB = hexToRgb(value);
    rgb.innerText = `rgb(${RGB.r},${RGB.g},${RGB.b})`;
}

// Renk değiştirmeyle eşzamanlı olarak bg'yi değiştirmek
colorPicker.addEventListener("input", (e) => {
    colorBG.style.backgroundColor = e.target.value;
    changeInputs(e.target.value);
});

// inputa girilen kodu çevirmek
input.addEventListener("input", (e) => {
    let inputValue = e.target.value;
    if(inputValue[0] == "#"){
        let convert = hexToRgb(inputValue);
        colorBG.style.backgroundColor = `rgb(${convert.r},${convert.g},${convert.b})`;
        changeInputs(inputValue);
        colorPicker.value = inputValue;
    }
})

// Rengi kopyalamak
function copyBoard(e) {
    var textarea = document.createElement('textarea');
    textarea.value = e.previousElementSibling.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
