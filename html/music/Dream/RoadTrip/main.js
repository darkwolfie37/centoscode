document.querySelector(".play").addEventListener("click", function() {
    this.classList.toggle("paused");
    var shouldPause = !this.classList.contains("paused");
    playMusicAndLyrics(shouldPause);
});



var elapsedSeconds = 0;
function handlePlayingTime() {
    time = audio.currentTime
    duration = audio.duration
    console.log(time + ' ' + duration)
    time2 = dateFormat(time);
    duration2 = dateFormat(duration)
    console.log(time2 + ' ' + duration2)
    document.getElementById('time-elapsed').innerHTML = time2;
    document.getElementById('time-in-song').innerHTML = duration2
    setInterval(() => {
        handlePlayingTime(audio.currentTime, audio.duration);
       }, 1000);

     
}
audio = document.getElementById('Audio-Class')
function playMusicAndLyrics(shouldPause) {
    if (shouldPause) {
        window.MUSICSTATE = "PAUSED";
        audio.pause();
    }
    else {
        window.MUSICSTATE = "PLAYING";
        
        audio.play();
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
        wavesurfer.load('Dream2.mp3');
        wavesurfer.on('ready', function () {
            wavesurfer.play();
            wavesurfer.mute();  
        });
    }
}

(function(){
    window.MUSICSTATE = "NOTSTARTED";
    
    loadLyrics(lyricsFile);
})();