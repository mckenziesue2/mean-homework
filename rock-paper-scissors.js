var myChoice = prompt("Do you choose rock, paper, or scissors?");

var myChoiceUpper = myChoice.toUpperCase();

console.log(myChoiceUpper);

var computerChoice = Math.random();

if (0 < computerChoice < 0.33) {
	computerChoice = "rock";
} else if (0.33 < computerChoice < 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

var computerChoiceUpper = computerChoice.toUpperCase();

console.log(computerChoiceUpper);

var compare = function(choice1, choice2) {
	if (choice1 === choice2) {
		return "It is a tie!";
	} else if (choice1 === "ROCK") {
		if (choice2 === "PAPER") {
			return "Paper wins!";
		} else {
			return "Rock wins!";
		}
	} else if (choice1 === "ROCK") {
		if (choice2 === "SCISSORS") {
			return "Scissors wins!";
		} else {
			return "Paper wins!";
		}
	} else if (choice1 === "SCISSORS") {
		if (choice2 === "ROCK") {
			return "Rock wins!";
		} else {
			return "Scissors wins!";
		}
	}
};

console.log(compare(myChoiceUpper, computerChoiceUpper));