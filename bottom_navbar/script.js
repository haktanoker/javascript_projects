const contents = document.querySelectorAll(".content");
const menus = document.querySelectorAll(".menu");

menus.forEach((menu, index) => {
    menu.classList.remove("active");

    menu.addEventListener("click", () => {
        hideButtons();
        hideContents();
        menu.classList.add("active");
        contents[index].classList.add("visible");
    })
});
menus[0].classList.add("active");

function hideButtons() {
    menus.forEach(menu => menu.classList.remove("active"));
}
function hideContents() {
    contents.forEach(content => content.classList.remove("visible"));
}