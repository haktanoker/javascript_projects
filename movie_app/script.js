const API_URL =
    'https:api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const container = document.querySelector(".movies");

getAPI()
async function getAPI() {
    const res = await fetch(API_URL);
    const data = await res.json();
    showMovie(data.results);
}
function showMovie(movies) {
    movies.forEach(movie => {
        let cont = document.createElement("div");
        cont.classList.add("movie");
        cont.innerHTML = `
            <div class="preview">
                <img src="${IMG_PATH + movie.backdrop_path}">
                <div class="movie_header">
                    <h3 class="title">${movie.title}</h3>
                    <div class="rate" style="color: ${movieColor(movie.vote_average)}">${movie.vote_average}</div>
                </div>
            </div>
            <div class="details">
                <h3 class="title">${movie.title}</h3>
                <p>${movie.overview}</p>
            </div>
        `;
        container.appendChild(cont);
    });
}
function movieColor(rate) {
    if (rate >= 8) {
        return "green";
    } else if (rate >= 5) {
        return "orange";
    } else if (rate >= 0) {
        return "red";
    }
};