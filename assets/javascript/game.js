// On Page Load:
document.addEventListener("DOMContentLoaded", function(event) { 

// Variables generated randomly 
	// Number to get:   		
	// Creates random number for the user to guess
	var compRandomNumber = Math.floor((Math.random() * 101) + 19);
	console.log("NumberToGet " + "= " + compRandomNumber);
	// Appends randomNumber to page for user to see "Number to get"
	$('#compRandomNumber').text(compRandomNumber);

	// Random crystal value:
	// Generates random number for each crystal
	var num1 = Math.floor((Math.random() * 11) + 1);
	console.log("crystalOne " + "= " + num1)

	var num2 = Math.floor((Math.random() * 11) + 1);
	console.log("crystalTwo " + "= " + num2)

	var num3 = Math.floor((Math.random() * 11) + 1);
	console.log("crystalThree " + "= " + num3)

	var num4 = Math.floor((Math.random() * 11) + 1);
	console.log("crystalFour " + "= " + num4)

// Variables set dynamically
    // Declairing variables for tallies on page
	var wins = 0
	var losses = 0;
	var userTotal = 0;
    //Appends wins and losses and userTotal to page for user to see
	$('#wins').text(wins);
	$('#losses').text(losses);
	$('#yourScore').text(userTotal);
    
// Functions
    // Call reset function
    function reset(){
		compRandomNumber = Math.floor((Math.random() * 101) + 19);
		$('#compRandomNumber').text(compRandomNumber);
		num1 = Math.floor((Math.random() * 11) + 1);
		console.log("crystalOne " + "= " + num1)
		num2 = Math.floor((Math.random() * 11) + 1);
		console.log("crystalTwo " + "= " + num2)
		num3 = Math.floor((Math.random() * 11) + 1);
		console.log("crystalThree " + "= " + num3)
		num4 = Math.floor((Math.random() * 11) + 1);
		console.log("crystalFour " + "= " + num4)
		userTotal = 0;
		// $('#wins').text(wins);
	 	//$('#losses').text(losses);
		$('#yourScore').text(userTotal);
    }

    // Alert the user WIN and adds to the win counter on screen
    function yay (){
    	alert ("Woo Hoo! You win!");
    	wins++;
    	$('#wins').text(wins);
    	reset();
    }

    // Alert user they are a loser and add 1 to loss counter on screen
    function loser () {
    	alert ("You lose!!!")
    	losses++;
    	$('#losses').text(losses);
    	reset();
    }

	$('#num1').on('click', function (){
		userTotal = userTotal + num1;
		$('#yourScore').text(userTotal);
		console.log("Your new score " + "= " + userTotal);
			if (userTotal == compRandomNumber){
				yay();
			}
			else if (userTotal > compRandomNumber){
				loser();
			}
	})
	// Crystal two 
	$('#num2').on('click', function (){
		userTotal = userTotal + num2;
		$('#yourScore').text(userTotal);
		console.log("Your new score " + "= " + userTotal);
			if (userTotal == compRandomNumber){
				yay();
			}
			else if (userTotal > compRandomNumber){
				loser();
			}
	})
	// Crystal three
	$('#num3').on('click', function (){
		userTotal = userTotal + num3;
		$('#yourScore').text(userTotal);
		console.log("Your new score " + "= " + userTotal);
		if (userTotal == compRandomNumber){
			yay();
		}
		else if (userTotal > compRandomNumber){
			loser();
		}
	})
	// Crystal four
	$('#num4').on('click', function (){
		userTotal = userTotal + num4;
		$('#yourScore').text(userTotal);
		console.log("Your new score " + "= " + userTotal);
		if (userTotal == compRandomNumber){
			yay();
		}
		else if (userTotal > compRandomNumber){
			loser();
		}
	});
});
// On crystal click function
// 	Crystal one 
// 	$('.crystal').on('click', function (){
// 		var crystalClickedID = $(this).attr("id");
// 		userTotal = userTotal + arrayOfCrystals[crystalClickedID];
// 		$('#yourScore').text(userTotal);
// 		console.log("Your new score " + "= " + userTotal);
// 			if (userTotal == compRandomNumber){
// 				yay();
// 			}
// 			else if (userTotal > compRandomNumber){
// 				loser();
// 			}
// 	})


        // Figure out what crystal they clicked and store in a variable
        // Store crystal value in variable (crystalClickedValue)
        // Add crystalClickedValue to userTotalScore
        // Call update items on the page function
        // if they win (userTotalScore === computerRandomNumber)
            // Add 1 to wins
            // Call reset function
			// Call update items on the page function
        // if they lose (userTotalScore > computerRandomNumber)
			// Add 1 to losses
			// Call reset function
			// Call update items on the page function
    // Update items on the page (function):
        // Put wins on page
        // Put losses on page
        // Put computerRandomNumber on page
        // Put userTotalScore on page
	// Reset (function):
		// userTotalScore = 0
        // computerRandomNumber = new random number between 19 and 120
        // array of crystals values (new random numbers between 1 and 12)