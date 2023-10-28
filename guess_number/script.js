const guessInput = document.querySelector("#guess");
const button = document.querySelector("#guessSend");
const attention = document.querySelector("#attention");
const kalanHak = document.querySelector("#left span");
const numbers = document.querySelector("#numbers span");
const playAgain = document.querySelector("#startAgain");
var kalan, tahminler, random;
kalan = 10;
tahminler = [];

function randomNumber(min, max) {
    var number = Math.floor(Math.random() * (max - min) + min);
    return number;
};
random = randomNumber(1, 100);
button.addEventListener("click", () => {
    if (kalan == 1) {
        kalan = 0;
        attention.textContent = "Tahmin hakkınız bitti. Üretilen Sayı: " + random;
        playAgain.style.display = "block";
        tahminler.push(guessInput.value);
        numbers.textContent = tahminler;
        kalanHak.textContent = kalan;
        guessInput.value = "";
    } else {
        if (guessInput.value == "") {
            attention.textContent = "Bir sayı giriniz";
            kalan++;
        } else if (guessInput.value == random) {
            attention.textContent = "TEBRİKLER DOĞRU BİLDİNİZ!"
            playAgain.style.display = "block";
        } else if (guessInput.value < random) {
            attention.textContent = "Üretilen Sayı, tahmininizden daha büyük"
            tahminler.push(" " + guessInput.value);
        } else if (guessInput.value > random) {
            attention.textContent = "Üretilen Sayı, tahmininizden daha küçük"
            tahminler.push(" " + guessInput.value);
        }
        kalan--;
        guessInput.value = "";
        numbers.textContent = tahminler;
        kalanHak.textContent = kalan;
        guessInput.focus();
    };
    guessInput.focus();
});

playAgain.addEventListener("click", () => {
    tahminler = [];
    numbers.textContent = tahminler;
    kalan = 10;
    kalanHak.textContent = kalan;
    attention.textContent = "Tahminini Yaz";
    playAgain.style.display = "none";
    random = randomNumber(1, 100);
})

guessInput.addEventListener("keypress", function () {
    if (event.key == "Enter") {
        if (kalan == 0) {
            playAgain.click();
        } else {
            button.click();
        }
    }
});