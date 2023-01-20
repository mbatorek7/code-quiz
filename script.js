var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var timer;
var timerCount;
var isWin = false;

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