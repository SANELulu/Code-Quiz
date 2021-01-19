//GLOBAL VARIABLES
var startButton = document.getElementById("start-btn");
var displayQuestion = document.getElementById("question");
var buttonA = document.getElementById("btnA");
var buttonB = document.getElementById("btnB");
var buttonC = document.getElementById("btnC");
var buttonD = document.getElementById("btnD");
var buttons = document.querySelector("#buttons");
var options = Array.from(document.getElementsByClassName("buttons"))
// var buttons = document.querySelector(".btn") // alert only shows up on first button 
var questionContainer = document.getElementById("question-container");
var nextButton = document.getElementById('next-btn')
var questionCounter = 0
//SCORE VARIABLE 
var score = document.querySelector("#score");
var points = 0 
// ANSWER VARIABLES 

// var right = true //trying this out to see if this works 
// var wrong = false //nope nvm didnt work 

//EVENT LISTENERS 
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
document.addEventListener("click", chosenAnswer);

// button.addEventListener("click", function(){ // alert only shows up on first button
//     alert();
// })

//FUNCTIONS
function startQuiz(){
    questionContainer.classList.remove("hide");
    startButton.classList.add("hide");
    nextButton.classList.remove("hide");
    
    displayQuestion.innerHTML = (questionList[questionCounter].question)
    options[0].textContent = (questionList[questionCounter].answers[0].text)
    // options[0].setProperty(questionList[questionCounter].answers,correct);
    // options[0].setAttribute(questionList[questionCounter].answers.correct) this doesnt work either!!!
    options[1].textContent = (questionList[questionCounter].answers[1].text)

    options[2].textContent = (questionList[questionCounter].answers[2].text)

    options[3].textContent = (questionList[questionCounter].answers[3].text)

    // buttonA.textContent = (questionList[questionCounter].answers[0].text)
    // buttonB.textContent = (questionList[questionCounter].answers[1].text) replaced with chosenbutton[]
    // buttonC.textContent = (questionList[questionCounter].answers[2].text)
    // buttonD.textContent = (questionList[questionCounter].answers[3].text)

    // buttonD.classList.add("correct");

    questionCounter++;
    // btn[0].textContent = questions[i].answers[0];
    // btn[1].textContent = questions[i].answers[1]; doesnt work
    // btn[2].textContent = questions[i].answers[2];
    // btn[3].textContent = questions[i].answers[3];
}
function nextQuestion(){
    displayQuestion.innerHTML = questionList[questionCounter].question
    // buttonA.append(questionList[x].answers[0].text)
    // buttonB.append(questionList[x].answers[1].text) append keeps adding it on top after each question.
    // buttonC.append(questionList[x].answers[2].text) Not practical. 
    // buttonD.append(questionList[x].answers[3].text)
    buttonA.textContent = (questionList[questionCounter].answers[0].text)
    buttonB.textContent = (questionList[questionCounter].answers[1].text)
    buttonC.textContent = (questionList[questionCounter].answers[2].text)
    buttonD.textContent = (questionList[questionCounter].answers[3].text)
    buttonD.classList.remove("correct");
    questionCounter++;
}


function chosenAnswer(event){
    if(event.target.classList.contains("buttons")){
       console.log(event.target);
       }
    }
function checkAnswer(event){
    
   if(event.target.hasOwnProperty(correct)){
       alert()
   }
}
       
    


// function chosenAnswer(event){ // this is what i need help with.  
//     //it works with the score but there will be an issue once you need to go to the next question. 
//     //The right answer will always be D. 
//     //how can i use the correct:true and correct:false in the argument? 
//     selectedButton = event.target;
//     console.log(selectedButton);
//     // if(selectedButton.classList.contains("correct")){
//     //     points++
//     //     score.innerHTML = points;
//     //     console.log(points);
//     // }
//     }
    

//Questions
var questionList = [
{
    question: 'Question 1',
    answers: [
        { text: "answer 1", correct: false },
        { text: "answer 2", correct: false },
        { text: "answer 3", correct: false },
        { text: "correct answer", correct: true }
    ]
  },
  {
    question: 'Question 2',
    answers: [
        { text: "answer 11", correct: false },
        { text: "answer 22", correct: false },
        { text: "answer 33", correct: false },
        { text: "correct answer", correct: true }
    ]
  },
  {
    question: 'Question 3',
    answers: [
        { text: "answer 111", correct: false },
        { text: "answer 222", correct: false },
        { text: "answer 333", correct: false },
        { text: "correct answer", correct: true }
    ]
  },
  {
    question: 'Question 4',
    answers: [
        { text: "answer 1111", correct : false },
        { text: "answer 2222", correct : false },
        { text: "answer 3333", correct : false },
        { text: "correct answer", correct : true }
    ]
  },
]










// question counter starts at  0 
// html questionText class 
// set questionText set to question counter 
// var questions = [{}] text and answers
// set the questiontext = questions[questionCounter].text

// .onClick for answers
// you check for correctness 
// questionCounter++

