var shuffleIcon = document.getElementById("shuffleIcon");
var nextSong = document.getElementById("nextSong");
nextSong.volume = 0.1;

function shufflePlay() {

    fileArray = [
        "song.mp3",
        "song1.mp3",
        "song2.mp3"]

    var num = Math.floor(Math.random() * fileArray.length);
    nextSong.load();

    nextSong.innerHTML = "";
    nextSong.innerHTML += '<source src="media/' + fileArray[num] + '" type="audio/mp3">';

    nextSong.play();
}

shuffleIcon.onclick = function () {
    shufflePlay();
}

function pausePlay() {
    if (nextSong.paused) {
        nextSong.play();
    }
    else {
        nextSong.pause();
    }

}