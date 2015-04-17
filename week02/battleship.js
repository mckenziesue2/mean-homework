var active = true;

while (active) {
var grid = [];

var row = 10;
var column = 10;

var iArray = [0,1,2,3,4,5,6,7,8,9];
var jArray = [0,1,2,3,4,5,6,7,8,9];


//PRETTY ONE
for (var i = 0; i < iArray.length; i++) {
	var printGrid = [];

	for (var j = 0; j < jArray.length; j++) {
		printGrid.push( 0 );
	}
	grid.push(printGrid);
}

//REAL ONE
for (var i = 0; i < grid.length; i++) {
	console.log(grid[i]);
}

for (x = 0; x < row; x++) {
	grid.push([]);
	for (y = 0; y < column; y++) {
		grid[x][y] = findLocation();
	}
}


function findLocation() {
	var searchShip = {
		ship: false,
		hit: false
	};
	var shipLocation = Math.floor(Math.random()*6);

	if (shipLocation === 1) {
		searchShip.ship = true;
	}
	return searchShip;
}

var ask = require('readline-sync');

var firstChoice = ask.question('Choose your first coordinate.');
var secondChoice = ask.question('Choose your second coordinate.');

function hit() {
	if (grid[firstChoice][secondChoice].ship === true) {
		grid[firstChoice][secondChoice].hit = true;
		console.log("You have a hit!")
		active = false;
	} else {
		console.log("You missed");
		active = true;
	}
}

hit();
};



// var mathLocation = Math.random()*6;
// var shipLocation = Math.floor(mathLocation);
// var hit = false;

// // // var location = {
// 	for (var x = 0; x < shipLocation; x++) {
// 		if (shipLocation === 1) {
// 			hit = true;
// 		} else {
// 			hit = false;
// 		}
// 	}
// // };

// console.log(shipLocation);
// console.log(hit);

