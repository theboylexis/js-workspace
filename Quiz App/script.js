//setting questions
const questions = [
    {
        question: "What is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: "false"},
            {text: "Blue Whale", correct: "true"},
            {text: "Cheetah", correct: "false"},
            {text: "Giraffe", correct: "false"},
        ]
    },
    {
      question: "What is smallest continent in the world?",
        answers: [
            {text: "Africa", correct: "false"},
            {text: "Europe", correct: "false"},
            {text: "Australia", correct: "true"},
            {text: "Asia", correct: "false"},
        ]  
    },
    {
        question: "Who is the richest man in the world?",
        answers: [
            {text: "Elon Musk", correct: "true"},
            {text: "Jeff Bezos", correct: "false"},
            {text: "Warren Buffet", correct: "false"},
            {text: "Bill Gates", correct: "false"},
        ]
    },
    {
        question: "Who formulated the Theory of Relativity?",
        answers: [
            {text: "Nikola Tesla", correct: "false"},
            {text: "Isaac Newton", correct: "false"},
            {text: "Leonardo DaVinci", correct: "false"},
            {text: "Albert Einsten", correct: "true"},
        ]
    },
    {
        question: "What is the main memory in a computer?",
        answers: [
            {text: "ROM", correct: "false"},
            {text: "RAM", correct: "true"},
            {text: "Registers", correct: "false"},
            {text: "Cache", correct: "false"},
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

//variables to store question index and score
let CurrentQuestionIndex = 0;
let score = 0;

//function to start quiz
function startQuiz() {
    CurrentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
//creating showQuestion function
function showQuestion() {
    resetState();
    let CurrentQuestion = questions[CurrentQuestionIndex];
    let questionNumber = CurrentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + CurrentQuestion.question;

    CurrentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}
//defining resetState function
function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
//defining selectAnswer function
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
         selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
//defining showScore function
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; 
    nextButton.innerHTML = "Try Quiz Again";
    nextButton.style.display = "block";
}

//defining handleNextButton function
function handleNextButton() {
    CurrentQuestionIndex++;
    if(CurrentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(CurrentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

