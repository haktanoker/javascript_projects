const icon = document.querySelector("#icon");
const body = document.querySelector("body");

icon.addEventListener("click", () => {
    body.classList.toggle("dark_mode")
    if (body.classList.contains("dark_mode")) {
        icon.classList = "fa-solid fa-sun";
    } else {
        icon.classList = "fa-solid fa-moon";
    }
    localStorage.setItem("theme", body.classList);
    localStorage.setItem("icon", icon.classList);
})

if (localStorage.getItem("theme")) {
    body.classList = localStorage.getItem("theme");
    icon.classList = localStorage.getItem("icon");
}