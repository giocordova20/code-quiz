var timerButton = document.querySelector('.timer');     // Displays the time left on the button
var card = document.querySelector(".card");
var cardTitle = document.getElementById('title');
var cardQuestion = document.getElementById('question');
var buttonArea = document.getElementById('button-area');
var playAgainButton = document.getElementById('play-again');
var viewSubmitButton = document.getElementById('submit-view');
var playerName = document.querySelector('.player-name');
var gameOverMessage = document.querySelector(".game-over");
var gameOverNotify = document.querySelector("#notify")
var score = 0;
var time = 25;  // Quiz Time
var past = 0;   // Counter for the time that has elapsed
var clock;      // Variable for the clock interval

loadQuiz(); // Load the beginning card and present the Start Quiz button and the More training button

//// Set the starting card for the quiz ////
function loadQuiz(){
    timerButton.textContent = "Start Timer: " + time + "s"
    timerButton.classList.add("btn-success");

    buttonArea.innerHTML = ''; // Clear button area in case the Play Again button is clicked

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
        title: "Which of the following is the correct way to create an alert stating \" Hello World!\" ",
        choices: ["message(\"Hello World!\");", "alert(\"Hello World!\");", "alertBox(\"Hellow World!\");", "messageBox(\"Hello World!\");"],
        answer: "alert(\"Hello World!\");"
    },
    {
        title: "<a> tags are used to create a text link. Which of the following is correct?",
        choices: ["<a href = 'https://google.com'>Google Search</a>", "<a link = 'https://google.com'>Google Search</a>", "</a href = 'https://google.com'>Google Search</a>", "<a> href = 'https://google.com'>Google Search</a>"],
        answer: "<a href = 'https://google.com'>Google Search</a>"
    },        
    {
        title: "How do you begin a for loop in JavaScript?",
        choices: ["(for i==0; i<5)", "for (i=0; i<5)", "for (i=0; i<5; i++)"],
        answer: "for (i=0; i<5; i++)"
    },        
    {
        title: "How do you reference a java script file?",
        choices: ["link=myjsfile.js", "href=myjsfile.js", "src=myjsfile.js"],
        answer: "src=myjsfile.js"
    }        
     ];

var ques = 0;
//// Populate Questions ////
function loadQuestions (){

    if (time > 10){
        timerButton.classList.replace("btn-danger","btn-success")
    };

    // Clear out the Intro card to populate the questions
    buttonArea.innerHTML = '';
    cardTitle.textContent="Question # " + (ques+1);
    cardQuestion.textContent=questions[ques].title;
        
    // Create the answer choice buttons //
    for (var b = 0; b<questions[ques].choices.length; b++){
    // for (var b = 0; b<4; b++){
        createButton(ques,b)
    };
        
    createAddEventListner(); // Add event listener to each of the anwer buttons
    
};

////// Create a button for the specified parameters: question(index number of the question in the questions array)
////// and choice(index number of the choice for the question in the questions array)
function createButton(i, j){
    var buttonNum = j+1
    var buttonName = document.createElement("button");
    buttonName.id = "btn"+buttonNum;
    buttonName.setAttribute("class", "answer btn-info mx-1 my-1");
    buttonName.textContent = questions[i].choices[j];
    buttonArea.appendChild(buttonName);
};

//// Add the click eventListner to the answer buttons that runs the checkAnswer function ////
function createAddEventListner(){
    var getAnswers = document.querySelectorAll(".answer"); // Get all the buttons on the page with the class of answer
    
    for (var i = 0; i<getAnswers.length; i++){
        getAnswers[i].addEventListener("click", checkAnswer );
    };
};

//// Check the answer that was clicked ////
function checkAnswer(){
    if (this.textContent === questions[ques].answer){
        score += 10;
    } else {
    time = time - 10;

    if (time<=0){
        time = 0;
        ques = 0; // Reset the index of the question
        stopTimer();
    }
    }
    
    ques++ // increase the global questions
    
    if (ques>=questions.length){
        time = 0;
        ques = 0; // Reset the index of the question
        stopTimer();
        gameOver();
        return;
    }
    if (time >= 0){
        loadQuestions();        
    }
    };

//// Load Game OVer Modal ////
function gameOver(){
    gameOverMessage.textContent ="Thanks for Playing. Your score is: " + score;
    $('#game-over').modal();
};


//// Go To High Scores //// *** This function needs work. I couldn't store multiple 
//// players in locatStorage
function goToHighScores(){
    // Get what's in local storage 
    var existingPlayer= [];
    existingPlayer = JSON.parse(localStorage.getItem('player')) || [] ;

    // Get the current player name and score
    var player = {
        name: playerName.value,
        userScore: score 
    };
    // Add current player name and score to existing player
    existingPlayer.push(player);
    
    // Add the updated existing player info back to localStorage
    localStorage.setItem('player',JSON.stringify(existingPlayer));
    
    window.open("scores.html")

    location.reload();
    
};

//// Display time on the nav button ////
function appendTime() {

    timerButton.textContent = "Time Left: " + time + "s"
    setTimerButtonColor()
};

//// Set the Timer button color based on the time remaining ////
function setTimerButtonColor(){
    if (time <= 10 && time > 0){
        timerButton.classList.replace("btn-success","btn-warning");
    } else if (time == 0){
        timerButton.classList.replace("btn-warning","btn-danger");
    }
};

//// Start counting down ////
function startTimer() {
    timerButton.classList.replace("btn-danger", "btn-succes")

    clock = setInterval(function() {
        // Stop condition for the timer 
        // (must be within the setInterval)
        if (time <= 0) {
            ques = 0;
          stopTimer();
          return;
        }    
        appendTime();
        time--
      }, 1000)
};

function stopTimer() {
    appendTime(); // Time is 0 at this point. Display it on the button.
  
    clearInterval(clock); //Stop the Clock

    // Time is up
    gameOver();
    ques = 0;
    time = 25;
  };

//// Navigate to w3schools.com ////
function goToW3(){
    window.open("https://www.w3schools.com/");
};

timerButton.addEventListener("click", function(){startTimer(),  loadQuestions()});
playAgainButton.addEventListener("click",loadQuiz);
viewSubmitButton.addEventListener("click", function(){goToHighScores()});
