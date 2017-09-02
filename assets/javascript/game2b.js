 var wordDisplay = ["_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ "];
 var numberOfGuesses = 0;
 var alreadyGuessed = [];
 var howManyE = 0;
 var howManyS = 0;
 var wins = 1;

 document.onkeyup = function(event) {
     var guess = event.key; {}
     // False Guesses
     if (guess != "g" && guess != "e" && guess != "n" && guess != "s" && guess != "i") {
         console.log("alreadyGuessed test");
         alreadyGuessed.push(guess);
         numberOfGuesses++;
     }
     // True Guesses
     if (guess === "g") {
         wordDisplay[0] = "g ";
     }
     if (guess === "n") {
         wordDisplay[2] = "n ";
     }
     if (guess === "i") {
         wordDisplay[5] = "i ";
     }
     if (guess === "e" && howManyE === 1) {
         console.log("e test 1");
         wordDisplay[3] = "e ";
     }
     if (guess === "e" && howManyE === 0) {
         howManyE++;
         console.log("e test 2");
         wordDisplay[1] = "e ";
     }
     if (guess === "s" && howManyS === 1) {
         console.log("s test 1");
         wordDisplay[6] = "s ";
     }
     if (guess === "s" && howManyS === 0) {
         howManyS++;
         console.log("s test 2");
         wordDisplay[4] = "s ";
     }
     if (wordDisplay[0] === "g " && wordDisplay[1] === "e " && wordDisplay[2] === "n " && wordDisplay[3] === "e " && wordDisplay[4] === "s " && wordDisplay[5] === "i " && wordDisplay[6] === "s ") {
         console.log("wins plus one test");
         ++wins;
     }
     //Ending Results
     console.log("end game test");
     if (numberOfGuesses > 8 || wins > 2) {
         return false;
     }
     //Stick Figure Changes
     document.getElementById("imgContainer").style.backgroundImage = "url('assets/images/hang-drawing-" + numberOfGuesses + ".png')";

     document.querySelector("#winsDisplay").innerHTML = wins;
     //Updated HTML Output
     var html = '<p>Current Word: ' + '</p>' +
         '<p class="allCaps">' + wordDisplay.join("") + '</p>' +
         '<br>' +
         '<p>Letters already guessed:' + '</p>' +
         '<p class="allCaps">' + alreadyGuessed.join(" ") + '</p>';
     document.querySelector("#hangGame").innerHTML = html;
 };