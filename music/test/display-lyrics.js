var startTime = null;
var delayMs = 0;
var parent = document.getElementById("lyrics-container");
function startDisplayingLyrics() {
    startTime = new Date();
    var index = 0;
    displayRow(index);
}

function displayRow(index) {
    var diff = Math.abs((startTime.getTime() - new Date().getTime()));
    diff -= delayMs;
    var time = timestamps[index];
    var line = lyrics[index];

    var nextIndex = index;
    if (diff >= time) {
        var currentElement = document.createElement("div");
        currentElement.classList.add("lyrics-row");
        currentElement.classList.add("anim-text-flow");
        currentElement.innerHTML = getAnimatedText(line);
        if (parent.firstChild && parent.firstChild !== currentElement && parent.firstChild.classList) {
            parent.firstChild.classList.remove("anim-text-flow");
            parent.firstChild.classList.add("old-lyrics");
            currentElement.classList.remove("anim-text-flow-large");
        }

        //naive way to trigger css animation by toggling class
        setTimeout(function() {
            currentElement.classList.add("anim-text-flow-large");
        }, 5);

        parent.insertBefore(currentElement, parent.firstChild);
        nextIndex = index + 1;
    }
    setTimeout(function () {
        if ( window.MUSICSTATE === "PLAYING") {
            displayRow(nextIndex);
        }
    }, 200);
}

function getAnimatedText(text) {
    var chars = text.trim().split("");
    return '<span>' + chars.join('</span><span>') + '</span>';
}