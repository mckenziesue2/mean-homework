var ask = require('readline-sync');

var myChoice = ask.question('Do you choose rock, paper, or scissors?');

var myChoiceLower = myChoice.toLowerCase();

console.log(myChoiceLower);

var computerChoice = Math.random();

if (0 < computerChoice < 0.33) {
	computerChoice = "rock";
} else if (0.33 < computerChoice && computerChoice < 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

var computerChoiceLower = computerChoice.toLowerCase();

console.log(computerChoiceLower);

var compare = function(choice1, choice2) {
	if (choice1 === choice2) {
		return "It is a tie!";
	} else if (choice1 === "rock") {
		if (choice2 === "paper") {
			return "Paper wins!";
		} else {
			return "Rock wins!";
		}
	} else if (choice1 === "rock") {
		if (choice2 === "scissors") {
			return "Scissors wins!";
		} else {
			return "Paper wins!";
		}
	} else if (choice1 === "scissors") {
		if (choice2 === "rock") {
			return "Rock wins!";
		} else {
			return "Scissors wins!";
		}
	}
};

console.log(compare(myChoiceLower, computerChoiceLower));