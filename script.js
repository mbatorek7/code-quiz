//questions for quiz
var questions = [
  {
    question: "What does HTML stand for?",
    answers: {
      a: 'Hyper Text Markup Language',
      b: 'Hyper Trainer Marking Language',
      c: 'Hyper Text Marketing Language',
      d: 'Hyper Text Markup Leveler'
    },
    correctAnswer: 'a'
  },
  {
    question: "<h1>Text</h1> is the correct way of making a header in HTML.",
    answers: {
      a: 'True',
      b: 'False'
    },
    correctAnswer: 'a'
  },
  {
    question: "Which of the following is the correct way to use the standard namespace in C++?",
    answers: {
      a: 'Using namespace standard;',
      b: 'Using standard namespace;',
      c: 'Using namespace std;',
      d: 'Standard namespace used;'
    },
    correctAnswer: 'c'
  }, 
  {
    question: "Which of these is NOT a programming language",
    answers: {
      a: 'Rust',
      b: 'Ruby',
      c: 'MATLAB',
      d: 'Pearl'
    },
    correctAnswer: 'd'
  }
];

//variables for rest of page
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var timer;
var timerCount;
var isWin = false;
var correctAnswers = 0;

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 55;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer()
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

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);