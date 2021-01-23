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
var initialsInput = document.getElementById("initials-input");
var initialsResult = document.getElementById("intials-result")
var highscore = []

// TIMER VARIABLES
var startingTime= 1
var time = startingTime * 60
var countdownEl = document.getElementById("countdown");
// TIMER FUNCTION
function timerCountdown(){
}
initialsInput.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        // initialsInput=initialsResult.innerHTML
        alert()}
    })

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
       //time taken away 
   }
   function quizOver(){
    alert("quiz over!")
    questionContainer.classList.add("hide");
    highscoreDisplay.classList.remove("hide");
    
   }


   function saveHighScore(){
    var storedHighscores = JSON.parse(localStorage.getItem('highscoreList'))
    var newScore = {
            initials: initialsInput.text,
            score: points,
        };
        console.log(newScore);
        highscore.push(newScore);
        localStorage.setItem("highscoreList", JSON.stringify(highscore));
        console.log(storedHighscores);
        initialsInput.text = initialsResult.value
    }
   
// help
   
    // function saveHighScore(){
    //     var initials = initialInput.value.trim();
    //     if (initials !== "") {
    //       var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    //       var newScore = {
    //         score: correctAns,
    //         initials: initials
    //       };
    //       console.log(newScore)
    //       highScores.push(newScore);
    //       window.localStorage.setItem("highScores", JSON.stringify(highScores));
    //     //  window.location.href = "highscores.html";
    //     document.getElementById("highScoreSection").innerHTML=localStorage.getItem("highScores");
    //     }


    //     //help 2
    // function getHighscores() {
    //     // p.remove()
    //     // label.remove()
    //     // userInput.remove()
    //     // submitBtn.remove()
    
    //     h1.innerHTML = 'Highscores';
    //     var list = document.createElement('ul');
    //     let scores;
    //     var storedList = JSON.parse(localStorage.getItem('allScores'))
    //     if (storedList !== null) {
    //         scores = storedList;
    //     } else {
    //         scores = {}    
    //     }
    //     scores[userName] = score;
    //     savedScores(scores);
    //     for (let player in scores) {
    //         var listItems = document.createElement('li');
    //         listItems.innerHTML = player +':'+ scores[player];
    //         list.appendChild(listItems);
    //     }
    //     div.appendChild(list);
    //     console.log(storedList);
    //     console.log(scores)
        
    // }
    
    // function savedScores (obj) {
    //     localStorage.setItem('allScores', JSON.stringify(obj));
    // }





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



