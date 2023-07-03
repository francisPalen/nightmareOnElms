var timer = 60;
var timeEvent;

var user = localStorage.getItem('User');

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

function audioplay() {
    var audio = new Audio('../Sound/Level4/menu.mp3');
    audio.play();
}


function textButtonLarge() {
    document.getElementById('dialogue').style.fontSize = '3vw';
    document.getElementById('navbar').style.fontSize = '150%';
}

function textButtonSmall() {
    document.getElementById('dialogue').style.fontSize = '1.5vw';
    document.getElementById('navbar').style.fontSize = '110%';
}

function textButtonMedium() {
    document.getElementById('dialogue').style.fontSize = '2vw';
    document.getElementById('navbar').style.fontSize = '130%';
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

var keysgrabbed = false;
var CarDoorOpen = false;
const level = document.getElementById("level");
const inventory1 = document.getElementById("inventorybox1");
var Location = "outside";
var screwdrivertaken = false;
var hotwired = false;
var wireselected = "";
var HWStage = 0;

function DoorSelectFunction() {
    if (CarDoorOpen == false) {
        if (keysgrabbed == true) {

            document.getElementById("dialogue").innerText = "[" + user + "]:The car door opened!";
            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dehp54x-7055ddc6-5d11-4cc1-a871-0061e048d0fb.jpg/v1/fill/w_1095,h_730,q_70,strp/untitled_by_vilaeri_dehp54x-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaHA1NHgtNzA1NWRkYzYtNWQxMS00Y2MxLWE4NzEtMDA2MWUwNDhkMGZiLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pRHyYzJY6NmL2QLlZwnny8koLIAJSACg9jzGTUvYOd0')";
            CarDoorOpen = true;
            Location = "inside";
        } else {
            document.getElementById("dialogue").innerText = "[" + user + "]:Hmmm.. The door's locked. I need to find a way to open it.";
        }
    } else {
        document.getElementById("dialogue").innerText = "[" + user + "]:Ok. Im in.";
        level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dehp54r-c3701395-c146-4ec3-9b22-47922b3eb0db.jpg/v1/fill/w_1095,h_730,q_70,strp/untitled_by_vilaeri_dehp54r-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaHA1NHItYzM3MDEzOTUtYzE0Ni00ZWMzLTliMjItNDc5MjJiM2ViMGRiLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fYnXgc1oLtbXCKhtWmxPih6efWWwPKZiJjzgd4U_fZ8')";
        document.getElementById("btnCarDoor").remove();
        document.getElementById("btnZoomTire").remove();
        document.getElementById("btnKeys").remove();
        document.getElementById("btnPassengerseat").style.display = "block";
        document.getElementById("btnSteeringWheel").style.display = "block";
        document.getElementById("btnBackSeat").style.display = "block";
    }

}


function ZoomTireFunction() {

    level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dehp55r-0abdc895-7c33-4e44-a579-489fb80f9510.jpg/v1/fill/w_1095,h_730,q_70,strp/untitled_by_vilaeri_dehp55r-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaHA1NXItMGFiZGM4OTUtN2MzMy00ZTQ0LWE1NzktNDg5ZmI4MGY5NTEwLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2aArN6aihrrdIPbNxyqAjjhTXnZpPXKhgVs--roJD00')";
    document.getElementById("btnZoomTire").style.visibility = "hidden";
    document.getElementById("btnCarDoor").style.visibility = "hidden";
    document.getElementById("btnBack").style.visibility = "visible";
    document.getElementById("btnKeys").style.visibility = "visible";

}

function BackFunction() {
    if (Location == "outside") {
        if (keysgrabbed == true) {
            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dehp555-43bc57e3-9ae1-4b7a-b47a-03f771919d7a.jpg/v1/fill/w_1095,h_730,q_70,strp/untitled_by_vilaeri_dehp555-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaHA1NTUtNDNiYzU3ZTMtOWFlMS00YjdhLWI0N2EtMDNmNzcxOTE5ZDdhLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8TYG4xxkhhhscnUWYSt90grKYBaVF3iYPZ8N5unRQm0')";
            document.getElementById("btnCarDoor").style.visibility = "visible";
            document.getElementById("btnBack").style.visibility = "hidden";
            document.getElementById("btnKeys").style.visibility = "hidden";

        } else {

            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dehp55x-b08a8020-c81a-48f4-ba97-efa62f532cde.jpg/v1/fill/w_1095,h_730,q_70,strp/untitled_by_vilaeri_dehp55x-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaHA1NXgtYjA4YTgwMjAtYzgxYS00OGY0LWJhOTctZWZhNjJmNTMyY2RlLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9vjb3eu75iW1ZdsIe8NSoJ5WlOZOWrhQrJSmte2SHvk')";
            document.getElementById("btnCarDoor").style.visibility = "visible";
            document.getElementById("btnZoomTire").style.visibility = "visible";
            document.getElementById("btnBack").style.visibility = "hidden";
            document.getElementById("btnKeys").style.visibility = "hidden";

        }
    } else if (Location == "BS") {
        if (screwdrivertaken == false) {
            document.getElementById("dialogue").innerText = "[" + user + "]:Hmm, Wait, maybe something here could be useful. I shouldn't stop looking.";
        } else {
            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dehp54r-c3701395-c146-4ec3-9b22-47922b3eb0db.jpg/v1/fill/w_1095,h_730,q_70,strp/untitled_by_vilaeri_dehp54r-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaHA1NHItYzM3MDEzOTUtYzE0Ni00ZWMzLTliMjItNDc5MjJiM2ViMGRiLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fYnXgc1oLtbXCKhtWmxPih6efWWwPKZiJjzgd4U_fZ8')";
            document.getElementById("btnBack").style.visibility = "hidden";
            document.getElementById("btnSD").remove();
            document.getElementById("btnPassengerseat").style.visibility = "visible";
            document.getElementById("btnSteeringWheel").style.visibility = "visible";
            document.getElementById("btnBackSeat").style.visibility = "visible";
            Location = "inside";
        }
    } else if (Location == "inside") {
        level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dehp54r-c3701395-c146-4ec3-9b22-47922b3eb0db.jpg/v1/fill/w_1095,h_730,q_70,strp/untitled_by_vilaeri_dehp54r-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaHA1NHItYzM3MDEzOTUtYzE0Ni00ZWMzLTliMjItNDc5MjJiM2ViMGRiLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fYnXgc1oLtbXCKhtWmxPih6efWWwPKZiJjzgd4U_fZ8')";
        document.getElementById("btnBack").style.visibility = "hidden";
        document.getElementById("btnWC").style.display = "none";
        document.getElementById("btnPassengerseat").style.visibility = "visible";
        document.getElementById("btnSteeringWheel").style.visibility = "visible";
        document.getElementById("btnBackSeat").style.visibility = "visible";
    } else {
        if (hotwired == true) {
            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dehp54r-c3701395-c146-4ec3-9b22-47922b3eb0db.jpg/v1/fill/w_1095,h_730,q_70,strp/untitled_by_vilaeri_dehp54r-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaHA1NHItYzM3MDEzOTUtYzE0Ni00ZWMzLTliMjItNDc5MjJiM2ViMGRiLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fYnXgc1oLtbXCKhtWmxPih6efWWwPKZiJjzgd4U_fZ8')";
            document.getElementById("btnBack").style.visibility = "hidden";
            document.getElementById("btnWC").style.display = "none";
            document.getElementById("btnPassengerseat").style.visibility = "visible";
            document.getElementById("btnSteeringWheel").style.visibility = "visible";
            document.getElementById("btnBackSeat").style.visibility = "visible";
        } else {
            document.getElementById("dialogue").innerText = "[" + user + "]:Hmm, Wait, maybe theses wires are the reason the car won't start? I should fix them.";
        }
    }
}

function KeysGrabFunction() {
    keysgrabbed = true;
    document.getElementById("dialogue").innerText = "[" + user + "]:Nice! I found the keys!";
    level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dehp55h-26070c90-da86-4bdd-9940-5c0273538dbf.jpg/v1/fill/w_1095,h_730,q_70,strp/untitled_by_vilaeri_dehp55h-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaHA1NWgtMjYwNzBjOTAtZGE4Ni00YmRkLTk5NDAtNWMwMjczNTM4ZGJmLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.VtNoKtTH-7dfTqegoSya5OfDtC9QfU0w6dXoTNlnBsA')";
    inventory1.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dehp53m-24540272-55fe-4262-9ffd-a0207df1101e.jpg/v1/fill/w_1095,h_730,q_70,strp/keys_by_vilaeri_dehp53m-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaHA1M20tMjQ1NDAyNzItNTVmZS00MjYyLTlmZmQtYTAyMDdkZjExMDFlLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.cn02LX739RYnkyhSsIKwihGEzBpm0pslsDWgugA2aIU')";
    document.getElementById("btnKeys").style.visibility = "hidden";
}

function BSFunction() {
    if (screwdrivertaken == false) {
        Location = "BS";
        level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dehp54k-b45293c7-9988-4ca7-8bfd-cf46b1ebccc6.jpg/v1/fill/w_1095,h_730,q_70,strp/untitled_by_vilaeri_dehp54k-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaHA1NGstYjQ1MjkzYzctOTk4OC00Y2E3LThiZmQtY2Y0NmIxZWJjY2M2LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.GFQhG215Ru_8UEW6_tTZGlPcuwBL0NNsLHfSw_Pr72c')";
        document.getElementById("btnBack").setAttribute('style', 'left:5%');
        document.getElementById("btnBack").style.visibility = "visible";
        document.getElementById("btnPassengerseat").style.visibility = "hidden";
        document.getElementById("btnSteeringWheel").style.visibility = "hidden";
        document.getElementById("btnBackSeat").style.visibility = "hidden";
        document.getElementById("btnSD").style.visibility = "visibility";
        document.getElementById("btnSD").style.display = "block";

    } else {
        document.getElementById("dialogue").innerText = "[" + user + "]:No point going back there again, I'm pretty sure I found everything thats there.";
    }
}

function SDGrabFunction() {
    if (screwdrivertaken == false) {
        document.getElementById("dialogue").innerText = "A Screwdriver? That could be useful.";
        level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dehp549-5e225c71-a455-43b7-8534-647870c89257.jpg/v1/fill/w_1095,h_730,q_70,strp/untitled_by_vilaeri_dehp549-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaHA1NDktNWUyMjVjNzEtYTQ1NS00M2I3LTg1MzQtNjQ3ODcwYzg5MjU3LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.W1_KJ5aRNDTgO7SJXf5zr3Y3P2FpIfsOHuLZ5BgEqYg')";

        screwdrivertaken = true;

        document.getElementById("inventorybox2").style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dehp53h-f6bd3514-baa0-48b5-8db5-3bfea96e5c9b.jpg/v1/fill/w_1095,h_730,q_70,strp/screwdriver_by_vilaeri_dehp53h-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaHA1M2gtZjZiZDM1MTQtYmFhMC00OGI1LThkYjUtM2JmZWE5NmU1YzliLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.DXEZ2Tvmn9dTiTXE20JZ-uxs7Kqai61dhCp25ZnYLgg')";
    }
}

function SteeringWheelFunction() {
    if (hotwired == false) {
        document.getElementById("dialogue").innerText = "[" + user + "]:Ugh. Of course the car doesn't start. Maybe I can fix it?";
    } else {

        level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dehp53c-2d3d0d2e-83b0-4860-8c16-ad7094e27160.jpg/v1/fill/w_1095,h_730,q_70,strp/finalimg_by_vilaeri_dehp53c-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaHA1M2MtMmQzZDBkMmUtODNiMC00ODYwLThjMTYtYWQ3MDk0ZTI3MTYwLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.B8t6RxgUA8BkMfSQYBJsK85e7HbCjApnc54Cb3vmRAw')";

        document.getElementById("dialogue").innerText = "[" + user + "]:Yes! The car started, I can finally get out of here!";

        document.getElementById("btnBack").style.visibility = "hidden";
        document.getElementById("btnPassengerseat").style.visibility = "hidden";
        document.getElementById("btnSteeringWheel").style.visibility = "hidden";
        document.getElementById("btnBackSeat").style.visibility = "hidden";

        document.getElementById("btnEscape").style.display = "block";
    }
}

function PSFunction() {

    if (hotwired == false) {
        level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei5w8i-b8dbd3cd-63dd-4573-8c7f-92dddee1e0e9.jpg/v1/fill/w_1095,h_730,q_70,strp/untitled_by_vilaeri_dei5w8i-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaTV3OGktYjhkYmQzY2QtNjNkZC00NTczLThjN2YtOTJkZGRlZTFlMGU5LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.x30qAgw4p-G3096qupRhjsjgM8Cjm4CrUpDuLCmXk9w')";
        document.getElementById("btnBack").setAttribute('style', 'left:5%');
        document.getElementById("btnBack").style.visibility = "visible";
        document.getElementById("btnPassengerseat").style.visibility = "hidden";
        document.getElementById("btnSteeringWheel").style.visibility = "hidden";
        document.getElementById("btnBackSeat").style.visibility = "hidden";
        document.getElementById("btnWC").style.display = "block";
    } else {
        document.getElementById("dialogue").innerText = "[" + user + "]:I don't need to check there again. Maybe now the wires are connected the car might start?";
    }
}

function WCGrabFunction() {
    if (screwdrivertaken == false) {
        document.getElementById("dialogue").innerText = "[" + user + "]:Ugh, the panel's screwed shut. I need a way to open it, but how?";
    } else {
        Location = "HW";
        level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei6zj6-b533ddd5-5376-44b3-8458-a2b557d3932b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYjc2ODMyN2UtZDhjYS00NzMyLTg4YmUtYWViNjA5ZTVhMzlkXC9kZWk2emo2LWI1MzNkZGQ1LTUzNzYtNDRiMy04NDU4LWEyYjU1N2QzOTMyYi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.DRPuCYOMCfynPhStKe0hellRPy0Sif8vs5k6t4BsE6M')";
        document.getElementById("btnOC").style.display = "block";
        document.getElementById("dialogue").innerText = "[" + user + "]:These wires are disconnected! I need to fix them.";

    }
}

function OCFunction() {
    document.getElementById("btnOC").style.display = "none";
    document.getElementById("btnW5").style.display = "block";
    document.getElementById("btnW5b").style.display = "block";
    document.getElementById("btnW6").style.display = "block";
    document.getElementById("btnW6b").style.display = "block";

    level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei7060-825f642b-c2d9-469a-be7d-99db8cfec4f8.jpg/v1/fill/w_1129,h_708,q_70,strp/untitled_artwork_6_by_vilaeri_dei7060-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04MDMiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaTcwNjAtODI1ZjY0MmItYzJkOS00NjlhLWJlN2QtOTlkYjhjZmVjNGY4LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.4lGqtZ4wj_MZP-FxSSmCRRBxhTnTNh5HkUXsPwwj63g')";

    document.getElementById("btnW1").style.display = "block";
    document.getElementById("btnW1b").style.display = "block";
    document.getElementById("btnW2").style.display = "block";
    document.getElementById("btnW2b").style.display = "block";
    document.getElementById("btnW3").style.display = "block";
    document.getElementById("btnW3b").style.display = "block";
    document.getElementById("btnW4").style.display = "block";
    document.getElementById("btnW4b").style.display = "block";
    document.getElementById("dialogue").innerText = "[" + user + "]:Huh, they have numbers on each of the wires? Maybe I have to connect them in a specfic order.";
}

function W1Function() {
    if (HWStage == 0) {
        if (wireselected != "1b") {
            wireselected = "1";
        } else {
            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei706a-716d0ced-a394-4f70-a68f-b5dd7c28520a.jpg/v1/fill/w_1129,h_708,q_70,strp/untitled_artwork_5_by_vilaeri_dei706a-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04MDMiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaTcwNmEtNzE2ZDBjZWQtYTM5NC00ZjcwLWE2OGYtYjVkZDdjMjg1MjBhLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.AtEmorSmKtNJyx775Q7JlX6CTM4E18PyYAOoPYC3oKo')";
            HWStage = 1;
            wireselected = "";
        }
    }
}

function W1bFunction() {
    if (HWStage == 0) {
        if (wireselected != "1") {
            wireselected = "1b";
        } else {
            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei706a-716d0ced-a394-4f70-a68f-b5dd7c28520a.jpg/v1/fill/w_1129,h_708,q_70,strp/untitled_artwork_5_by_vilaeri_dei706a-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04MDMiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaTcwNmEtNzE2ZDBjZWQtYTM5NC00ZjcwLWE2OGYtYjVkZDdjMjg1MjBhLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.AtEmorSmKtNJyx775Q7JlX6CTM4E18PyYAOoPYC3oKo')";
            HWStage = 1;
            wireselected = "";
        }
    }
}

function W2Function() {
    if (HWStage < 2) {

        if (wireselected != "2b") {
            wireselected = "2";
        } else if (wireselected = "2b" && HWStage == 1) {
            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei706j-c6b2c43c-5841-48d7-83f4-0cd2abfc8db9.jpg/v1/fill/w_1137,h_703,q_70,strp/untitled_artwork_4_by_vilaeri_dei706j-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03OTEiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaTcwNmotYzZiMmM0M2MtNTg0MS00OGQ3LTgzZjQtMGNkMmFiZmM4ZGI5LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qBvd4faZllt66cnb_u9my0cSFWTWSpU8fQeP9tH5TKY')";
            HWStage = 2;
            wireselected = "";
        } else if (wireselected = "2b" && HWStage == 0) {
            document.getElementById("dialogue").innerText = "[" + user + "]:Hmm, thats not right. I have to do them in the correct order.";
        }
    }
}

function W2bFunction() {
    if (HWStage < 2) {

        if (wireselected != "2") {
            wireselected = "2b";
        } else if (wireselected = "2" && HWStage == 1) {
            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei706j-c6b2c43c-5841-48d7-83f4-0cd2abfc8db9.jpg/v1/fill/w_1137,h_703,q_70,strp/untitled_artwork_4_by_vilaeri_dei706j-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03OTEiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaTcwNmotYzZiMmM0M2MtNTg0MS00OGQ3LTgzZjQtMGNkMmFiZmM4ZGI5LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qBvd4faZllt66cnb_u9my0cSFWTWSpU8fQeP9tH5TKY')";
            HWStage = 2;
            wireselected = "";
        } else if (wireselected = "2" && HWStage == 0) {
            document.getElementById("dialogue").innerText = "[" + user + "]:Hmm, thats not right. I have to do them in the correct order.";
        }
    }
}

function W3Function() {
    if (HWStage < 3) {

        if (wireselected != "3b") {
            wireselected = "3";
        } else if (wireselected = "3b" && HWStage == 2) {
            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei706r-c7a3b398-6d9d-42e9-8595-56a4ae142660.jpg/v1/fill/w_1137,h_703,q_70,strp/untitled_artwork_3_by_vilaeri_dei706r-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03OTIiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaTcwNnItYzdhM2IzOTgtNmQ5ZC00MmU5LTg1OTUtNTZhNGFlMTQyNjYwLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Nyx3qv1ycYLpgFcOe5by2QboHLA-e9xzhe6Z57dJWSI')";
            HWStage = 3;
            wireselected = "";
        } else if (wireselected = "3b" && HWStage != 2) {
            document.getElementById("dialogue").innerText = "[" + user + "]:Hmm, thats not right. I have to do them in the correct order.";
        }
    }
}

function W3bFunction() {
    if (HWStage < 3) {

        if (wireselected != "3") {
            wireselected = "3b";
        } else if (wireselected = "3" && HWStage == 2) {
            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei706r-c7a3b398-6d9d-42e9-8595-56a4ae142660.jpg/v1/fill/w_1137,h_703,q_70,strp/untitled_artwork_3_by_vilaeri_dei706r-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03OTIiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaTcwNnItYzdhM2IzOTgtNmQ5ZC00MmU5LTg1OTUtNTZhNGFlMTQyNjYwLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Nyx3qv1ycYLpgFcOe5by2QboHLA-e9xzhe6Z57dJWSI')";
            HWStage = 3;
            wireselected = "";
        } else if (wireselected = "3" && HWStage != 2) {
            document.getElementById("dialogue").innerText = "[" + user + "]:Hmm, thats not right. I have to do them in the correct order.";
        }
    }
}

function W4Function() {
    if (HWStage < 4) {

        if (wireselected != "4b") {
            wireselected = "4";
        } else if (wireselected = "4b" && HWStage == 3) {
            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei706w-cb901a30-151d-4856-a723-a3adfc44f603.jpg/v1/fill/w_1137,h_703,q_70,strp/untitled_artwork_2_by_vilaeri_dei706w-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03OTIiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaTcwNnctY2I5MDFhMzAtMTUxZC00ODU2LWE3MjMtYTNhZGZjNDRmNjAzLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.EOqqeTjBZhIKZulcNWO9TaTDaMlDfDH5JE2nudqJwwQ')";
            HWStage = 4;
            wireselected = "";
        } else if (wireselected = "4b" && HWStage != 3) {
            document.getElementById("dialogue").innerText = "[" + user + "]:Hmm, thats not right. I have to do them in the correct order.";
        }
    }
}

function W4bFunction() {
    if (HWStage < 4) {

        if (wireselected != 4) {
            wireselected = "4b";
        } else if (wireselected = "4" && HWStage == 3) {
            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei706w-cb901a30-151d-4856-a723-a3adfc44f603.jpg/v1/fill/w_1137,h_703,q_70,strp/untitled_artwork_2_by_vilaeri_dei706w-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03OTIiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaTcwNnctY2I5MDFhMzAtMTUxZC00ODU2LWE3MjMtYTNhZGZjNDRmNjAzLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.EOqqeTjBZhIKZulcNWO9TaTDaMlDfDH5JE2nudqJwwQ')";
            HWStage = 4;
            wireselected = "";
        } else if (wireselected = "4" && HWStage != 3) {
            document.getElementById("dialogue").innerText = "[" + user + "]:Hmm, thats not right. I have to do them in the correct order.";
        }
    }
}

function W5Function() {
    if (HWStage < 5) {

        if (wireselected != "5b") {
            wireselected = "5";
        } else if (wireselected = "5b" && HWStage == 4) {
            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei7076-3447404e-9b4a-4a17-9125-c957bfe7c899.jpg/v1/fill/w_1137,h_703,q_70,strp/untitled_artwork_1_by_vilaeri_dei7076-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03OTIiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaTcwNzYtMzQ0NzQwNGUtOWI0YS00YTE3LTkxMjUtYzk1N2JmZTdjODk5LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.THGbBZQp_K01vCqDfzNaxPNOAxTv6oDvUkfh5o9oivE')";
            HWStage = 5;
            wireselected = "";
        } else if (wireselected = "5b" && HWStage != 4) {
            document.getElementById("dialogue").innerText = "[" + user + "]:Hmm, thats not right. I have to do them in the correct order.";
        }
    }
}

function W5bFunction() {
    if (HWStage < 5) {

        if (wireselected != "5") {
            wireselected = "5b";
        } else if (wireselected = "5" && HWStage == 4) {
            level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei7076-3447404e-9b4a-4a17-9125-c957bfe7c899.jpg/v1/fill/w_1137,h_703,q_70,strp/untitled_artwork_1_by_vilaeri_dei7076-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03OTIiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaTcwNzYtMzQ0NzQwNGUtOWI0YS00YTE3LTkxMjUtYzk1N2JmZTdjODk5LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.THGbBZQp_K01vCqDfzNaxPNOAxTv6oDvUkfh5o9oivE')";
            HWStage = 5;
            wireselected = "";
        } else if (wireselected = "5" && HWStage != 4) {
            document.getElementById("dialogue").innerText = "[" + user + "]:Hmm, thats not right. I have to do them in the correct order.";
        }
    }
}

function W6Function() {
    if (wireselected != "6b") {
        wireselected = "6";
    } else if (wireselected = "6b" && HWStage == 5) {
        level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei707e-8c9eddf8-14c6-474d-826f-5357c654f927.jpg/v1/fill/w_1137,h_703,q_70,strp/untitled_artwork_by_vilaeri_dei707e-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03OTIiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaTcwN2UtOGM5ZWRkZjgtMTRjNi00NzRkLTgyNmYtNTM1N2M2NTRmOTI3LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2kZ1STSrTW8Isn9Qm-9HY_K5cxY0-nBLeNbxJRhhsTA')";
        HWStage = 6;
        hotwired = true;
        wireselected = "";

        document.getElementById("dialogue").innerText = "[" + user + "]:Yes! That should do it. The Car should start now.";
    } else if (wireselected = "6b" && HWStage != 5) {
        document.getElementById("dialogue").innerText = "Hmm, thats not right. I have to do them in the correct order.";
    }
}

function W6bFunction() {
    if (wireselected != "6") {
        wireselected = "6b";
    } else if (wireselected = "6" && HWStage == 5) {
        level.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b768327e-d8ca-4732-88be-aeb609e5a39d/dei707e-8c9eddf8-14c6-474d-826f-5357c654f927.jpg/v1/fill/w_1137,h_703,q_70,strp/untitled_artwork_by_vilaeri_dei707e-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03OTIiLCJwYXRoIjoiXC9mXC9iNzY4MzI3ZS1kOGNhLTQ3MzItODhiZS1hZWI2MDllNWEzOWRcL2RlaTcwN2UtOGM5ZWRkZjgtMTRjNi00NzRkLTgyNmYtNTM1N2M2NTRmOTI3LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2kZ1STSrTW8Isn9Qm-9HY_K5cxY0-nBLeNbxJRhhsTA')";
        HWStage = 6;
        hotwired = true;
        wireselected = "";
        document.getElementById("dialogue").innerText = "[" + user + "]:Yes! That should do it. The Car should start now.";


        document.getElementById("btnW5").remove();
        document.getElementById("btnW5b").remove();
        document.getElementById("btnW6").remove();
        document.getElementById("btnW6b").remove();
        document.getElementById("btnW1").remove();
        document.getElementById("btnW1b").remove();
        document.getElementById("btnW2").remove();
        document.getElementById("btnW2b").remove();
        document.getElementById("btnW3").remove();
        document.getElementById("btnW3b").remove();
        document.getElementById("btnW4").remove();
        document.getElementById("btnW4b").remove();


    } else if (wireselected = "6" && HWStage != 5) {
        document.getElementById("dialogue").innerText = "[" + user + "]:Hmm, thats not right. I have to do them in the correct order.";
    }
}

function escape() {
    var finaltime = 60 - timer;
    localStorage.setItem("Time5", finaltime)
    window.location.href = 'elmsendpage.html'
}
