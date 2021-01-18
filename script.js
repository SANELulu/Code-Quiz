//GLOBAL VARIABLES
var startButton = document.getElementById("start-btn");
var displayQuestion = document.getElementById("question");
var buttonA = document.getElementById("btnA");
var buttonB = document.getElementById("btnB");
var buttonC = document.getElementById("btnC");
var buttonD = document.getElementById("btnD");
var buttons = document.querySelector("#buttons");
// var buttons = document.querySelector(".btn") // alert only shows up on first button 
var questionContainer = document.getElementById("question-container");
var nextButton = document.getElementById('next-btn')
var questionCounter = 0
//SCORE VARIABLE 
var score = document.querySelector("#score");
var points = 0 
// ANSWER VARIABLES 
var right = true //trying this out to see if this works 
var wrong = false //nope nvm didnt work 
//EVENT LISTENERS 
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
buttons.addEventListener("click", chosenAnswer);

// button.addEventListener("click", function(){ // alert only shows up on first button
//     alert("wow");
// })

//FUNCTIONS
function startQuiz(){
    questionContainer.classList.remove("hide");
    startButton.classList.add("hide");
    nextButton.classList.remove("hide");
    displayQuestion.innerHTML = (questionList[questionCounter].question)
    buttonA.textContent = (questionList[questionCounter].answers[0].text)
    buttonB.textContent = (questionList[questionCounter].answers[1].text)
    buttonC.textContent = (questionList[questionCounter].answers[2].text)
    buttonD.textContent = (questionList[questionCounter].answers[3].text)
    buttonD.classList.add("correct");
    questionCounter++;
    // btn[0].textContent = questions[i].answers[0];
    // btn[1].textContent = questions[i].answers[1];
    // btn[2].textContent = questions[i].answers[2];
    // btn[3].textContent = questions[i].answers[3];
}
function nextQuestion(){
    displayQuestion.innerHTML = questionList[questionCounter].question
    // buttonA.append(questionList[x].answers[0].text)
    // buttonB.append(questionList[x].answers[1].text)
    // buttonC.append(questionList[x].answers[2].text)
    // buttonD.append(questionList[x].answers[3].text)
    buttonA.textContent = (questionList[questionCounter].answers[0].text)
    buttonB.textContent = (questionList[questionCounter].answers[1].text)
    buttonC.textContent = (questionList[questionCounter].answers[2].text)
    buttonD.textContent = (questionList[questionCounter].answers[3].text)
    buttonD.classList.remove("correct");
    questionCounter++;
}
function chosenAnswer(element){ // this is what i need help with.  
    //it works with the score but there will be an issue once you need to go to the next question. 
    //The right answer will always be D. 
    selectedButton = element.target;
    
    if(selectedButton.classList.contains("correct")){
        points++
        score.innerHTML = points;
        console.log(points);
    }
    }
    

//Questions
var questionList = [
{
    question: 'Question 1',
    answers: [
        { text: "answer 1", wrong },
        { text: "answer 2", wrong },
        { text: "answer 3", wrong },
        { text: "correct answer", right }
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

