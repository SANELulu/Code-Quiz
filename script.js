//GLOBAL VARIABLES
var startButton = document.getElementById("start-btn");
var displayQuestion = document.getElementById("question");
var buttonA = document.getElementById("btnA");
var buttonB = document.getElementById("btnB");
var buttonC = document.getElementById("btnC");
var buttonD = document.getElementById("btnD");
var buttons = document.querySelector("#buttons");
var options = Array.from(document.getElementsByClassName("buttons"))
var questionContainer = document.getElementById("question-container");
var nextButton = document.getElementById('next-btn');
var questionCounter = 0;
// SCORE VARIABLE 
var score = document.querySelector("#score");
var points = 0 
score.textContent = points


// TIMER VARIABLES
var startingTime= 1
var time = startingTime * 60
var countdownEl = document.getElementById("countdown");
// TIMER FUNCTION
function timerCountdown(){

}
// LOCAL STORAGE
// localStorage.setItem('score', 'Name');
// var points = localStorage.getItem('score');

//EVENT LISTENERS 
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", checkAnswer);
    
}

// button.addEventListener("click", function(){ // alert only shows up on first button
//     alert();
// })

//FUNCTIONS
function startQuiz(){
    questionContainer.classList.remove("hide");
    startButton.classList.add("hide");
    nextButton.classList.remove("hide");
    
    displayQuestion.innerHTML = (questionList[questionCounter].question)
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = (questionList[questionCounter].answers[i].text)
    options[i].setAttribute("data-correct", questionList[questionCounter].answers[i].correct )
    }
}

function nextQuestion(){
    displayQuestion.innerHTML = questionList[questionCounter].question
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = (questionList[questionCounter].answers[i].text)
    options[i].setAttribute("data-correct", questionList[questionCounter].answers[i].correct )
    }
}


function checkAnswer(event){
    console.log(questionCounter);
    questionCounter++;
    var isCorrect = (event.target.getAttribute("data-correct"))
   if( isCorrect === "true"){ 
    points++
    score.textContent = points;
   }
   else{
       wrongAnswer();
   }
   if(questionCounter > 3){
       alert("quiz over!")
    quizOver();
    }
   nextQuestion();
}
       
   function wrongAnswer(){
       
   }

   function quizOver(){

    location.href = "./leaderboard.html";
   }


//Questions
var questionList = [
{
    question: 'Question 1',
    answers: [
        { text: "answer 1", correct: false },
        { text: "answer 2", correct: false },
        { text: "answer 3", correct: false },
        { text: "answer 4", correct: true }
    ]
  },
  {
    question: 'Question 2',
    answers: [
        { text: "answer 11", correct: false },
        { text: "answer 22", correct: false },
        { text: "answer 33", correct: false },
        { text: "answer 44", correct: true }
    ]
  },
  {
    question: 'Question 3',
    answers: [
        { text: "answer 111", correct: false },
        { text: "answer 222", correct: false },
        { text: "answer 333", correct: false },
        { text: "answer 444", correct: true }
    ]
  },
  {
    question: 'Question 4',
    answers: [
        { text: "answer 1111", correct : false },
        { text: "answer 2222", correct : false },
        { text: "answer 3333", correct : false },
        { text: "answer 4444", correct : true }
    ]
  },
]




