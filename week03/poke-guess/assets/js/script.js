var Pokemon = function(name,image){
	name: this.name,
	image: this.image,
};

var score = 0;
var incorrect = 0;

var p1 = new Pokemon('bulbasaur','assets/img/001.png');
var p2 = new Pokemon('bulbasaur','assets/img/002.png');
var p3 = new Pokemon('bulbasaur','assets/img/003.png');
var p4 = new Pokemon('bulbasaur','assets/img/004.png');
var p5 = new Pokemon('bulbasaur','assets/img/005.png');

var pokemonArray = [p1, p2, p3, p4, p5];

var randomPokemon = function() {
	randomPokemonGenerator = parseInt(Math.floor(Math.random()*5));
	pokemonChoose = pokemonArray[randomPokemonGenerator];
}

randomPokemon();

var userAnswer = //-----SOMETHING-----).toLowerCase();

function checkUserAnswer() {

}

function gameWin() {

}

function gameLose() {
	
}