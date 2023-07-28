// Selects element by class
var timeEl = document.querySelector("#timer");
var startButton = document.querySelector("#start");
var highScore = document.querySelector("#high_scores");
// Selects element by id
// var mainEl = document.getElementById("#content");
var secondsLeft = 60;
var contentEl = document.querySelector("#content")
var promptEl = document.querySelector("#prompt")
var index = 0;
let myQuestion = [
  {
    question: "How to call a funtion",
    answers: {
      a: "()",
      b: "{}",
      c: "<>",
      d: "[]",
    },
    correctAnswer: '()'
  },
  {
    question: "What is correct for an array?",
    answers: {
      a: "array=(2,3,4,5)",
      b: "array:[1,2,3,4,5,6]",
      c: "array{1,2,3,4,5}",
      d: "array<1,2,3,4,5,6>",
    },
    correctAnswer: 'array:[1,2,3,4,5,6]'
  },
  {
    question: "What does HTML stand for?",
    answers: {
      a: "High Time Money Laundering)",
      b: "Hilt Tries Marking Liniar",
      c: "Hyper Text Markup Language",
      d: "Helpful Transcript Mastry Linguistics",
    },
    correctAnswer: 'Hyper Text Markup Language'
  }
]

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      // Calls function to tell the user they ran out of time and need to restart
      sendMessage("Out of time- Sucks to Suck.");
    }

  }, 1000);
}
// funtion to start the quiz via button
function startQuiz() {
  setTime();
  displayQuestion();
  document.getElementById("#start").setAttribute(".hidden")
}
// Create buttons
function displayQuestion() {
  contentEl.textContent = myQuestion[index].question;
  var button1 = document.createElement("button");
  button1.textContent = myQuestion[index].answers.a
  contentEl.appendChild(button1)
  var button2 = document.createElement("button");
  button2.textContent = myQuestion[index].answers.b
  contentEl.appendChild(button2)
  var button3 = document.createElement("button");
  button3.textContent = myQuestion[index].answers.c
  contentEl.appendChild(button3)
  var button4 = document.createElement("button");
  button4.textContent = myQuestion[index].answers.d
  contentEl.appendChild(button4)
}

function buttonClick(event) {
  if (event.target.innerText == myQuestion[index].correctAnswer) {
    index ++;
    displayQuestion();
  } else {
    alert("Wrong answer- Start over.")
    index ++;
    displayQuestion();
  } if (myQuestion[index] > 3) {
    endGame();
  }
}

function highScoreShow() {
  document.getElementById(contentEl).setAttribute(".hidden")
}

function endGame(){
  document.getElementById(contentEl).setAttribute(".hidden")
}

contentEl.addEventListener("click", buttonClick)



startButton.addEventListener("click", startQuiz)

highScore.addEventListener("click", highScoreShow)


//sendMessage will be another page where it will show out of time and tht you loose- APPEND MAIN_EL

// add button press to setTime event listener
