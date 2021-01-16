
var btn = document.getElementsByClassName("btn");
startButton = document.getElementById("start-btn");
questionContainer = document.getElementById("question-container");
question = document.getElementById("question");

function startQuiz(){
    questionContainer.classList.remove("hide");
    startButton.classList.add("hide");

    for (let i = 0; i < questionList.length; i++) {
     question.append(questionList[i]);
    }
}


startButton.addEventListener("click", startQuiz);



questionList = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
]







