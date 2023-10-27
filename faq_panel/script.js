const faqs = document.querySelectorAll(".faq button");

faqs.forEach(faq => {
    faq.addEventListener('click', (e) => {
        let cont = e.target.closest(".faq");
        if (cont.classList.contains("active")) {
            console.log("if içi");
            cont.classList.remove("active")
            console.log(faq);
        } else {
            closeAll();
            console.log("if dışı");
            cont.classList.add('active');
        }
    })
});

function closeAll() {
    faqs.forEach(faq => {
        let cont = faq.closest(".faq");
        cont.classList.remove('active');
    })
};