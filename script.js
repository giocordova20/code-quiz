var cardTitle = document.getElementById('title')
var cardQuestion = document.getElementById('question')
var buttonArea = document.getElementById('button-area')
var timerButton = document.querySelector('.timer'); // Displays the time left on the button

var time = 100; // Start Time
var past = 0;   // Counter for the time that has elapsed
var timerLeft;  // Variable to track timer-past
var interval;       

// console.log("cardTitle: ", cardTitle);
// console.log("cardQuestion: ", cardQuestion);
// console.log("buttonArea: ", buttonArea);


loadQuiz(); // Load the beginning card and present the Start Quiz button and the More training button

//// Set the starting card for the quiz ////
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
        title: "Which of the following is the correct?",
        choices: ['Q1 Answer 1', 'Q2 Answer 2', 'Q3 Answer 3', 'Q4 Answer 4'],
        answer: 'Q2 Answer 2'
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


var ques = 0;
var choice = 0;
//// Populate Questions ////
function loadQuestions (){
    // Clear out the Intro card to populate the questions
    buttonArea.innerHTML = '';
    cardTitle.textContent="Question # " + (ques+1);
    cardQuestion.textContent=questions[0].title;
        
    // Create the answer choice buttons //
    for (var b = 0; b<questions[ques].choices.length; b++){
        console.log("   b",b)
        createButton(ques,b)
    };
        
    createAddEventListner(); // Add event listener to each of the anwer buttons
    
};

//// Add the click eventListner to the answer buttons that runs the checkAnswer function ////
function createAddEventListner(){
    var getAnswers = document.querySelectorAll(".answer"); // Get all the buttons on the page with the class of answer
    
    for (var i = 0; i<getAnswers.length; i++){
        getAnswers[i].addEventListener("click", checkAnswer );
    };

};

////// Create a button for the specified parameters: question(index number of the question in the questions array)
////// and choice(index number of the choice for the question in the questions array)
function createButton(i, j){
    console.log("   in create button",i, j);
    var buttonNum = j+1
    var buttonName = document.createElement("button");
    buttonName.id = "btn"+buttonNum;
    buttonName.setAttribute("class", "answer btn-dark mx-1 my-1");
    buttonName.innerHTML = questions[i].choices[j];
    buttonArea.appendChild(buttonName);
};

//// Check the answer that was clicked ////
function checkAnswer(){
    console.log("  ---- in checkAnswer ----  ");
    if  (this.textContent === questions[ques].answer){
    console.log("  This correct  ")

    }   else {
    console.log("  WRONG!!!")
    time = time - 10;
    appendTime();
    }

    ques++ // increase the global questions
    loadQuestions();        

    };





//// Display time left on the nav button ////
function appendTime() {
        
    // Set the time left to 0 if the timer goes negative
    timerButton.textContent = "Time Left: " + time + "s"
    setTimerButtonColor()
};

//// Set the Timer button color based on the time remaining ////
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

//// Add penality time to the time that has past counter to deduct from timer ////
function wrongPenalty() {
  past += 5;
};

//// Start counting down ////
function startTimer() {
    var clock = setInterval(function() {
        // Stop condition for the timer 
        // (must be within the setInterval)
        if (time <= 0) {
          stopTimer();
          return;
        }    
        appendTime();
        time--
      }, 1000)
      
};

function stopTimer() {
    console.log("Time's Up!!");
    // clear the page
    // Display time is up
    //Direct user to the High Scores page

  };

//// Navigate to w3schools.com ////
function goToW3(){
    window.open("https://www.w3schools.com/");
};





timerButton.addEventListener("click", function(){startTimer(),  loadQuestions()});


