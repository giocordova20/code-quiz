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


//// Populate Questions ////
function loadQuestions (){
    // Clear out the Intro card to populate the questions
    buttonArea.innerHTML = '';
    console.log("In loadQuesitons");
    console.log("###################################");
    console.log(questions);
    console.log("###################################");

    console.log("====================================");
    console.log(questions.length);

    /////////  console log the questions array of objects //////
    for (var i=0; i<questions.length; i++){
        console.log(i+" |--| " + "QUESTION |" + questions[i].title + " |--| CHOICES | " + questions[i].choices + " |--| ANSWER | " + questions[i].answer);
        console.log("====================================");
    };
    console.log(" "); // Clear out the previous buttons
    console.log("====================================");
    ///////////////////////////////////////////////////////////

    
    var ques = 0;
    var choice = 0;
    for (var i =0; i<questions.length; i++ ){
        cardTitle.textContent="Question # " + (i+1);
        cardQuestion.textContent=questions[0].title;
        

        console.log("questions[ques].choices.length", questions[ques].choices.length)
        //// Create the answer choice buttons ////
        for (var b = 0; b<questions[ques].choices.length; b++){
            console.log("   b",b)
            createButton(ques,b)
        };
        
        // **** add listener for correct button **** //
        checkAnswer()
        ques++
    };
    //console.log("questions[i].choices.length", questions[0].choices.length)

    // cardTitle.textContent="Question 1";
    // cardQuestion.textContent=questions[0].title;
    // createButton(0, 0);
    // createButton(0, 1);
    // createButton(0, 2);    
    // createButton(0, 3);

    // // Question buttons to be created for each question // //
// <button id = "btn1" class="btn mx-1 my-1 btn-dark">Answer 1 - abcdefg</button>
// <button id = "btn2" class="btn mx-1 my-1 btn-dark">Answer 2 - abcdefg</button>
// <button id = "btn3" class="btn mx-1 my-1 btn-dark">Answer 3 - abcdefg</button>
// <button id = "btn4" class="btn mx-1 my-1 btn-dark">Answer 4 - abcdefg</button>
};
////// Create a button for the specified parameters: question(index number of the question in the questions array)
////// and choice(index number of the choice for the question in the questions array)
function createButton(i, j){
    console.log("   in create button",i, j);
    var buttonNum = j+1
    var buttonName = document.createElement("button");
    buttonName.id = "btn"+buttonNum;
    buttonName.setAttribute("class", "btn q"+i + " choice"+buttonNum + " btn-dark mx-1 my-1");
    buttonName.innerHTML = questions[i].choices[j];
    buttonArea.appendChild(buttonName);
    buttonName.addEventListener("click", checkAnswer); //(i,".choice"+buttonNum));
};

//// Check the answer that was clicked ////
function checkAnswer(){ //ques, button){
    console.log("  -- in checkAnswer --  ");
    // console.log(ques,button)
    // console.log("document.querySelector(button).textContent: ", document.querySelector(button).textContent);
    console.log("document.querySelector(button).textContent: ", document.querySelector(".choice1").textContent);
    var choice = document.getElementById("btn1");
    var classes = choice.className
    console.log("  choice classes:", classes);
    console.log("  choice length:", choice.className.length);
    console.log("  choice :", (choice.className.substring(4, 14)));
    
    console.log("  --------------------  ");
    // if (document.querySelector(button).textContent === questions[ques].answer){
    //     alert("You got the right one baby!!!")
    //     return true
    
    // } else {
    //     alert("YOU GOT THE WRONG ONE!!!")
    //     return false
    // }

};

console.log("timer: " , timer);
//// Display time left on the nav button ////
function appendTime() {
    timerLeft = timer - past;  
    //   console.log({past, remaining: timer - past, timerLeft: timerLeft});
        
    // Set the time left to 0 if the timer goes negative
    if (timerLeft<0){
        timerLeft = 0;
    }
    timerButton.textContent = "Time Left: " + timerLeft + "s"
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
    // console.log("======== in startTimer =======")
    // console.log("past ", past)
    // console.log("timerLeft", timerLeft)
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

//// Navigate to w3schools.com ////
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