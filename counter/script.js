const counters = document.querySelectorAll(".counters");

counters.forEach(count => {
    count.innerText = "0";

    const updateCounter = () => {
        const target = Number(count.getAttribute("data-target"));
        console.log(target);
        const speed = Math.ceil(target / 100);

        const c = +count.innerText;

        if (c < target) {
            count.innerText = `${Number(c + speed)}`;
            setTimeout(updateCounter, 1);
        } else {
            count.innerText = target;
        }

    }
    updateCounter();
});