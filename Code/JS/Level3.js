var timer = 30;
var timeEvent;
var obtained = "false";

window.addEventListener('load', function () {
    timeEvent = setInterval(countdown, 1000);
});

function checkCode() {
    var codeInput = prompt("Enter the code of the vault: ")
    console.log(codeInput);
    if (codeInput == "9710") {
        document.getElementById("image3").style.display = 'none';
    }
}

document.getElementById("image2").addEventListener("click", () => {
    var finaltime = 30 - timer;
    localStorage.setItem("Time3", finaltime)
    window.location.href = 'Level4.html'
})

document.getElementById("image4").addEventListener("click", () => {
    obtained = "true";
})

document.getElementById("image7").addEventListener("click", () => {
    if (obtained == "true") {
        document.getElementById("image8").style.display = 'block';
    }
})

function countdown() {
    if (timer >= 0) {
        document.getElementById('timer').innerHTML = timer;
        timer--;
    } else {
        clearInterval(timeEvent);
        document.getElementById('timer').innerHTML = 0;
    }
    if (timer <= 0) {
        window.location.href = 'Fail.html'
    }
}

function bgmusic() {
    const audio = document.getElementById('bgmusic')
    audio.volume = 0.1;
    audio.play();
}

function clicksound() {
    const audio = document.getElementById('clicksound')
    audio.volume = 0.1;
    audio.play();
}

function mutePage() {
    const audio = document.getElementById('bgmusic');
    if (audio.muted == false) {
        audio.muted = true;
        document.getElementById('mutebtn').innerHTML = 'unmute';
    } else {
        audio.muted = false;
        document.getElementById('mutebtn').innerHTML = 'mute';
    }
}

function textButtonLarge() {
    document.getElementById('dialogue').style.fontSize = '150%';
    document.getElementById('navbar').style.fontSize = '150%';
}

function textButtonSmall() {
    document.getElementById('dialogue').style.fontSize = '110%';
    document.getElementById('navbar').style.fontSize = '110%';
}

function textButtonMedium() {
    document.getElementById('dialogue').style.fontSize = '130%';
    document.getElementById('navbar').style.fontSize = '130%';
}
