const API_URL = 'https://api.github.com/users/';

const input = document.querySelector("#search");
const search = document.querySelector("button");
const card = document.querySelector(".card");

async function getData(username) {
    try {
        const { data } = await axios(API_URL + username);
        getUser(data);
    } catch (error) {
        errorMsg("User not found")
    }
}

search.addEventListener("click", (e) => {
    e.preventDefault();
    let user = input.value;
    if (user) {
        getData(user);
        input.value = "";
    }
})

function getUser(username) {
    const p = username.bio ? `<p>${username.bio}</p>` : "";
    getRepos(username.login);
    card.innerHTML = `
        <img
            class="user-image"
            src="${username.avatar_url}"
            alt="User Image"
        />

        <div class="user-name">
            <h2>${username.name || username.login}</h2>
            <small>@${username.login}</small><br>
            <small>${username.location}</small>
        </div>

        ${p}

        <ul>
            <li>
                <i class="fa-solid fa-user-group"></i> ${username.followers}
                <strong>Followers</strong>
            </li>
            <li>
                <i class="fa-solid fa-user-plus"></i> ${username.following}
                <strong>Following</strong>
            </li>
            <li>
                <i class="fa-solid fa-bookmark"></i> ${username.public_repos}
                <strong>Repository</strong>
            </li>
        </ul>
    `
}

async function getRepos(username) {
    let reposEl = document.createElement("div");
    reposEl.classList.add("repos");
    reposEl.id = "repos";
    try {
        const { data } = await axios(API_URL + username + "/repos");
        data.slice(0, 3).forEach((repo) => {
            let a = document.createElement("a");
            a.href = repo.html_url;
            a.target = "_blank;"
            a.innerHTML = `<i class="fa-solid fa-book-bookmark"></i>${repo.name}`;
            reposEl.appendChild(a);
        })
        card.appendChild(reposEl);
    } catch (error) {
        errorMsg("An error was encountered");
    }
}

function errorMsg(text) {
    card.innerHTML = `<p class="error_p">${text}</p>`;
}