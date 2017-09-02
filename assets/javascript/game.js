 var wordDisplay = ["_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ "];
 var numberOfGuesses = 0;
 var alreadyGuessed = [];
 var howManyN = 0;
 var howManyA = 0;
 var wins = 0;

 document.onkeyup = function(event) {
     var guess = event.key; {}
     // False Guesses
     if (guess != "m" && guess != "a" && guess != "d" && guess != "o" && guess != "n") {
         console.log("alreadyGuessed test");
         alreadyGuessed.push(guess);
         numberOfGuesses++;
     }
     // True Guesses
     if (guess === "m") {
         wordDisplay[0] = "m ";
     }
     if (guess === "d") {
         wordDisplay[2] = "d ";
     }
     if (guess === "o") {
         wordDisplay[3] = "o ";
     }
     if (guess === "n" && howManyN === 1) {
         console.log("n test 1");
         wordDisplay[5] = "n ";
     }
     if (guess === "n" && howManyN === 0) {
         howManyN++;
         console.log("n test 2");
         wordDisplay[4] = "n ";
     }
     if (guess === "a" && howManyA === 1) {
         console.log("a test 1");
         wordDisplay[6] = "a ";
     }
     if (guess === "a" && howManyA === 0) {
         howManyA++;
         console.log("a test 2");
         wordDisplay[1] = "a ";
     }
     if (wordDisplay[0] === "m " && wordDisplay[1] === "a " && wordDisplay[2] === "d " && wordDisplay[3] === "o " && wordDisplay[4] === "n " && wordDisplay[5] === "n " && wordDisplay[6] === "a ") {
         console.log("wins plus one test");
         ++wins;
     }
     //Ending Results
     if (numberOfGuesses > 8) {
         console.log("end game test");

         setTimeout(function() {
             window.location.href = "game2a.html";
         }, 2000);
         return;
     }
     if (wins === 1) {
         window.location.href = "game2b.html";
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