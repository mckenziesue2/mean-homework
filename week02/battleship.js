var ask = require('readline-sync');

var myChoice = ask.question('Choose your coordinates: (-,-).');

var grid = [];
var rows = 10;
var columns = 10;

var location = {
	var shipLocation = Math.random() * 5;
	var ship = Math.floor(shipLocation);
	var hit = false;

	for (x = 0; x < ship; x++)
		if (shipLocation === x) {
			return hit = true;
		} else {
			return hit = false;
		}
};


var iArray = [0,1,2,3,4,5,6,7,8,9];
var jArray = [0,1,2,3,4,5,6,7,8,9];
var gridLine = [];

for (var i = 0; i < iArray.length; i++) {
	var printGrid = [];

	for (var j = 0; j < jArray.length; j++) {
		printGrid.push( + i +',' + j );
	}
	gridLine.push(printGrid);
	printGrid = [];
}

for (var i = 0; i < gridLine.length; i++) {
	console.log(gridLine.replace([i], "0");
}