const objcts = document.querySelectorAll(".animation");

window.addEventListener('scroll', showElements);

showElements();

function showElements() {
    let triggerHeight = window.innerHeight / 1.2;
    objcts.forEach(obj => {
        let loc = obj.getBoundingClientRect().top;
        if (loc < triggerHeight) {
            obj.classList.add("show");
        } else {
            obj.classList.remove("show");
        }
    });
}