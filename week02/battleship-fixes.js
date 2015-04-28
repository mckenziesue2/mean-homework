var ask = require('readline-sync');

var gameActive = true;

while (gameActive) {
var grid = [];

var row = 10;
var column = 10;

var hits = 0;


//REAL ONE
var generateGrid = function () {
	grid = [];

	for (var x = 0; x < row; x++) {
		grid.push([]);
		for (var y = 0; y < column; y++) {
			grid[x][y] = findLocation();
		}
	}
}

//PRETTY ONE
var printGridConsole = function () {
	var printGrid = [];

	for (var x = 0; x < row; x++) {
		printGrid.push([]);

		for (var y = 0; y < column; y++) {
			if (grid[x][y].ship == true && grid[x][y].hits == true) {
				printGrid[x][y] = 'X';
			} else if (grid[x][y].hit == true) {
				printGrid[x][y] = 'M';
			} else {
				printGrid[x][y] = 'O';
			}
		}
	}
	console.log(printGrid);
}

function findLocation() {
	var location = {
		ship: false,
		hit: false
	};
	var shipLocation = Math.floor(Math.random()*6);

	if (shipLocation === 3) {
		location.ship = true;
	}
	return location;
}


var attemptHit = function(firstChoice, secondChoice) {

	if (grid[firstChoice][secondChoice].ship == true) {
		grid[firstChoice][secondChoice].hit == true;
		console.log("You have a hit!")
		hits++;
	} else {
		console.log("You missed");
		gameActive = true;
	}
};

var guess = function () {
	var firstChoice = parseInt(ask.question('Choose your first coordinate.'));
	var secondChoice = parseInt(ask.question('Choose your second coordinate.'));

	console.log(attemptHit(firstChoice, secondChoice));
};

if (gameActive) {
	generateGrid();
	printGridConsole();
	guess();
} else {
	gameActive = true;
	hits = 0;
	console.log('Resetting game...');
	generateGrid();
	printGridConsole();
	guess();
}


attemptHit();
};

