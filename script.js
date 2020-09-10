var timerEl = document.querySelector('#timer'); // Displays the time left on the button



var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");

var mainEl = document.getElementById("main");
//var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

var i = 0;

// var millisecondsPerWord = prompt("How many milliseconds between words would you like?");

function countdown() {
    var timeLeft = 5;
  
    var timeInterval = setInterval(function() {
      timerEl.textContent = "Time Left: "+ timeLeft + "s";
      timeLeft--;
        console.log("Timer left")
      if (timeLeft === 0) {
        timerEl.textContent = "Time Left: 0";
/*         speedRead();
 */        clearInterval(timeInterval);
      }
    }, 1000);
  }
  
  countdown();

// function prepareRead() {
//   var timeLeft = 5;

//   var timeInterval = setInterval(function() {
//     timerEl.textContent = timeLeft + " seconds remaining";
//     timeLeft--;

//     if (timeLeft === 0) {
//       timerEl.textContent = "";
//       speedRead();
//       clearInterval(timeInterval);
//     }
//   }, 1000);
// }


// function speedRead() {
//   mainEl.append(bodyEl);

//   var poemInterval = setInterval(function() {
//     if (words[i] === undefined) {
//       clearInterval(poemInterval);
//     } else {
//       mainEl.textContent = words[i];
//       i++;
//     }

//   }, millisecondsPerWord);
// }

// prepareRead();


