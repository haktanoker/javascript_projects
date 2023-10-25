const open = document.querySelector("#open");
const close = document.querySelector("#close");
const menuContainer = document.querySelector(".menu_container");
const contentContainer = document.querySelector(".content_container");
const menuTitles = document.querySelector(".menu_titles");

open.addEventListener("click", () => {
    menuContainer.classList.add("show_menu");
    contentContainer.classList.add("show_content");
    menuTitles.classList.add("effect");
})
close.addEventListener("click", () => {
    menuContainer.classList.remove("show_menu");
    contentContainer.classList.remove("show_content");
    menuTitles.classList.remove("effect");
})