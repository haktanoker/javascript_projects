const search = document.querySelector("#search_input");
const container = document.querySelector(".pokemon_container");
const img = document.querySelector("img");

const id = document.querySelector(".pokemon_id");
const type = document.querySelector(".pokemon_type");
const weight = document.querySelector(".pokemon_weight");
const count = 151;
var nowCount = 0;

const initPokemon = async () => {
    for (let i = 1; i <= count; i++) {
        await getPokemon(i);
        // Sayacı yükseltip ne kadar veri çekildiğini göstermek
        nowCount++;
        document.querySelector("h2").textContent = `Pokemon Library ${nowCount}/${count}`;
    }
};

const getPokemon = async (id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    createPokeBox(data);
}

initPokemon();


// Pokemon kutucuklarını oluşturmak
const createPokeBox = (pokemon) => {
    // Bunun sayesinde eğer 3 hanenin altında bir id varsa, onu 3 haneye tamamlayıp, başına 0 atabiliyoruz
    let photoId = pokemon.id.toString().padStart(3, "0");
    // Bunun sayesinde ilk harflerini büyük yapabiliyoruz
    let name = pokemon.name[0].toString().toUpperCase() + pokemon.name.toString().slice(1);
    var el = document.createElement("div");
    el.classList.add("card");
    el.innerHTML = `
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${photoId}.png" alt="" srcset="">
            <h4 class="pokemon_name">${name}</h4>
            <p class="pokemon_id">#${photoId}</p>
            <p class="pokemon_type">Type: ${pokemon.types[0].type.name}</p>
            <p class="pokemon_weight">${pokemon.weight} Kg</p>
            `;
    container.appendChild(el);
};

// Arama yapma fonksiyonu

search.addEventListener("input", (e) => {
    let name = document.querySelectorAll(".pokemon_name");
    name.forEach(pokeName => {
        pokeName.parentElement.style.display = "none";
        if (pokeName.innerHTML.toLowerCase().includes(e.target.value.toLowerCase())) {
            pokeName.parentElement.style.display = "flex";
        }
        // else if (!/[a-zA-Z]/.test(e.target.value.toLowerCase())) {
        //     pokeName.parentElement.style.display = "flex";
        // }
    });
}) 