document.querySelector(".play").addEventListener("click", function() {
    this.classList.toggle("paused");
    var shouldPause = !this.classList.contains("paused");
    playMusicAndLyrics(shouldPause);
});

function loadAudio() {
    window.audioElement = document.createElement('audio');
    window.audioElement.setAttribute('src', 'Dream.mp3');
}

var elapsedSeconds = 0;
function handlePlayingTime() {
    setInterval(myTimer, 1000);
    function myTimer() {
        if ( window.MUSICSTATE === "PLAYING") {
            elapsedSeconds++;
            elapsedFormatted = dateFormat(elapsedSeconds);
            document.querySelector(".time-elapsed").innerText = elapsedFormatted;
        }
    }
}

function playMusicAndLyrics(shouldPause) {
    if (shouldPause) {
        window.MUSICSTATE = "PAUSED";
        window.audioElement.pause();
    }
    else {
        window.MUSICSTATE = "PLAYING";
        handlePlayingTime();
        window.audioElement.play();
        startDisplayingLyrics();
        // loadWaveForm();
    }
}

var waveFormLoaded = false;
function loadWaveForm(){
    if (!waveFormLoaded) {
        waveFormLoaded = true;
        var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'violet',
            progressColor: 'purple'
        });
        wavesurfer.load('Dream.mp3');
        wavesurfer.on('ready', function () {
            wavesurfer.play();
        });
    }
}

(function(){
    window.MUSICSTATE = "NOTSTARTED";
    loadAudio();
    loadLyrics(lyricsFile);
})();