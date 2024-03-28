const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 0,
    },
    {
        question: "What is the largest country in the world?",
        options: ["Canada", "China", "Russia", "USA"],
        answer: 2,
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Yen", "Dollar", "Euro"],
        answer: 1,
    },
    {
        question: "What is the highest mountain in the world?",
        options: ["K2", "Mount Everest", "Makalu", "Dhaulagiri"],
        answer: 1,
    },
    {
        question: "What is the largest ocean in the world?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean"
        ],
        answer: 3,
    }
];

const questionElement = document.querySelector("#question");
const optionElement = document.querySelectorAll(".options button");
const scoreElement = document.querySelector("#score");

let questionIndex = 0;
let score = 0;

function setQuestion() {
    const currentQuestion = quizData[questionIndex];
    questionElement.innerHTML = currentQuestion.question;
    optionElement.forEach((option, index) => {
        option.innerHTML = currentQuestion.options[index];
    });
}

setQuestion();

function checkAnswer(optionIndex){
    const currentQuestion = quizData[questionIndex];
    if (optionIndex === currentQuestion.answer){
        score++;
    }
    questionIndex++;
    if (questionIndex < quizData.length){
        setQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.style.display = "none";
    optionElement.forEach((option, index) => {
        option.style.display = "none";
    });
    scoreElement.innerHTML = `You scored ${score} out of ${quizData.length}`;
    scoreElement.style.display = "block";
}

optionElement.forEach((option, index) => {
    option.addEventListener("click", () => {
        checkAnswer(index);
    });
});
