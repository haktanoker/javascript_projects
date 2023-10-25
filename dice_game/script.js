"use strict"
var header, P1Name, P2Name, P1DefName, P2DefName, P1Inputs, P2Inputs, P1Result, P2Result;
// Sonuç için başlık
header = document.querySelector("#header_div h1");
// P1 ve P2 isim yazma inputları
P1Name = document.querySelector("#playerOne");
P2Name = document.querySelector("#playerTwo");
// P1 ve P2 için oluşturulan isimlere ulaşmak
P1DefName = document.querySelector(".dice_div_one p");
P2DefName = document.querySelector(".dice_div_two p");
// display ile yok etmek için sim yazma inputlarının kapsayıcı div'i
P1Inputs = document.querySelector(".user_name_one");
P2Inputs = document.querySelector(".user_name_two");
// Kullanıcıların sonuçları
P1Result = document.querySelector("#playerOneResult");
P2Result = document.querySelector("#playerTwoResult");

function setUserName(player) {
    if (player == P1Name) {
        if (P1Name.value === "" || P1Name.value === " ") {
            alert("Lütfen Player One için geçerli bir isim giriniz");
        } else {
            P1DefName.textContent = P1Name.value;
            P1Inputs.style.display = "none";
        }
    }
    else if (player == P2Name) {
        if (P2Name.value === "" || P2Name.value === " ") {
            alert("Lütfen Player Two için geçerli bir isim giriniz");
        } else {
            P2DefName.textContent = P2Name.value;
            P2Inputs.style.display = "none";
        }
    }
};
function randomNumber(min, max) {
    var number = Math.floor(Math.random() * (max - min) + min);
    return number;
}
function startGame() {
    let p1Dice = randomNumber(1, 6);
    let p2Dice = randomNumber(1, 6);
    if (P1DefName.textContent === "Player ONE" || P2DefName.textContent === "Player TWO"){
        header.textContent = "Lütfen kullanıcı isimlerini giriniz";
    } else {
        P1Result.textContent = p1Dice;
        P2Result.textContent = p2Dice;
        if (p1Dice === p2Dice) {
            header.textContent = `${P1DefName.textContent} ve ${P2DefName.textContent} berabere kaldı`;
        } else if (p1Dice > p2Dice) {
            header.textContent = `${P2DefName.textContent}, ${P1DefName.textContent} oyuncusunu yendi`;
        } else if (p1Dice < p2Dice) {
            header.textContent = `${P1DefName.textContent}, ${P2DefName.textContent} oyuncusunu yendi`;
        };
    };
};

