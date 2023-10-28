const btn = document.querySelector(".lines");

btn.addEventListener("click", () => {
    btn.closest(".container").classList.toggle("active");
})