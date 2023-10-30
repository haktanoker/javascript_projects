const addBtn = document.querySelector("#add_note");
const noteCont = document.querySelector(".notes");
addBtn.addEventListener("click", addNote);

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach((noteText) => {
        addNote(noteText);
    });
}

// addNote işlevi
function addNote(text = "") {
    if (typeof text !== "string") {
        text = "";
    }
    const noteEl = document.createElement("div");
    noteEl.classList.add("note_div");
    noteEl.innerHTML = `
        <div class="note_div">
            <div class="header">
                <p class="editing ${text ? "hidden" : ""}">Editing...</p>
                <div class="edit_delete">
                    <button type="button" class="edit_note"><i class="fa-solid fa-pen update_task"></i></button>
                    <button type="button" class="delete_note"><i class="fa-solid fa-trash-can delete_tasks"></i></button>
                </div>
            </div>
            <div class="note ${text ? "" : "hidden"}">${text}</div>
            <textarea class="write ${text ? "hidden" : ""}">${text}</textarea>
        </div>`
    const note = noteEl.querySelector(".note");
    const input = noteEl.querySelector(".write");
    const edit = noteEl.querySelector(".edit_note");
    const del = noteEl.querySelector(".delete_note");
    const header = noteEl.querySelector(".editing");

    edit.addEventListener("click", () => {
        note.classList.toggle("hidden");
        input.classList.toggle("hidden");
        header.classList.toggle("hidden");
    })

    del.addEventListener("click", () => {
        noteEl.remove();
        updateStorage();
    })

    input.addEventListener("input", (e) => {
        note.innerHTML = e.target.value;
        updateStorage();
    });

    noteCont.appendChild(noteEl);
}

function updateStorage() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    notesText.forEach((note) => notes.push(note.value));
    localStorage.setItem("notes", JSON.stringify(notes));
}