//Node module that takes input from the terminal
var readlineSync = require('readline-sync');

//The grid that will store locations
var grid = [];

//Constants for total rows and columns
var ROWS = 10;
var COLUMNS = 10;

//Variable indicating if the game should continue or not after each turn
var gameActive = true;

//The current score - ie you need 3 hits to win
var hits = 0;


//Function that generates a location and randomly determines
//if that location should be a ship or not
var getLocation = function() {

	//Random number between 1 and 5
	var rand = Math.floor(Math.random() * (6 + 1)) + 0;
	
	//Location object that will be stored in grid
	var location = {
		ship: false,
		hit: false
	};

	//If the random number is 3 - lets make this a ship otherwise leave
	//it as a non ship location
	if (rand === 3)
	{
		location.ship = true;
	}

	//Return the location
	return location;
}

//Generates the game grid - pushes locations into each grid slot
var generateGrid = function()
{
	//Reset the grid
	grid = [];

	for (var x = 0; x < ROWS; x++)
	{
		//Push the first inner array - every new "row" should get a new inner array
	  	grid.push([]);
	  
	  	//Iterate through the columns and then assign the location
	    for (var y = 0; y < COLUMNS; y++)
	    {
	        grid[x][y] = getLocation();
	    }
	}
}

//This function prints a visual layout of the game board
var printGridConsole = function()
{
	//The grid to print
	var printGrid = [];
	for (var x = 0; x < ROWS; x++)
	{
		printGrid.push([]);

	    for (var y = 0; y < COLUMNS; y++)
	    {
	    	//If it is a ship and if it has been hit show an X
	    	if (grid[x][y].ship == true && grid[x][y].hit == true)
	    		printGrid[x][y] = 'X'
	    	//If it is not a ship enter an M for a miss
	    	else if (grid[x][y].hit == true)
	    		printGrid[x][y] = 'M'
	    	else
	    	//Otherwise use O to show that this location has not been guessed yet
	    		printGrid[x][y] = 'O'
	    }
	}

	console.log(printGrid);
}

//Called after we have collected the two points
var attemptAttack = function(pointA, pointB)
{
	//Set a default message
	var returnMessage = 'You missed your target!';

	//If the location is a ship location
	if (grid[pointA][pointB].ship == true)
    {
    	//Set it has hit (so we can show it in the print grid later)
    	grid[pointA][pointB].hit = true

    	//Add +1 to the score
    	hits++;

    	//Set the message we want to return to the hit message
    	returnMessage = 'You have a HIT!';

    	//If we have just won the game
    	if (hits >= 3)
    	{
    		//The game is no longer active
    		gameActive = false;
    		returnMessage = 'HIT. You have won the game!'
    	}
    }
    else
    {
    	//Set the location to be hit
    	grid[pointA][pointB].hit = true;
    }

    //The message we want to show the user
	return returnMessage;
}

//This function calls itself until the game has been won
var makeGuess = function()
{
	//Grab the points from the user
	var pointA = parseInt(readlineSync.question('Please enter the first point: '));
	var pointB = parseInt(readlineSync.question('Please enter the second point: '));

	//This prints the return message from the attemptAttack function
	console.log(attemptAttack(pointA, pointB));
	
	//If game is active
	if (gameActive)
	{
		//Print grid to screen then make another guess
		printGridConsole();
		makeGuess();
	}
	else
	{
		//If the player has won reset the game
		gameActive = true;
		hits = 0;
		console.log('Resetting game...');
		generateGrid();
		printGridConsole();
		makeGuess();
	}

}

generateGrid();
printGridConsole();

//Use this for debugging to see which coordinates are ships for testing
console.log(grid);

makeGuess();