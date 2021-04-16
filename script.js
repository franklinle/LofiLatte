var nextSong = document.getElementById("nextSong");

var nextSound = document.getElementById("nextSound");

var nextBG = document.getElementById("nextBG");

var volume = document.querySelector('#volume');

var volume2 = document.querySelector('#volume2');

nextSong.volume = 0.5;

nextSound.volume = 0.5;

function shufflePlay() {

    fileArray = [
        "song.mp3",
        "song1.mp3",
        "song2.mp3"]

    var num = Math.floor(Math.random() * fileArray.length);
    nextSong.load();

    nextSong.innerHTML = "";
    nextSong.innerHTML += '<source src="music/' + fileArray[num] + '" type="audio/mp3">';

    nextSong.play();


}

function soundPlay() {

    soundArray = [
        "sound.mp3",
        "sound1.mp3",
        "sound2.mp3"]

    var num = Math.floor(Math.random() * soundArray.length);
    nextSound.load();

    nextSound.innerHTML = "";
    nextSound.innerHTML += '<source src="sound/' + soundArray[num] + '" type="audio/mp3">';


    nextSound.play();
}

function pauseButton() {
    if (nextSong.paused) {
        nextSong.play();
    }
    else {
        nextSong.pause();
    }

}

volume.addEventListener('change', function (e) {
    nextSong.volume = e.currentTarget.value / 100;
});

volume2.addEventListener('change', function (e) {
    nextSound.volume = e.currentTarget.value / 100;
});


window.onkeydown = function (event) {
    if (event.keyCode == 32) {
        shufflePlay();
    }; 
}; 



/* Background Button */

function shuffleBG(){

    bgArray = [
        "image.gif",
        "image1.gif",
        "image2.gif"
    ]
    
    var num = Math.floor(Math.random() * bgArray.length);
    nextBG.load();

    nextBG = "";
    nextBG += "url('background/" + bgArray[num] + "')";

    document.body.style.backgroundImage = nextBG;
}


/*
let bgButton = document.querySelector('#bgButton');

bgButton.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('" + nextBG + "')";
})
*/