//questions for quiz
var questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Leveler"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "Which of the following is the correct way to use the standard namespace in C++?",
    answers: [
      "Using namespace standard;",
      "Using standard namespace;",
      "Using namespace std;",
      "Standard namespace used;"
    ],
    correctAnswer: "Using namespace std;"
  }, 
  {
    question: "Which of these is NOT a programming language",
    answers: [
      "Rust",
      "Ruby",
      "MATLAB",
      "Pearl"
    ],
    correctAnswer: "Pearl"
  }
];

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var questionElement = document.getElementById("question");
var option0El = document.getElementById("option0");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");

var timer;
var timerCount;
var isWin = false;
var currentQuestion = 0;
var score = 0;

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 55;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer()
  displayQuestions()
}

function displayQuestions() {
  questionElement.textContent = questions[currentQuestion].question;
  option0El.textContent = questions[currentQuestion].answers[0];
  option1El.textContent = questions[currentQuestion].answers[1];
  option2El.textContent = questions[currentQuestion].answers[2];
  option3El.textContent = questions[currentQuestion].answers[3];
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
      } 
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
    }
  }, 1000);
}

//check user's answer
function checkAnswer(event) {
  var userInput = event.target.value;
  //if they choose the correct answer
  if (userInput == questions[currentQuestion].correctAnswer) {
    //add to score
    score += 5;
  } else {
    //reduce time for wrong answer
    timerCount -= 5;
  }
  currentQuestion++;
  displayQuestions()
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

//attach event listner to each option
option0El.addEventListener("click", checkAnswer);
option1El.addEventListener("click", checkAnswer);
option2El.addEventListener("click", checkAnswer);
option3El.addEventListener("click", checkAnswer);

