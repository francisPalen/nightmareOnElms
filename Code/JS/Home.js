const char1 = document.querySelector(" .char1");
const char2 = document.querySelector(" .char2");
const char3 = document.querySelector(" .char3");
const char4 = document.querySelector(" .char4");
const char = document.querySelector(" .char-placeholder img");
const user = document.getElementById('user');
const form = document.getElementById('form');
var charChosen = false;
var difficulty = "easy";
var character = undefined;
var attempts = 1;
var time = 0;

window.addEventListener('load', function () {
    localStorage.clear();
})

function bgmusic() {
    const audio = document.getElementById('bgmusic');
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

function fadeIn(element) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) { 
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 20);
}

function checkDifficulty() {
    if (document.getElementById('easy').checked) {
        difficulty = "easy"
    }
    if (document.getElementById('medium').checked) {
        difficulty = "medium"
    }
    if (document.getElementById('hard').checked) {
        difficulty = "hard"
    }
}

form.addEventListener('submit', (e) => {
    checkDifficulty()
    localStorage.setItem("Difficulty", difficulty)
    localStorage.setItem("User", user.value)
    localStorage.setItem("Character", character)
    localStorage.setItem("Attempts", attempts)
    if (charChosen === false) {
        alert("Please pick a character")
        e.preventDefault();
    }
})

char1.addEventListener('click', () => {
    fadeIn(char);
    char.src = '../Images/Home/char1.png';
    charChosen = "true";
    character = "../Images/Home/char1.png";
})

char2.addEventListener('click', () => {
    fadeIn(char);
    char.src = '../Images/Home/char2.png';
    charChosen = "true";
    character = "../Images/Home/char2.png";
})

char3.addEventListener('click', () => {
    fadeIn(char);
    char.src = '../Images/Home/char3.png';
    charChosen = "true";
    character = "../Images/Home/char3.png";
})

char4.addEventListener('click', () => {
    fadeIn(char);
    char.src = '../Images/Home/char4.png';
    charChosen = "true";
    character = "../Images/Home/char4.png";
})
