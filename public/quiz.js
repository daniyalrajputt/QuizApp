var questions = [{
        question: "1. What is the extension of JavaScript File ? ",
        option1: ".exe",
        option2: ".js",
        option3: ".css",
        option4: ".html",
        answer: "2"
    },
    {
        question: "2. Is JavaScript a case-sensitive language?",
        option1: "Yes ",
        option2: "No",
        option3: "May be",
        option4: "Don't Know",
        answer: "1"
    },
    {
        question: "3. Inside which HTML element do we put the JavaScript?",
        option1: "<scripting>",
        option2: "<js>",
        option3: "<link>",
        option4: "<script>",
        answer: "4"
    },
    {
        question: "4 .Javascript is _________ language.",
        option1: "Programming",
        option2: "Scripting",
        option3: "Application ",
        option4: "None of these",
        answer: "2"
    },
    {
        question: "5. Local Browser used for validations on the Web Pages uses __________.",
        option1: "Java",
        option2: "Css",
        option3: "HTML",
        option4: "JavaSCript",
        answer: "4"
    },
    {
        question: "6. JavaScript Code can be called by using _________.",
        option1: "Function / Method",
        option2: "Triggering Event",
        option3: "RMI",
        option4: "Preprocessor",
        answer: "1"
    },
    {
        question: "7. All modern browsers supports JS.",
        option1: "Yes",
        option2: "No",
        option3: "No one",
        option4: "May be ",
        answer: "1"
    },
    {
        question: "8. Where is the correct place to insert a JavaScript?",
        option1: "Both the <head> section and the <body> section are correct",
        option2: "The <body> section",
        option3: "The <head> section",
        option4: "None of these",
        answer: "1"
    },
    {
        question: "9. What is the correct syntax for referring to an external script called (xxx.js) ?",
        option1: "<script name >",
        option2: "<script href >",
        option3: "<script src >",
        option4: "<script cmd >",
        answer: "3"
    },
    {
        question: "10. How do you create a function in JavaScript?",
        option1: "function myFunction()",
        option2: "function:myFunction()",
        option3: "function = myFunction()",
        option4: "None of these",
        answer: "1"
    }
]


// all of the Above is questions in array

var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementById('container');
var questionElement = document.getElementById("question");
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion(questionIndex){
    var q = questions[questionIndex];
    questionElement.textContent = (questionIndex + 1) + '. ' + q.question;
    op1.textContent = q.option1;
    op2.textContent = q.option2;
    op3.textContent = q.option3;
    op4.textContent = q.option4;
}

// *****************************************************
function loadNextQuestion(){
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert("Please Select Your Answer!");
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score = score + 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totalQuestions -1)
    {
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totalQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score : ' + score;
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);