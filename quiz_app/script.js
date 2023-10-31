const questions = [
    {
        question: "What is the brain of a computer system called?",
        a: "RAM",
        b: "CPU",
        c: "GPU",
        d: "None of the above",
        correst_ans: "c"
    },
    {
        question: "Who is known as the father of computer?",
        a: "Dennis Ritchie",
        b: "Charles Babbage",
        c: "Bill Gates",
        d: "James Gosling",
        correst_ans: "b"
    },
    {
        question: "What is known as temporary memory or volatile memory?",
        a: "RAM",
        b: "SSD",
        c: "HDD",
        d: "ROM",
        correst_ans: "a"
    },
    {
        question: "Which of the following is the smallest unit of memory?",
        a: "Byte",
        b: "Kb",
        c: "Nibble",
        d: "Bit",
        correst_ans: "d"
    },
];

const question = document.querySelector("#question");
const ans_a = document.querySelector("#answer_a");
const ans_b = document.querySelector("#answer_b");
const ans_c = document.querySelector("#answer_c");
const ans_d = document.querySelector("#answer_d");
const btn = document.querySelector(".btn");
const answers = document.querySelectorAll(".answer");
const ansInput = document.querySelectorAll(".ans_inp");
var score = 0;
var currentQuestion = 0;

updateQuiz()


function updateQuiz() {

    ansInput.forEach(ansEl => {
        ansEl.checked = false;
    });

    question.innerText = `${currentQuestion + 1}/${questions.length} - ${questions[currentQuestion].question}`

    ans_a.innerText = questions[currentQuestion].a;
    ans_b.innerText = questions[currentQuestion].b;
    ans_c.innerText = questions[currentQuestion].c;
    ans_d.innerText = questions[currentQuestion].d;

};

btn.addEventListener("click", () => {

    ansInput.forEach(ansEl => {
        if (ansEl.checked) {
            console.log("seçili");
        }
    });
    if (getSelected() == questions[currentQuestion].correst_ans) {
        score++;
        console.log("helal");
    }
    if (currentQuestion + 1 == questions.length) {
        lastPage();
    }
    else {
        currentQuestion++;
    }

    updateQuiz();
});

function getSelected() {
    let ans;
    ansInput.forEach(answerEl => {
        if (answerEl.checked) {
            ans = answerEl.id;
        }
    });
    return ans;
}
function lastPage() {
    const cont = document.querySelector(".container");
    cont.innerHTML = `
        <h1>Quiz App</h1>
        <div class="card">
            <p>Your score is ${score * (Math.floor(100 / questions.length))}</p>
        </div>
        <button type="submit" onclick="location.reload()" class="btn">Restart</button>
            `
}