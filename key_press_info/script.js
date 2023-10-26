const keyCont = document.querySelector(".key_container");

window.addEventListener('keydown', (event) => {
    keyCont.innerHTML = `
    <div class="keys">
        <p>event.key</p>
        <div class="event_key">${event.key === " " ? "space" : event.key}</div>
    </div>
    <div class="keys">
        <p>event.keyCode</p>
        <div class="event_key">${event.keyCode}</div>
    </div>
    <div class="keys">
        <p>event.code</p>
        <div class="event_key">${event.code}</div>
    </div>`
});