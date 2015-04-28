var rows = 10;
var columns = 10;

var grid = function() {
	var grid = [];

	for (var x = 0; x < rows; x++) {
		grid.push([])
		for (var y = 0; y < columns; y++) {
			 grid[x][y] = x + ", " + y;
		}
	}
	return grid;
}

console.log(grid());