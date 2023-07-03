const level = document.getElementById("level");
var difficulty = localStorage.getItem("Difficulty");
var code = "";
var timer = 120;
var timeEvent;
var currentRoom = "hallway-1";
var user = localStorage.getItem('User');
var code1, code2, code3, code4, code5, code6, code7, code8, code9 = false;

window.addEventListener('load', function () {
    timeEvent = setInterval(countdown, 1000);
    level.style.opacity = '0';
});

function countdown() {
    if (timer >= 0) {
        document.getElementById('timer').innerHTML = timer;
        timer--;
    } else {
        clearInterval(timeEvent);
        document.getElementById('timer').innerHTML = 'end';
    }
    if (timer == 30) {
        document.getElementById("dialogue").innerHTML = "[" + user + "]: I can't see. What is.. goin on.";
    }
    if (timer == 60) {
        document.getElementById("dialogue").innerHTML = "[" + user + "]: Am I seeing things or is it getting darker. I feel a bit dizzy. Maybe I'm a just bit tired. I can't stop here, I can hear those things getting closer";
    }
    if (timer <= 0) {
        window.location.href = 'Fail.html'
    }
}

function textButtonLarge() {
    document.getElementById('dialogue').style.fontSize = '2vw';
}

function textButtonMedium() {
    document.getElementById('dialogue').style.fontSize = '1.5vw';
}

function textButtonSmall() {
    document.getElementById('dialogue').style.fontSize = '1.25vw';
}

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

