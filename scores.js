var playerName = document.getElementById('player-name');
var score = document.getElementById('player-score');


var lastPlayers = JSON.parse(localStorage.getItem("player"));
console.log(lastPlayers);


playerName.textContent = lastPlayers.name;
score.textContent = lastPlayers.userScore;
