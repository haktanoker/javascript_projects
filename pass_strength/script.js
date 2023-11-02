const passInput = document.querySelector("#pass");
const strength = document.querySelectorAll(".strength_box");
const showPass = document.querySelector("#checkbox");
const length = document.querySelector(".length");
const number = document.querySelector(".number");
const lower = document.querySelector(".lower");
const upper = document.querySelector(".upper");
const special = document.querySelector(".special");

var length_chck = false;
var number_chck = false;
var lower_chck = false;
var upper_chck = false;
var special_chck = false;


passInput.addEventListener("input", (e) => {
    length_chck = e.target.value.length >= 8;
    number_chck = hasNumber(e.target.value);
    lower_chck = hasLowercase(e.target.value);
    upper_chck = hasUppercase(e.target.value);
    special_chck = hasSpecialCharacter(e.target.value);

    var changeReq = {
        length: length_chck,
        number: number_chck,
        lower: lower_chck,
        upper: upper_chck,
        special: special_chck
    };

    for (const key in changeReq) {
        const element = document.querySelector(`.${key}`);
        changeReq[key] ? element.classList.add("include") : element.classList.remove("include");
    }

    var checks = [length_chck, number_chck, lower_chck, upper_chck, special_chck];
    var trueCount = checks.filter(check => check === true).length;

    strength.forEach(box => {
        box.classList.remove("visible");
    });

    if (trueCount === 0) {
        // Hiçbiri görünmeyecek
    } else if (trueCount <= 2) {
        // Sadece birinci kutucuk görünür
        strength[0].classList.add("visible");
    } else if (trueCount >= 3 && trueCount <= 4) {
        // İlk iki kutucuk görünür
        strength[0].classList.add("visible");
        strength[1].classList.add("visible");
    } else if (trueCount === 5) {
        // Tüm kutucuklar görünür
        strength[0].classList.add("visible");
        strength[1].classList.add("visible");
        strength[2].classList.add("visible");
    }



})
showPass.addEventListener("input", (e) => {
    var check = passInput.getAttribute("type");
    if (check === "password") {
        passInput.setAttribute("type", "text");
    }
    if (check === "text") {
        passInput.setAttribute("type", "password");
    }
})

function hasNumber(str) {
    return /[0-9]/.test(str);
}
function hasLowercase(str) {
    return /[a-z]/.test(str);
}
function hasUppercase(str) {
    return /[A-Z]/.test(str);
}
function hasSpecialCharacter(str) {
    let specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
    return specialChars.test(str);
}