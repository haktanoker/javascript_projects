const btn = document.querySelector("#btn");
const average = document.querySelector(".average_amount");
const boughtInfo = document.querySelector(".total_bought_amount");
const spentInfo = document.querySelector(".total_spent_amount");

btn.addEventListener("click", () => {
    let el = `
        <div class="add_data">
            <input type="number" placeholder="Number of coins" min="0" step="0.1" class="numb_input">
            <input type="number" placeholder="Price" min="0" step="0.1" class="price_input">
            <div class="del" onclick="delBoxes(this)">✖</div>
        </div>
    `;
    btn.insertAdjacentHTML("beforebegin", el);
    attachInputEventListeners();
});

const delBoxes = (e) => {
    e.parentNode.remove();
    calculate();
};

const formatNumber = (num) => {
    return num % 1 !== 0 ? num.toFixed(5) : num.toFixed(2);
};

const calculate = () => {
    let totalSpent = 0;
    let totalBought = 0;
    let numbInputs = document.querySelectorAll(".numb_input");
    let priceInputs = document.querySelectorAll(".price_input");

    for (let i = 0; i < priceInputs.length; i++) {
        // Her iki inputun da dolu olup olmadığını kontrol et
        if (numbInputs[i].value !== "" && priceInputs[i].value !== "") {
            totalBought += parseFloat(numbInputs[i].value);
            totalSpent += parseFloat(numbInputs[i].value) * parseFloat(priceInputs[i].value);
        }
    }

    let averagePrice = totalBought ? (totalSpent / totalBought) : 0;
    let formattedAveragePrice = formatNumber(averagePrice);
    let formattedTotalBought = formatNumber(totalBought);
    let formattedTotalSpent = formatNumber(totalSpent);

    average.innerHTML = !isNaN(formattedAveragePrice) ? `$${formattedAveragePrice}` : `0`;
    boughtInfo.innerHTML = !isNaN(formattedTotalBought) ? `${formattedTotalBought}` : `0`;
    spentInfo.innerHTML = !isNaN(formattedTotalSpent) ? `$${formattedTotalSpent}` : `$${0}`;
};



calculate();

const attachInputEventListeners = () => {
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach(inp => {
        inp.removeEventListener("input", calculate);
        inp.addEventListener("input", calculate);
    });
};
attachInputEventListeners();

const theme = document.querySelector(".change_mode");
theme.addEventListener("click", () => {
    if (theme.classList.contains("dark")) {
        theme.classList = "change_mode";
        document.documentElement.style.setProperty('--color_one', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--color_two', 'rgb(52, 52, 52)');
    } else {
        theme.classList = "change_mode dark";
        document.documentElement.style.setProperty('--color_one', 'rgb(52, 52, 52)');
        document.documentElement.style.setProperty('--color_two', 'rgb(255, 255, 255)');
    }
})

window.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        btn.click();
        const foc = document.querySelectorAll(".add_data");
        foc[foc.length - 1].firstElementChild.focus();
    }
})