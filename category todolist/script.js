const task = document.querySelector("#task");
const button = document.querySelector("#taskSend");
const error = document.querySelector("#errorMessage");
const taskCategory = document.querySelector("#todoOptions");
const personal = document.querySelector("#personalTasks");
const business = document.querySelector("#businessTasks");
const other = document.querySelector("#otherTasks");

function addTask() {
    if (task.value === "" || task.value === " "){
        error.style.opacity = "1";
        task.value = "";
    } else{
        let taskName = `
            <div class="task">
                <p>${task.value}</p>
                <div class="deleteAndCheck">
                    <i class="far fa-trash-alt"></i>
                    <i class="fas fa-check"></i>
                </div>
            </div>
        `;
        error.style.opacity = "0";
        if (taskCategory.value == "personal"){
            personal.insertAdjacentHTML("beforeend", taskName);
        };
        if (taskCategory.value == "work"){
            business.insertAdjacentHTML("beforeend", taskName);
        };
        if (taskCategory.value == "other"){
            other.insertAdjacentHTML("beforeend", taskName);
        };
        task.value = "";
        task.focus();
    }
};

document.addEventListener("click", function(e){
    if (e.target.classList.contains('fa-trash-alt')){
        e.target.closest(".task").remove();
    } else if (e.target.classList.contains('fa-check')){
        let decoration = e.target.closest(".task").querySelector("p");
        if (decoration.style.textDecoration == "line-through"){
            decoration.style.textDecoration = "none";
            decoration.style.color = "white";
        } else{
            decoration.style.textDecoration = "line-through";
            decoration.style.color = "#aaaaab";
        }
    }
});
