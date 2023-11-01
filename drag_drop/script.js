const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
function dragStart() {
    this.className += " hold";
    setTimeout(() => (this.className = 'invisible'), 0)
}
function dragEnd() {
    this.className = "fill"
}

empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragleave)
    empty.addEventListener('drop', dragDrop)
});

function dragOver(e) {
    console.log("OVER");
    e.preventDefault()
}
function dragEnter(e) {
    e.preventDefault()
    this.className += " hover";
}
function dragleave() {
    this.className = "empty";
    this
}
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}