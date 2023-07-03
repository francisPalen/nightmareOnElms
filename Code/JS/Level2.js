  var timer = 30;
  var difficulty = localStorage.getItem("Difficulty");
  var timeEvent;
  var completedTime;
  var enableMaintenance = false;
  var userName = localStorage.getItem('User');

  function allowDrop(ev) {
      ev.preventDefault();
  }

  function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
      inner();
  }

  checkMaintenanceRequest = (e) => {
      const keyPhrase = document.getElementById("keyPhraseEntry").value;
      console.log(keyPhrase);

      if (keyPhrase == "Dream Big Work") {
          outer();
      } else {
          document.getElementById("invalidInfoLabel").style.visibility = "visible";
      }
  }

  window.addEventListener('load', function () {
      timeEvent = setInterval(countdown, 1000);
  });

  function countdown() {
      if (timer >= 0) {
          document.getElementById('timer').innerHTML = timer;
          timer--;
      } else {
          clearInterval(timeEvent);
          document.getElementById('timer').innerHTML = 'end';
      }
      if (timer <= 0) {
          window.location.href = 'Fail.html'
      }
  }

  function openingText() {
      var unformattedText = "[" + userName + "]: Damn, I cant see a thing! The lights must be broken..."
      var openingText = document.createTextNode(unformattedText);
      span = document.getElementById("dialogueSpan");
      span.appendChild(openingText);
      fullOpacity();
  }

  function maintenanceForm() {
      if (enableMaintenance == true) {
          document.getElementById("maintenanceRequest").style.visibility = "visible";
          document.getElementById("inventorybox2").style.backgroundImage = 'none';
          var secondText = "WRITING ON THE WALL MAINTENANCE SERVICES:";
          span = document.getElementById("dialogueSpan");
          span.textContent = secondText;
      }
  }

  function lowOpacity() {
      document.getElementById("levelInnerBorder").style.opacity = "85%";
      setTimeout(fullOpacity, 200);
  }

  function fullOpacity() {
      document.getElementById("levelInnerBorder").style.opacity = "100%";
      setTimeout(lowOpacity, 1000);
  }

  function lowOpacityOuter() {
      document.getElementById("levelOuterBorder").style.opacity = "85%";
      setTimeout(fullOpacityOuter, 200);
  }

  function fullOpacityOuter() {
      document.getElementById("levelOuterBorder").style.opacity = "100%";
      setTimeout(lowOpacityOuter, 1000);
  }

  function inner() {
      document.getElementById("levelInnerBorder").style.visibility = "hidden";
      enableMaintenance = true;
      var unformattedText = "[" + userName + "]: I'm all out of bulbs. Im sure the repair team would have some."
      var secondText = unformattedText;
      span = document.getElementById("dialogueSpan");
      span.textContent = secondText;

      play();
  }

  let play = function () {
      document.getElementById("audio").play();
      fullOpacityOuter();
  }

  function outer() {
      document.getElementById("levelOuterBorder").style.visibility = "hidden";
      document.getElementById("greenButton").style.visibility = "visible";
      document.getElementById("maintenanceRequest").style.visibility = "hidden";
      document.getElementById("invalidInfoLabel").style.visibility = "hidden";
      var finalText = "[" + userName + "]: Ah, thats much better now!";
      span = document.getElementById("dialogueSpan");
      span.textContent = finalText;
      play();
      var sound = document.getElementById("creepyLights");
      sound.src = "";
  }

  function greenButton() {
      var finaltime = 30 - timer;
      localStorage.setItem('Time2', finaltime)
      if (difficulty == "easy") {
          window.location.href = 'elmsendpage.html'
          return;
      } else {
          window.location.href = 'Level3.html'
          return;
      }
  }

  function inventoryBox1() {
      var box1 = document.getElementById("inventorybox1");
      box1.style.backgroundImage = "none";
      var lightBulb = document.getElementById("lightBulb");
      lightBulb.style.visibility = "visible";
  }

  function textButtonLarge() {
      document.getElementById('dialogueSpan').style.fontSize = 'larger';
      document.getElementById('navbar').style.fontSize = '150%';
  }

  function textButtonSmall() {
      document.getElementById('dialogueSpan').style.fontSize = 'smaller';
      document.getElementById('navbar').style.fontSize = '110%';
  }

  function textButtonMedium() {
      document.getElementById('dialogueSpan').style.fontSize = '2vw';
      document.getElementById('navbar').style.fontSize = '130%';
  }
