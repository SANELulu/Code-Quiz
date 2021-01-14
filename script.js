startButton = document.getElementById("start-btn");
questionContainer = document.getElementById("question-container");

function startQuiz(){
    questionContainer.classList.remove("hide");
    startButton.classList.add("hide");
}


startButton.addEventListener("click", startQuiz);


