const labels = document.querySelectorAll("label");

labels.forEach((label) => {
    console.log(label.innerText);
    console.log(label.innerHTML);
    label.innerHTML = label.innerText
        .split('').map(function (value, index) {
            return `<span style="transition-delay: ${index * 50}ms">${value}</span>`;
        }).join("");
});