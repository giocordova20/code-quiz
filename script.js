var card = document.querySelector(".card");
var cardTitle = document.getElementById('title');
var cardQuestion = document.getElementById('question');
var buttonArea = document.getElementById('button-area');
var timerButton = document.querySelector('.timer');     // Displays the time left on the button

var time = 35; // Quiz Time
var past = 0;   // Counter for the time that has elapsed
var timerLeft;  // Variable to track timer-past

loadQuiz(); // Load the beginning card and present the Start Quiz button and the More training button

//// Set the starting card for the quiz ////
function loadQuiz(){
    timerButton.textContent = "Start Timer: " + time + "s"

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
     ];

var ques = 0;
//// Populate Questions ////
function loadQuestions (){

    console.log(" The value of ques is: ", ques);
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
    var buttonNum = j+1
    var buttonName = document.createElement("button");
    buttonName.id = "btn"+buttonNum;
    buttonName.setAttribute("class", "answer btn-dark mx-1 my-1");
    buttonName.textContent = questions[i].choices[j];
    buttonArea.appendChild(buttonName);
};

//// Check the answer that was clicked ////
function checkAnswer(){
    console.log("-----------------------------------------------");
    console.log("            ---- in checkAnswer ----          ");
    console.log("    this.textContent:      ", this.textContent);
    console.log("    questions[ques].answer:", questions[ques].answer);
    if (this.textContent === questions[ques].answer){
    console.log("    ================");
    console.log("    This correct  ");

    setTimeout(function(){
        card.classList.add("bg-success");

    },100);
    console.log("    ================");
    
    } else {
    console.log("    ================");
    console.log("       WRONG!!!");
    setTimeout(function(){
        card.classList.add("bg-success");
    },100);

    card.classList.add("bg-danger");
    console.log("    ================");
    console.log("")
    time = time - 10;
    if (time<0){
        time = 0;
        //***call function to stop timer */
    }
    appendTime();
    }

    ques++ // increase the global questions

    if (ques>=questions.length){
        console.log(" In the if ")
        return;
    };

    // if (card.classList.contains("bg-success")){
    //     card.classList.remove("bg-success")
    // } else if(card.classList.contains("bg-danger")){
    //     card.classList.remove("bg-danger")
    // };
    console.log("-----------------------------------------------");

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

    if (time < 10 && time > 0){
        timerButton.classList.replace("btn-success","btn-warning");
    } else if (time == 0){
        // console.log("2. timerLeft in setTimerButton else if", timerLeft);
        // console.log("============================================");
        timerButton.classList.replace("btn-warning","btn-danger");
    }
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


