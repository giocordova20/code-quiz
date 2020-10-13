
//// Display Players saved in localStorage
function displayPlayers () {

    // Get the players in localStorage
    var lastPlayers = JSON.parse(localStorage.getItem("player")) || [];
    
    // Sort the players by scores descending
    lastPlayers.sort((a,b)=> b.userScore - a.userScore);

    lastPlayers.forEach(function(element, index) {
        $("#leader-board-table").append(`
            <tr>
                <th scope="row">${index+1}</th>
                <td>${element.name}</td>
                <td>${element.userScore}</td>
            <tr>`)
    });
};

$("#play-again").on("click", function(){

    if (window.opener ==null || window.history.length == 1){
        window.close();
        window.open("index.html");
    };
});

$("#clear-scores").on("click", function(){
    localStorage.removeItem("player");
    location.reload();
});

displayPlayers();