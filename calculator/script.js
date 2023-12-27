var firstInput, secondInput, addButton, cardsContainer, cardList, cardNumber;
firstInput = document.querySelector("#first_word");
secondInput = document.querySelector("#second_word");
addButton = document.querySelector("#addCard");
cardsContainer = document.querySelector("#cards");
cardList = [];
cardNumber = 1;

addButton.addEventListener("click", function addCard(){
    if(firstInput.value == "" || secondInput.value == ""){
        alert("Lütfen iki kart bilgisini de eksiksiz giriniz");
    } else{
        cardList.push({
            "firstWord" : firstInput.value,
            "secondWord" : secondInput.value,
            "cardId" : cardNumber,
            "isVisible" : false
        });
        firstInput.value = "";
        secondInput.value = "";
        showcards();
        cardNumber++;
        firstInput.focus();
    };
});

secondInput.addEventListener("keypress", function () {
    if(event.key == "Enter"){
        addButton.click();
    }
})

function showcards(){
    cardsContainer.innerHTML = "";
    if (cardList == ""){
        cardsContainer.innerHTML = '<h2 style="color:white;">Henüz bir kart eklemediniz</h2>';
    } else{
        for (let card of cardList){
            console.log(cardList)
            let cardInfo = `
            <div class="card" onclick="showSecond(this, ${card.cardId})">
                <p class="card_first_word">${card.firstWord}</p>
                <p class="card_second_word ${card.isVisible ? "visible" : ""}">${card.secondWord}</p>
                <i onclick="deleteCard(${card.cardId})" class="fa-solid fa-trash-can delete_task"></i>
            </div>
            `;
            cardsContainer.insertAdjacentHTML("beforeend", cardInfo);
        };
    };
};

showcards();

function showSecond(kart, eklenenKart){
    for(let i in cardList){
        if(cardList[i].cardId == eklenenKart){
            if(cardList[i].isVisible){
                kart.querySelector(".card_second_word").classList.remove("visible");
                cardList[i].isVisible = false;
            } else{
                kart.querySelector(".card_second_word").classList.add("visible");
                cardList[i].isVisible = true;
            }
        }
    }
}

function deleteCard(id){
    let deleteId;
    for (let i in cardList){
        if (cardList[i].cardId == id){
            deleteId = i;
        };
    }
    cardList.splice(deleteId, 1);
    showcards();
}
