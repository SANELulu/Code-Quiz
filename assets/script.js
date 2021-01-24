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
var highscore = document.getElementById("highscore");
var questionCounter = 0;
var score = document.querySelector("#score");
var points = 0 
var highscoreDisplay = document.getElementById("highscoreDisplay")
var initialsInput = document.getElementById("initials");
var initialsResult = document.getElementById("intials-result")


// TIMER VARIABLES
var startingTime= 1
var time = startingTime * 60
var countdownEl = document.getElementById("countdown");
// TIMER FUNCTION
function timerCountdown(){
}
initialsInput.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
        // initialsResult.textContent = initialsInput.value this works
      saveHighscore();
    }})



startButton.addEventListener("click", function(){
    questionContainer.classList.remove("hide"); 
    startButton.classList.add("hide");          
    displayQuestion.innerHTML = (questionList[questionCounter].question)
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = (questionList[questionCounter].answers[i].text)
    options[i].setAttribute("data-correct", questionList[questionCounter].answers[i].correct )
    }
})
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", checkAnswer);
}
function checkAnswer(event){
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
        quizOver();
    }
}
       
   function wrongAnswer(){
       alert("wrong");
   }
   function quizOver(){
    alert("quiz over!")
    questionContainer.classList.add("hide");
    highscoreDisplay.classList.remove("hide");
    
   }




//    function saveHighScore(){
//     var storedHighscores = JSON.parse(localStorage.getItem('highscoreList'))
//     var newScore = {
//             initials: initialsInput.value,
//             score: points,
//         };
//         // console.log(newScore);
//         highscore.push(newScore);
//         localStorage.setItem("highscoreList", JSON.stringify(highscore));
//         console.log(storedHighscores);
//         // initialsInput.text = initialsResult.value
//     }
   
function saveHighscore(){
    var highscore =[]
    var storedHighscores = JSON.parse(localStorage.getItem('highscoreList'))
     var newScore = {
        initials: initialsInput.value,
        score: points,
    };
    highscore.push(newScore);
    localStorage.setItem("highscoreList", JSON.stringify(highscore));
    initialsResult.textContent = storedHighscores;
    console.log(storedHighscores);


    
}



//Questions
var questionList = [
{
    question: 'What year was the Nintendo Gameboy released?',
    answers: [
        { text: "1989", correct: true },
        { text: "1985", correct: false },
        { text: "1991", correct: false },
        { text: "1990", correct: false }
    ]
  },
  {
    question: 'What is the best selling console of all time, selling over 155 million units?',
    answers: [
        { text: "Nintendo Switch", correct: false },
        { text: "Xbox One", correct: false },
        { text: "PS2", correct: true },
        { text: "Nintendo DS", correct: false }
    ]
  },
  {
    question: 'What console release a controlled exclusively for the Japanese market?',
    answers: [
        { text: "Original Xbox", correct: true },
        { text: "PS1", correct: false },
        { text: "Nintendo Wii", correct: false },
        { text: "Xbox 360", correct: false }
    ]
  },
  {
    question: 'What console ceased development only a year after release?',
    answers: [
        { text: "Atary Lynx", correct : false },
        { text: "Nintendo Virtual Boy", correct : true },
        { text: "Phillips CD-i", correct : false },
        { text: "Sega Pico", correct : false }
    ]
  },
]



