 var difficulty = localStorage.getItem("Difficulty");
 var char = localStorage.getItem("Character");
 var time1 = localStorage.getItem("Time1");
 var time2 = localStorage.getItem("Time2");
 var time3 = localStorage.getItem("Time3");
 var time4 = localStorage.getItem("Time4");
 var time5 = localStorage.getItem("Time5");
 var user = localStorage.getItem("User");
 var secret = localStorage.getItem("Secret");

 function loadDetails() {
     document.getElementById("user").innerHTML = "Player: " + user;

     if (difficulty == "easy") {
         const x = +time1 + +time2;
         document.getElementById("difficulty").innerHTML = "Difficulty: Easy";
         document.getElementById("time").innerHTML = "You completed the game in: " + x + " seconds";
         return;
     }
     if (difficulty == "medium") {
         const x = +time1 + +time2 + +time3 + +time4;
         document.getElementById("difficulty").innerHTML = "Difficulty: Medium";
         document.getElementById("time").innerHTML = "You completed the game in: " + x + " seconds";
         return;
     }
     if (difficulty == "hard") {
         const x = +time1 + +time2 + +time3 + +time4 + +time5;
         document.getElementById("difficulty").innerHTML = "Difficulty: Hard";
         document.getElementById("time").innerHTML = "You completed the game in: " + x + " seconds";
         return;
     }
 }

 function secretLoad() {
     if (secret == "true") {
         document.getElementById("secret1").innerHTML = "Congratulations Andrew, you've found the secret ending and went back to bed. Who cares about zombies anyways."
         document.getElementById("user").innerHTML = "";
         document.getElementById("difficulty").innerHTML = "";
         document.getElementById("time").innerHTML = "";
     }
 }

 function charLoad() {
     if (char == '../Images/Home/char1.png') {
         document.getElementById("char").style.backgroundImage = 'url("../Images/elmsendpage/char1.png")';
     }
     if (char == '../Images/Home/char2.png') {
         document.getElementById("char").style.backgroundImage = 'url("../Images/elmsendpage/char2.png")';
     }
     if (char == '../Images/Home/char3.png') {
         document.getElementById("char").style.backgroundImage = 'url("../Images/elmsendpage/char3.png")';
     }
     if (char == '../Images/Home/char4.png') {
         document.getElementById("char").style.backgroundImage = 'url("../Images/elmsendpage/char4.png")';
     }
 }
