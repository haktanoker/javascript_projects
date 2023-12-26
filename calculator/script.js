var result = document.querySelector(".result");

const ac = document.querySelector(".AC");
const de = document.querySelector(".DE");
const point = document.querySelector(".point");
const division = document.querySelector(".division");

const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const multi = document.querySelector(".multi");

const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const sub = document.querySelector(".sub");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const plus = document.querySelector(".plus");

const dbl_zero = document.querySelector(".dbl_zero");
const zero = document.querySelector(".zero");
const equals = document.querySelector(".equals");

const keyToButtonMap = {
    '0' : zero,
    '1' : one,
    '2' : two,
    '3' : three,
    '4' : four,
    '5' : five,
    '6' : six,
    '7' : seven,
    '8' : eight,
    '9' : nine,
    '+' : plus,
    '-' : sub,
    '*' : multi,
    '/' : division,
    ',' : point,
    '.' : point,
    'Enter' : equals,
}

window.addEventListener('keydown', function(e) {
    if(result.innerText === "Hata"){
        result.innerText = "";
    }
    if(e.key === 'Backspace'){
        e.preventDefault();
        removeLastChar();
    } else if (e.key === 'Enter') {
        e.preventDefault();
        evaulateResult();
    } else if (keyToButtonMap.hasOwnProperty(e.key)) {
        e.preventDefault();
        keyToButtonMap[e.key].click();
        console.log(keyToButtonMap[e.key])
    }
})

equals.addEventListener('click', evaulateResult);

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        let lastChar = result.innerText.slice(-1);
        let value = e.target.textContent;

        if(result.innerText === "Hata"){
            result.innerText = "";
        }else if (['+', '-', '*', '/', '.', ' '].includes(value) && ['+', '-', '*', '/', '.', ' '].includes(lastChar)){} 
        else if (value === "=") {
            evaulateResult();
        } else if(value === "AC") {
            result.innerText = ""
        } else if(value === "DE") {
            removeLastChar();
        } else{
            result.innerText += value;
        }
    })
})

function removeLastChar() {
    result.innerText = result.innerText.slice(0, -1);
}

function evaulateResult() {
    let operation = result.innerText.replace(/,/g,'.');

    try {
        const resultValue = new Function('return ' + operation)();
        result.innerText = resultValue.toString().replace(/\./g, ',');
    } catch (e) {
        result.innerText = 'Hata';
        console.error('Hatalı işlem: ', e)
    }
}
