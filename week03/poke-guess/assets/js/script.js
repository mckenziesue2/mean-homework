$(document).ready(function() {

	//Declare Pokemon object class, Pokemon object instances
	var Pokemon = function(name,image){
		name: this.name;
		image: "assets/img/" + this.image + ".png";
	};

	var score = 0;
	var incorrect = 0;

	var p1 = new Pokemon('bulbasaur','001');
	var p2 = new Pokemon('ivysaur','002');
	var p3 = new Pokemon('venusaur','003');
	var p4 = new Pokemon('charmander','004');
	var p5 = new Pokemon('charmeleon','005');
	var p6 = new Pokemon("charizard", "006");
	var p7 = new Pokemon("squirtle", "007");
	var p8 = new Pokemon("wartortle", "008");
	var p9 = new Pokemon("blastoise", "009");
	var p10 = new Pokemon("caterpie", "010");
	var p11 = new Pokemon("metapod", "011");
	var p12 = new Pokemon("butterfree", "012");
	var p13 = new Pokemon("weedle", "013");
	var p14 = new Pokemon("kakuna", "014");
	var p15 = new Pokemon("beedrill", "015");
	var p16 = new Pokemon("pidgey", "016");
	var p17 = new Pokemon("pidgeotto", "017");
	var p18 = new Pokemon("pidgeot", "018");
	var p19 = new Pokemon("rattata", "019");
	var p20 = new Pokemon("raticate", "020");

	//Initialize guess variables, arrays for unguessed (unguessed/guessed-wrong) and (guess-right) Pokemon
	var unguessedPokemon = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20];
	var guessedPokemon = [];


	//Declare variables and function for randomizing pokemon and accessing it
	var randomPokemon;
	
	var getRandomPokemon = function() {
		randomPokemonGenerator = parseInt(Math.floor(Math.random()*5));
		return unguessedPokemon[randomPokemonGenerator];
	}

	//Declare function to change images of guess pokemon and pokeballs
	function changeImage(currentImgID, newImg) {
		$(currentImgID).attr("src", newImg);
	}

	//Declare function to change pokemon
	function changePokemon() {
		randomPokemon = getRandomPokemon();
		changeImage("#pokemon-img", randomPokemon.image);
	}

	//Declare function to show images of sad pokemon
	function showSad() {
		$("#sad" + incorrect).show();
	}

	//Declare sounds
	var correctSound = new Audio("assets/audio/correct_guess.wav");
	var incorrectSound = new Audio("assets/audio/incorrect_guess.wav");
	var winGameSound = new Audio("assets/audio/win_music.wav");
	var gameOverSound = new Audio("assets/audio/game_over.wav");

	//Declare timer function and initialize it at 10 seconds
	var timerNum = 10;

	function setTimer() {
		var newNum;

		if (timer >= 10) {
			newNum = timerNum;
		} else {
			newNum = "0" + timerNum;
		}

		timerNum--;
			$("#timer").html(newNum);

		if (timerNum < 0) {
			incorrect += 1;
			showSad();
			incorrectSound.play();
			alert("Times up!");

			if (incorrect === 3) {
				gameOverSound.play();
				alert("GAME OVER");
				location.reload();
			}

			changePokemon();

			$("user-guess").val("");
			timerNum = 10;
		}
	}

	//Declare function to check guesses and return result
	function checkGuess() {
		var input = $("#user-guess").val();
		var guess = input.toLowerCase();

		if (guess === randomPokemon.name) { //guessed right
			score += 1;
			var guess = input.toLowerCase();

			if (score === 5) {
				winMusic.play();
				alert("You won!!");
				location.reload();
			} else {
				guessedPokemon.push(randomPokemon);
				unguessedPokemon.splice(randomPokemonGenerator, 1)
			}
		} else {
			incorrect += 1;
			showSad();
			incorrectSound.play();
			alert("Sorry! The correct answer is: " + (randomPokemonGenerator.name).toUpperCase());

			if (incorrect === 3) {
				gameOverSound.play();
				location.reload();
			}
		}

		changePokemon();
		$("#user-guess").val("");
		timerNum = 10;
	}

	//Intialize conditions for the page
	$('#sad1, #sad2, #sad3').hide();
	changePokemon();

	setInterval(function() {
		setTimer();
	}, 1000);

	$("#submit-guess").click(checkGuess);

});