var grid = [];
var rows = 10;
var columns = 10;



var iArray = [0,1,2,3,4,5,6,7,8,9];
var jArray = [0,1,2,3,4,5,6,7,8,9];
var line = [];

for (var i = 0; i < iArray.length; i++) {
	var linePrint = [];

	for (var j = 0; j < jArray.length; j++) {
		linePrint.push('[' + i +'],[' + j + ']');
	}
	line.push(linePrint);
	linePrint = [];
}

for (var i = 0; i < line.length; i++) {
	console.log(line[i]);
}

