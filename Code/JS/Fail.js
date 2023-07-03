var timer = 5;
var timeEvent;
var timer2 = 120;
var timeEvent2;
var txt;
var speed = 50;
var i = 0;

function laughsound() {
    const audio = document.getElementById('laughsound');
    audio.volume = 0.01;
    audio.play();
}

document.getElementById("continue").addEventListener('click', () => {
    document.getElementById("continue").style.opacity = '0';
    timeEvent = setInterval(countdown, 1000);
    timeEvent2 = setInterval(countdown2, 1000);
    countdown();
    countdown2();
})

function countdown() {
    if (timer >= 0) {
        timer--;
    } else {
        clearInterval(timeEvent);
    }
    if (timer == 0) {
        document.getElementById("continue").disabled = true;
        document.getElementById("continue").style.visibility = "hidden";
        return;
    }
}

function countdown2() {
    if (timer2 > 0) {
        timer2--;
    }
    if (timer2 == 0) {
        timer2 = 120;
    }
    if (timer2 == 110) {
        document.getElementById("dialogue").innerHTML = "";
        txt = "What? Are you upset that you lost?"
        typeWriter();
    }
    if (timer2 == 90) {
        document.getElementById("dialogue").innerHTML = "";
        txt = "It's time for you to leave. Press one of those two shiny buttons."

        typeWriter();
    }
    if (timer2 == 70) {
        document.getElementById("dialogue").innerHTML = "";
        txt = "Frustrated that you failed? Maybe do better next time."
        typeWriter();
    }
    if (timer2 == 40) {
        document.getElementById("dialogue").innerHTML = "";
        txt = "Who am I you ask? Mind your own business."
        typeWriter();
    }
    if (timer2 == 20) {
        document.getElementById("dialogue").innerHTML = "";
        txt = "If I had a pound for every second you've stayed on this page so far.. I would have 100 pounds."
        typeWriter();
    }
    if (timer2 == 10) {
        document.getElementById("dialogue").innerHTML = "";
        txt = "If you stay for any longer I'll start repeating myself again."
        typeWriter();
    }
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("dialogue").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        i = 0;
    }
}
