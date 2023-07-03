const level = document.getElementById("level");
var timer = 30;
var timeEvent;
var lampZoom = false;
var laptopZoom = false;
var bookShelfZoom = false;
var keyClicked = false;
var user = localStorage.getItem("User");

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
    if (timer == 0) {
        window.location.href = 'Fail.html'
    }
}

function backgroundMusic() {
    const audio = document.getElementById('backgroundmusic');
    audio.volume = 0.1;
    audio.play();
}

function clicksound() {
    const audio = document.getElementById('clicksound')
    audio.volume = 0.1;
    audio.play();
}

function checkItem(item) {
    console.log("in the checkObject function");
    document.getElementById('button_response').innerHTML = "Click objects to check beside";

    //lift the item

    //                    if (is_key_found){
    //                        document.write('Go to next level');
    //                        }else{
    //                            document.write ('key is not there, look again')               
    //                        }
    //                     }

    //check if key is there
    //if it is ->next level?
    // if not -> print

    //    document.getElementById('is_key_found').innerHTML = "key not found try again ";

    //next prompt
    nextPrompt('lamp');
}

document.getElementById("secret").addEventListener('click', () => {
    window.location.href = 'elmsendpage.html'
    localStorage.setItem("Secret", "true")
})

function nextPrompt(nextItem) {
    console.log("in the nextPrompt function");
    document.getElementById('prompt').innerHTML = "[" + user + "] Shall I check beside a different object?";
}

document.getElementById("btnZoomLaptop").addEventListener('click', function () {
    level.style.backgroundImage = "url('../Images/Level1/laptopzoom.jpg')";
})

document.getElementById("btnZoomLamp").addEventListener('click', function () {
    level.style.backgroundImage = "url('../Images/Level1/lampzoom.jpg')";
})

document.getElementById("btnZoomBookshelf").addEventListener('click', function () {
    level.style.backgroundImage = "url('../Images/Level1/bookshelfzoom.jpg')";
    document.getElementById("btnKey").style.display = "block";
})

document.getElementById("btnBack").addEventListener('click', function () {
    level.style.backgroundImage = "url('../Images/Level1/elmsbedroom.jpg')";
})

document.getElementById("btnKey").addEventListener('click', function () {
    level.style.backgroundImage = "url('../Images/Level1/bedroomdoor.jpg')";

    document.getElementById("btnZoomLaptop").remove();
    document.getElementById("btnZoomLamp").remove();
    document.getElementById("btnZoomBookshelf").remove();
    document.getElementById("btnBack").remove();
    document.getElementById("btnKey").remove();

    document.getElementById("btnEscape").style.display = "block";
})

document.getElementById("btnEscape").addEventListener('click', function () {
    var finaltime = 30 - timer;
    localStorage.setItem("Time1", finaltime)
    window.location.href = 'Level2.html'
})

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

document.getElementById("btnZoomLaptop").addEventListener('click', () => {
    document.getElementById('dialogue').innerHTML = "Seems like there's nothing here, maybe I should check somewhere else.";
})

document.getElementById("btnZoomLamp").addEventListener('click', () => {
    document.getElementById('dialogue').innerHTML = "Nothing here, just this lamp.";
})

document.getElementById("btnZoomBookshelf").addEventListener('click', () => {
    document.getElementById('dialogue').innerHTML = "Oh looks like there's a key here. Maybe I can use this to escape.";
})

document.getElementById("btnKey").addEventListener('click', () => {
    document.getElementById('dialogue').innerHTML = "A perfect match. Time to get out of here.";
})
