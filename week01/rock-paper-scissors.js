var ask = require('readline-sync');

var myChoice = ask.question('Do you choose rock, paper, or scissors?');

var myChoiceLower = myChoice.toLowerCase();

console.log("My Choice: " + myChoiceLower);

var computerChoice = Math.random();

if (0 < computerChoice && computerChoice < 0.33) {
	computerChoice = "rock";
} else if (0.33 < computerChoice && computerChoice < 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

var computerChoiceLower = computerChoice.toLowerCase();

console.log("Computer: " + computerChoiceLower);

var compare = function(choice1, choice2) {
	if (choice1 === choice2) {
		return "It is a tie!";
	} else if (choice1 === "rock") {
		if (choice2 === "paper") {
			return "The computer wins!";
		} else {
			return "You win!";
		}
	} else if (choice1 === "paper") {
		if (choice2 === "scissors") {
			return "The computer wins!";
		} else {
			return "You win!";
		}
	} else if (choice1 === "scissors") {
		if (choice2 === "rock") {
			return "The computer wins!";
		} else {
			return "You win!";
		}
	}
};

console.log(compare(myChoiceLower, computerChoiceLower));