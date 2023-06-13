var options = ["r", "p", "s"];
var scoreboard = {
    wins: 0,
    losses: 0,
    ties: 0,
};

var startgame = function() {

    let userInput = prompt("pick R,P or S");

     if (userInput === "r" || userInput === "s" || userInput === "p"){
        console.log(userInput);
    } else {
        alert("pick r,p or s");
        startgame();
    }

    var choice = Math.floor(Math.random() * options.length);
    alert("the computer chose: "+ options[choice]);
    var computerChoice = (options[choice]);
    console.log(options[choice]);
    

    if (userInput === computerChoice) {
        scoreboard.ties++;
        alert("You picked: " + userInput + " and the computer picked: " + computerChoice + " this was a tie");
    } else if ((userInput === "r" && computerChoice === "s") ||
               (userInput === "s" && computerChoice === "p") ||
                (userInput === "p" && computerChoice === "r")) {
        scoreboard.wins++;
        alert("You picked: " + userInput + " and the computer picked: " + computerChoice + " you won");
    } else {
        scoreboard.losses++;
        alert("You picked: " + userInput + " and the computer picked: " + computerChoice + " you won");
    };

function playAgain() {
    if (window.confirm ("The score is: " + scoreboard.wins + " Wins and: " + scoreboard.losses + " Losses and: " + scoreboard.ties + " Ties, Do you want to play again")) {
        startgame();
        } else { alert("The score is: " + scoreboard.wins + " Wins and: " + scoreboard.losses + " Losses and: " + scoreboard.ties + " Ties")
        }
}
console.log("wins "+ scoreboard.wins);
console.log("Losses "+ scoreboard.losses);
console.log("Ties "+ scoreboard.ties);
playAgain();
};

startgame();
