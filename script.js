var timerButton = document.querySelector('#timer'); // Displays the time left on the button
var timer = 10;     // Start Time
var past = 0;       // Counter for the time that has elapsed
var timerLeft = 0;  // Variable to track timer-past
var interval;       

///////////////////////
//   Answer buttons  //
///////////////////////
var answer1 = document.getElementById("")


////////////////////////////
//  Code Quiz Questions   //
////////////////////////////

// var questions = [
//     {
//         title: "Alternate text is required for images in case the image does not render. Which of the following is the correct?",
//         choices: ["<img src="indy500.png" alt="Indy 500 Race Car">", "<img src="indy500.png" altt="Indy 500 Race Car">", "<img src="indy500.png" alternate="Indy 500 Race Car">", "<img src="indy500.png" alt=="Indy 500 Race Car">"],
//         answer: "<img src="indy500.png" alt="Indy 500 Race Car">"
//     },
//     {
//         title: "<a> tags are used to make text a link. Which of the following is correct?",
//         choices: ["<a href = "https://google.com">Google Search<a>", "<a href = "https://google.com">Google Search</a>", "</a href = "https://google.com">Google Search</a>", "<a> href = "https://google.com">Google Search</a>"],
//         answer: "<a href = "https://google.com">Google Search</a>"
//     },        
//      ];

// questions[i].title
// questions[i.].answer
// questions[i].choices[x]

console.log("timer: " , timer);

// Display time left on the button. 
function appendTime() {
  timerLeft = timer - past;  
  console.log({past, remaining: timer - past, timerLeft: timerLeft});
    
  // Set the time left to 0 if the timer goes negative
  if (timerLeft<0){
      timerLeft = 0;
  }
  timerButton.textContent = "Time Left: " + timerLeft + "s"
  setTimerButtonColor()
}

// Set the Timer button based on the time remaining
function setTimerButtonColor(){
    console.log("============================================");
    console.log("1. timerLeft in setTimerButton", timerLeft);

    if (timerLeft < 10 && timerLeft > 0){
        timerButton.classList.replace("btn-success","btn-warning");
    } else if (timerLeft == 0){
        console.log("2. timerLeft in setTimerButton else if", timerLeft);
        console.log("============================================");
        timerButton.classList.replace("btn-warning","btn-danger");
    }
}

// Add penality time to the time that has past counter to deduct from timer
function wrongPenalty() {
  past += 5;
}

function startTimer() {
console.log(" ", )
  if (timer >= past) {
    interval = setInterval(function() {
        if (past % 21 === 0) {
        past += 5;
        } else if (timerLeft === 0 ){
            console.log(" in else if timerLeft", timerLeft)
            clearInterval(interval)
        } else {
            past++
        }
        appendTime()
    }, 1000)
  
  } 
  
}

//startTimer();


// function countdown() {
//     if (status == "Start") {

//         var timeInterval = setInterval(function() {
//             timerButton.textContent = "Time Left: "+ timeLeft + "s";
//         timeLeft--;
//             console.log("Timer left")
//         if (timeLeft === 0) {
//             timerButton.textContent = "Time Left: 0";
//         clearInterval(timeInterval);
//         }
//         }, 1000);

//     } else {
//         console.log("In else")
//         clearInterval(timeInterval);

//     }
//     status = "Pause";
//     console.log("status", status);

// }





timerButton.addEventListener("click", startTimer);

// timerButton.addEventListener("click", countdown);
// pauseButton.addEventListener("click", pauseTimer);