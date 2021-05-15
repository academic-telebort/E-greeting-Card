// Include Howler.js into your project

/*
==================================================
Create a new Howl object
==================================================
*/
var song = new Howl({
    src: ["HBS.mp3"]
})

/*
==================================================
Get all necessary DOM:
1. class .card
2. class .front
3. class .back
==================================================
*/
var card = document.querySelector(".card");
var front = document.querySelector(".front");
var back = document.querySelector(".back");

/*
==================================================
Create a variable isOpen and set the value to false
==================================================
*/
var isOpen = false;

/*
==================================================
Attach click event handler to .card:
1. If the card is open
    - remove class .open from .front
    - stop the playing song
2. Else if the card is close
    - add class .open to .front
    - set timeout to play the song after 1 second
3. Toggle variable isOpen (make isOpen to be not true)
==================================================
*/
card.onclick = function () {
    if (isOpen === true) {
        front.classList.remove("open");
        song.stop();
    } else {
        front.classList.add("open");
        setTimeout(function () {
            song.play();
        }, 1000);
    }
    isOpen = !isOpen;
}