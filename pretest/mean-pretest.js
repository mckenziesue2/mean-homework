var firstName = "McKenzie";
var lastName = "Rucker";

console.log(lastName + ", " + firstName);

for (i=0; i < 16; i++) {
	if (i % 2 === 0) {
		console.log(i + "*");
	} else {
		console.log(i);
	}
}

function Person(name, age, height, hometown) {
	this.name = name;
	this.age = age;
	this.height = height;
	this.hometown = hometown;
}

var susan = new Person("Susan", 28, "5' 11", "Chicago, Illinois");