var cardTitle = document.getElementById('title')
var cardQuestion = document.getElementById('question')
var buttonArea = document.getElementById('button-area')

var timerButton = document.querySelector('.timer'); // Displays the time left on the button
var timer = 10; // Start Time
var past = 0;   // Counter for the time that has elapsed
var timerLeft;  // Variable to track timer-past
var interval;       

// console.log("cardTitle: ", cardTitle);
// console.log("cardQuestion: ", cardQuestion);
// console.log("buttonArea: ", buttonArea);


loadQuiz();

// Set the starting card for the quiz
function loadQuiz(){

    cardTitle.textContent="Test your coding knowledge";
    cardQuestion.textContent="Think you have what it takes to be a web developer?";

    var button1 = document.createElement("button");
    button1.setAttribute("class", "btn btn-danger mx-1 my-1");
    button1.innerHTML = "Start the quiz, take the red pill";
    buttonArea.appendChild(button1);
    button1.addEventListener("click", function(){startTimer(),  loadQuestions()});

    var button2 = document.createElement("button");
    button2.setAttribute("class", "btn btn-primary mx-1 my-1");
    button2.innerHTML = "Need more training? Take the blue pill.";
    buttonArea.appendChild(button2);
    button2.addEventListener("click",goToW3);
};



////////////////////////////
//  Code Quiz Questions   //
////////////////////////////

var questions = [
    {
        title: "Alternate text is required for images in case the image does not render. Which of the following is the correct?",
        choices: ['Q1 Answer 1', 'Q2 Answer 2', 'Q3 Answer 3', 'Q4 Answer 4'],
        answer: "<img src='indy500.png' alt='Indy 500 Race Car'>"
    },
    {
        title: "<a> tags are used to make text a link. Which of the following is correct?",
        choices: ["<a href = 'https://google.com'>Google Search<a>", "<a href = 'https://google.com'>Google Search</a>", "</a href = 'https://google.com'>Google Search</a>", "<a> href = 'https://google.com'>Google Search</a>"],
        answer: "<a href = 'https://google.com'>Google Search</a>"
    },        
     ];

// questions[i].title
// questions[i.].answer
// questions[i].choices[x]

// loadQuestions();

// Populate Questions 
function loadQuestions (){
    console.log("In loadQuesitons");
    console.log("###################################");
    console.log(questions);
    console.log("###################################");

    console.log("====================================");
    console.log(questions.length);

    
    for (var i=0; i<questions.length; i++){
        console.log(i+" |--| " + "QUESTION |" + questions[i].title + " |--| CHOICES | " + questions[i].choices + " |--| ANSWER | " + questions[i].answer);
        console.log("====================================");
    };
    console.log(" "); // Clear out the previous buttons
    console.log("====================================");

    i = 0

    // Clear out the Intro card
    buttonArea.innerHTML = '';
    
    // for (var i =0; i<questions.length; i++ ){
        // cardTitle.textContent="Question # " + i;
        // cardQuestion.questions[i].title;
        // button1 = 

        
    // };
    

    cardTitle.textContent="Question 1";
    cardQuestion.textContent=questions[0].title;

    createButton("button1", 0, 0);
    createButton("button2", 0, 1);
    createButton("button3", 0, 2);    
    createButton("button4", 0, 3);

    // // Question buttons to be created for each question // //
// <button id = "btn1" class="btn mx-1 my-1 btn-dark">Answer 1 - abcdefg</button>
// <button id = "btn2" class="btn mx-1 my-1 btn-dark">Answer 2 - abcdefg</button>
// <button id = "btn3" class="btn mx-1 my-1 btn-dark">Answer 3 - abcdefg</button>
// <button id = "btn4" class="btn mx-1 my-1 btn-dark">Answer 4 - abcdefg</button>
};
// Create a button for button name, question, and choice passed in 
function createButton(buttonName, i, j){
    var buttonName = document.createElement("button");
    buttonName.id = "btn"+[j+1];
    buttonName.setAttribute("class", "btn choice" + [j+1] + " btn-dark mx-1 my-1");
    buttonName.innerHTML = questions[i].choices[j];
    buttonArea.appendChild(buttonName);
    buttonName.addEventListener("click", function(){startTimer(),  loadQuestions()});

};


console.log("timer: " , timer);
// Display time left on the button 
function appendTime() {
  timerLeft = timer - past;  
  console.log({past, remaining: timer - past, timerLeft: timerLeft});
    
  // Set the time left to 0 if the timer goes negative
  if (timerLeft<0){
      timerLeft = 0;
  }
  timerButton.textContent = "Time Left: " + timerLeft + "s"
  setTimerButtonColor()
};

// Set the Timer button based on the time remaining
function setTimerButtonColor(){
    // console.log("============================================");
    // console.log("1. timerLeft in setTimerButton", timerLeft);

    if (timerLeft < 10 && timerLeft > 0){
        timerButton.classList.replace("btn-success","btn-warning");
    } else if (timerLeft == 0){
        // console.log("2. timerLeft in setTimerButton else if", timerLeft);
        // console.log("============================================");
        timerButton.classList.replace("btn-warning","btn-danger");
    }
};

// Add penality time to the time that has past counter to deduct from timer
function wrongPenalty() {
  past += 5;
};

// Start counting down
function startTimer() {
    console.log("======== in startTimer =======")
    console.log("past ", past)
    console.log("timerLeft", timerLeft)
    if (timer >= past) {
        interval = setInterval(function() {
            
            if (past == 20) {
            
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
  
};

function goToW3(){
    window.open("https://www.w3schools.com/");
};



// Keep for safety. Might need this later. //
// function countdown() {

//         var timeInterval = setInterval(function() {
//             timerButton.textContent = "Time Left: "+ timeLeft + "s";
//         --timeLeft;
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
//     console.log("status", status);

// }





timerButton.addEventListener("click", function(){startTimer(),  loadQuestions()});

// timerButton.addEventListener("click", countdown);
// pauseButton.addEventListener("click", pauseTimer);