function startingtext() {
    document.getElementById("dialogue").innerHTML = "[" + user + "]: I need to find a way to get out of here. Need to find an exit quickly. Wait a second, whats with all this blood on the floor!"
    return;
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

document.getElementById("hallwayend").addEventListener('click', () => {
    //final door
    var codefound = prompt("Please enter the code:");
    if (codefound == code) {
        var finaltime = 120 - timer;
        localStorage.setItem("Time4", finaltime)
        if (difficulty == "medium") {
            window.location.href = 'elmsendpage.html'
        } else {
            window.location.href = 'Level5.html'
        }
    } else {
        document.getElementById("dialogue").innerHTML = "[" + user + "]: Seems like the code didn't work"
    }
    return;
})

document.getElementById("finalpassage").addEventListener('click', () => {
    //finall passage indicating the end
    if (currentRoom == "finalpassage") {
        hallwayend();
        enableEnd();
        currentRoom = "hallwayend";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: I've made it. I think.. seems like I need to put in a code but I dont know what it is.. wait.. all those numbers from earlier maybe.. ah, what were they again?"
        return;
    }
})

document.getElementById("passage1").addEventListener('click', () => {
    //the left-most passage at regular hallways
    if (currentRoom == "hallway-1") {
        rooms1();
        enableRooms();
        currentRoom = "rooms1";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: What is this. Looks like the number 1. Wait a second... it's painted with.. with blood."
        if (!code1) {
            code += '1';
            code1 = true;
        }
        return;
    }
    if (currentRoom == "hallway-2") {
        hallwayreverse();
        enableReverseHallway();
        currentRoom = "hallwayreverse-3";
        return;
    }
    if (currentRoom == "hallway-3") {
        roomsreverse();
        enableRooms();
        currentRoom = "roomsreverse-1";
        return;
    }
    if (currentRoom == "hallway7") {
        rooms6();
        enableRooms();
        currentRoom = "rooms6";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: It's the number six this time. I wonder who wrote these."
        if (!code6) {
            code += '6';
            code6 = true;
        }
        return;
    }
    if (currentRoom == "hallway-4") {
        finalpassage();
        enableFinal();
        currentRoom = "finalpassage";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: I feel like I've been everywhere already. I hope this is it. My last hope."
        return;
    }
})

document.getElementById("passage2").addEventListener('click', () => {
    //the middle passage in regular hallways
    if (currentRoom == "hallway-1") {
        hallway2();
        enableReverseHallway();
        currentRoom = "hallway2";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: What is this. Looks like the number 2. Wait a second... it's painted with.. with blood."
        if (!code2) {
            code += '2';
            code2 = true;
        }
        return;
    }
    if (currentRoom == "hallway7") {
        hallwayreverse();
        enableReverseHallway();
        currentRoom = "hallwayreverse-2";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: More blood trails..."
        return;
    }
    if (currentRoom == "hallwayreverse-1") {
        rooms();
        enableRooms();
        currentRoom = "rooms-2";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: I can't get into any of these rooms. Everything is locked..."
        return;
    }
    if (currentRoom == "hallwayreverse-2") {
        hallway();
        enableHallway();
        currentRoom = "hallway-2";
        return;
    }
    if (currentRoom == "hallway-2") {
        rooms();
        enableRooms();
        currentRoom = "rooms-3";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: It seems like a dead end here, I need to find another way."
        return;
    }
    if (currentRoom == "hallwayreverse-3") {
        rooms();
        enableRooms();
        currentRoom = "rooms-4";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: It seems like a dead end here, I need to find another way."
        return;
    }
    if (currentRoom == "hallway-3") {
        hallway3();
        enableHallway();
        currentRoom = "hallway3";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: Another one of these numbers! But It seems like a dead end here, I need to find another way."
        if (!code3) {
            code += '3';
            code3 = true;
        }
        return;
    }
    if (currentRoom == "hallwayreverse-4") {
        rooms9();
        enableRooms();
        currentRoom = "rooms9";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: WHY... WHAT ARE THESE NUMBERS!.. I... I.. need to keep going."
        if (!code9) {
            code += '9';
            code9 = true;
        }
        return;
    }
    if (currentRoom == "hallway-4") {
        rooms5();
        enableRooms();
        currentRoom = "rooms5";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: Another.. one. I feel like I'm close to the exit but why do I feel so tired?"
        if (!code5) {
            code += '5';
            code5 = true;
        }
        return;
    }
})

document.getElementById("passage3").addEventListener('click', () => {
    //the right-most passage at reversed hallways
    if (currentRoom == "hallwayreverse-1") {
        hallway7();
        enableHallway();
        currentRoom = "hallway7";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: Oh no. Another number wha- wait. What's going on... I.. I need to get out of this place."
        if (!code7) {
            code += '7';
            code7 = true;
        }
        return;
    }
    if (currentRoom == "hallwayreverse-3") {
        hallway();
        enableHallway();
        currentRoom = "hallway-3";
        return;
    }
    if (currentRoom == "hallwayreverse-4") {
        hallway();
        enableHallway();
        currentRoom = "hallway-4";
        return;
    }
    if (currentRoom == "hallway2") {
        roomsreverse();
        enableRooms();
        currentRoom = "roomsreverse-2";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: It seems like a dead end here, I need to find another way."
        return;
    }
    if (currentRoom == "hallwayreverse-2") {
        rooms8();
        enableRooms();
        currentRoom = "rooms8";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: Another number what does this mean? It seems like a dead end here, I need to find another way."
        if (!code8) {
            code += '8';
            code8 = true;
        }
        return;
    }
})

document.getElementById("roompassage").addEventListener('click', () => {
    //the only forward passage at all rooms
    if (currentRoom == "rooms1") {
        hallwayreverse();
        enableReverseHallway();
        currentRoom = "hallwayreverse-1";
        return;
    }
    if (currentRoom == "roomsreverse-1") {
        rooms();
        enableRooms();
        currentRoom = "rooms-1";
        return;
    }
    if (currentRoom == "rooms-1") {
        hallwayreverse();
        enableReverseHallway();
        currentRoom = "hallwayreverse-4";
        return;
    }
    if (currentRoom == "rooms-2") {
        rooms4();
        enableRooms();
        currentRoom = "rooms4";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: Oh no wait, another number! But It seems like a dead end here, I need to find another way."
        if (!code4) {
            code += '4';
            code4 = true;
        }
        return;
    }
    if (currentRoom == "rooms6") {
        hallway();
        enableHallway();
        currentRoom = "hallway-5";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: It seems like a dead end here, I need to find another way."
        return;
    }
    if (currentRoom == "rooms5") {
        rooms();
        enableRooms();
        currentRoom = "rooms-5";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: I felt like I was.. was close but, it ends here.. so tired.."
        return;
    }
})

document.getElementById("return1").addEventListener('click', () => {
    //the return button at all rooms 
    if (currentRoom == "hallway2") {
        hallway();
        enableHallway();
        currentRoom = "hallway-1";
        document.getElementById("return1").style.visibility = "hidden";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: Looks like I'm back here again."
        return;
    }
    if (currentRoom == "roomsreverse-2") {
        hallway2();
        enableReverseHallway();
        currentRoom = "hallway2";
        return;
    }
    if (currentRoom == "rooms1") {
        hallway();
        enableHallway();
        currentRoom = "hallway-1";
        document.getElementById("return1").style.visibility = "hidden";
        document.getElementById("dialogue").innerHTML = "[" + user + "]: Looks like I'm back here again. Can't go back any further or I'm dead."
        return;
    }
    if (currentRoom == "hallwayreverse-1") {
        rooms1();
        enableRooms();
        currentRoom = "rooms1";
        return;
    }
    if (currentRoom == "rooms-2") {
        hallwayreverse();
        enableReverseHallway();
        currentRoom = "hallwayreverse-1"
        return;
    }
    if (currentRoom == "rooms4") {
        rooms();
        enableRooms();
        currentRoom = "rooms-2";
        return;
    }
    if (currentRoom == "hallway7") {
        hallwayreverse();
        enableReverseHallway();
        currentRoom = "hallwayreverse-1"
        return;
    }
    if (currentRoom == "rooms6") {
        hallway7();
        enableHallway();
        currentRoom = "hallway7";
        return;
    }
    if (currentRoom == "hallway-5") {
        rooms6();
        enableRooms();
        currentRoom = "rooms6";
        return;
    }
    if (currentRoom == "hallwayreverse-2") {
        hallway7();
        enableHallway();
        currentRoom = "hallway7";
        return;
    }
    if (currentRoom == "rooms8") {
        hallwayreverse();
        enableReverseHallway();
        currentRoom = "hallwayreverse-2";
        return;
    }
    if (currentRoom == "hallway-2") {
        hallwayreverse();
        enableReverseHallway();
        currentRoom = "hallwayreverse-2";
        return;
    }
    if (currentRoom == "rooms-3") {
        hallway();
        enableHallway();
        currentRoom = "hallway-2";
        return;
    }
    if (currentRoom == "hallwayreverse-3") {
        hallway();
        enableHallway();
        currentRoom = "hallway-2";
        return;
    }
    if (currentRoom == "rooms-4") {
        hallwayreverse();
        enableReverseHallway();
        currentRoom = "hallwayreverse-3";
        return;
    }
    if (currentRoom == "hallway-3") {
        hallwayreverse();
        enableReverseHallway();
        currentRoom = "hallwayreverse-3";
        return;
    }
    if (currentRoom == "hallway3") {
        hallway();
        enableHallway();
        currentRoom = "hallway-3";
        return;
    }
    if (currentRoom == "roomsreverse-1") {
        hallway();
        enableHallway();
        currentRoom = "hallway-3";
        return;
    }
    if (currentRoom == "rooms-1") {
        roomsreverse();
        enableRooms();
        currentRoom = "roomsreverse-1";
        return;
    }
    if (currentRoom == "hallwayreverse-4") {
        rooms();
        enableRooms();
        currentRoom = "rooms-1";
        return;
    }
    if (currentRoom == "rooms9") {
        hallwayreverse();
        enableReverseHallway();
        currentRoom = "hallwayreverse-4";
        return;
    }
    if (currentRoom == "hallway-4") {
        hallwayreverse();
        enableReverseHallway();
        currentRoom = "hallwayreverse-4";
        return;
    }
    if (currentRoom == "rooms5") {
        hallway();
        enableHallway();
        currentRoom = "hallway-4";
        return;
    }
    if (currentRoom == "rooms-5") {
        rooms5();
        enableRooms();
        currentRoom = "rooms5";
        return;
    }
    if (currentRoom == "finalpassage") {
        hallway();
        enableHallway();
        currentRoom = "hallway-4";
        return;
    }
    if (currentRoom == "hallwayend") {
        finalpassage();
        enableFinal();
        currentRoom = "finalpassage";
        return;
    }
})

function enableHallway() {
    document.getElementById("finalpassage").style.visibility = "hidden";
    document.getElementById("hallwayend").style.visibility = "hidden";
    document.getElementById("passage3").style.visibility = "hidden";
    document.getElementById("roompassage").style.visibility = "hidden";

    document.getElementById("return1").style.visibility = "visible";
    document.getElementById("passage1").style.visibility = "visible";
    document.getElementById("passage2").style.visibility = "visible";
}

function enableReverseHallway() {
    document.getElementById("hallwayend").style.visibility = "hidden";
    document.getElementById("passage1").style.visibility = "hidden";
    document.getElementById("roompassage").style.visibility = "hidden";
    document.getElementById("finalpassage").style.visiblilty = "hidden";

    document.getElementById("passage2").style.visibility = "visible";
    document.getElementById("passage3").style.visibility = "visible";
    document.getElementById("return1").style.visibility = "visible";
}

function enableRooms() {
    document.getElementById("finalpassage").style.visiblilty = "hidden";
    document.getElementById("hallwayend").style.visibility = "hidden";
    document.getElementById("passage1").style.visibility = "hidden";
    document.getElementById("passage2").style.visibility = "hidden";
    document.getElementById("passage3").style.visibility = "hidden";

    document.getElementById("return1").style.visibility = "visible";
    document.getElementById("roompassage").style.visibility = "visible";
}

function enableFinal() {
    document.getElementById("hallwayend").style.visibility = "hidden";
    document.getElementById("passage1").style.visibility = "hidden";
    document.getElementById("passage2").style.visibility = "hidden";
    document.getElementById("passage3").style.visibility = "hidden";

    document.getElementById("return1").style.visibility = "visible";
    document.getElementById("finalpassage").style.visibility = "visible";
}

function enableEnd() {
    document.getElementById("finalpassage").style.visiblilty = "hidden";
    document.getElementById("passage1").style.visibility = "hidden";
    document.getElementById("passage2").style.visibility = "hidden";
    document.getElementById("passage3").style.visibility = "hidden";

    document.getElementById("return1").style.visibility = "visible";
    document.getElementById("hallwayend").style.visibility = "visible";
}

function rooms() {
    level.style.backgroundImage = "url('../Images/Level4/rooms.jpg')";
}

function roomsreverse() {
    level.style.backgroundImage = "url('../Images/Level4/roomsreverse.jpg')";
}

function rooms1() {
    level.style.backgroundImage = "url('../Images/Level4/rooms1.jpg')";
}

function rooms4() {
    level.style.backgroundImage = "url('../Images/Level4/rooms4.jpg')";
}

function rooms5() {
    level.style.backgroundImage = "url('../Images/Level4/rooms5.jpg')";
}

function rooms6() {
    level.style.backgroundImage = "url('../Images/Level4/rooms6.jpg')";
}

function rooms8() {
    level.style.backgroundImage = "url('../Images/Level4/rooms8.jpg')";
}

function rooms9() {
    level.style.backgroundImage = "url('../Images/Level4/rooms9.jpg')";
}

function hallway() {
    level.style.backgroundImage = "url('../Images/Level4/hallway.jpg')";
}

function hallwayreverse() {
    level.style.backgroundImage = "url('../Images/Level4/hallwayreverse.jpg')";
}

function hallway2() {
    level.style.backgroundImage = "url('../Images/Level4/hallway2.jpg')";
}

function hallway3() {
    level.style.backgroundImage = "url('../Images/Level4/hallway3.jpg')";
}

function hallway7() {
    level.style.backgroundImage = "url('../Images/Level4/hallway7.jpg')";
}

function finalpassage() {
    level.style.backgroundImage = "url('../Images/Level4/finalpassage.jpg')";
}

function hallwayend() {
    level.style.backgroundImage = "url('../Images/Level4/hallwayend.jpg')";
}
