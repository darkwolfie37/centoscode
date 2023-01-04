const lyricsFile = `

[00:01.52]Secure the bag, know what I'm sayin'?
[00:02.87]Banrisk on the beat
[00:04.01]Ayo, Perish, this sh- hot, boy
[00:10.83]People change like the tides in the ocean
[00:13.11]At least I think or am I dead wrong?
[00:15.80]Foot on the brake, at the light I don't notice
[00:18.59]I sit and wait until the next song
[00:21.79]20 hours in an old van
[00:24.31]Up the east coast, through the cold wind
[00:26.79]Drove 20 hours by the ocean
[00:29.79]Up the east coast, what a road trip
[00:33.46]Now that interstate is paved with memories
[00:38.78]Of a past life I lived when I was 18
[00:44.29]And evеry winter, I think back to what we used to bе
[00:49.87]In that past life we lived at 18
[01:06.05]Uh, I reminisce about a past life
[01:08.59]Things change, I get it, 'cause nothing lasts right?
[01:11.53]Yeah, and I was thinking 'bout her last night
[01:13.83]Scrolling through our memories, debating 'bout our last times
[01:17.09]Ay, for a minute, we was cool
[01:19.06]Then we flew just a lil' too close to the sun
[01:23.14]Now we finished, now we through
[01:24.51]Guess we knew one day we would have to grow up
[01:27.16]20 hours in an old Ford
[01:29.83]Across the Midwest, thinking, what for?
[01:32.49]Drove 20 hours, but it's hopeless
[01:35.25]Across the Midwest, what a road trip
[01:39.16]Now that interstate is paved with memories
[01:44.48]Of a past life I lived when I was 18
[01:49.52]And every winter, I think back to what we used to be
[01:55.39]In that past life we lived at 18


`

var allTextLines = " ";
var lyrics = [];
var timestamps = [];
var line = " ";

// parsing the Lyrics 
function loadLyrics(allText) { // This will only divide with respect to new lines 
    allTextLines = allText.split(/\r\n|\n/);

    var actualCounter = 0;
    for (i = 0; i < allTextLines.length; i++) {
        if (allTextLines[i].search(/^(\[)(\d*)(:)(.*)(\])(.*)/i) >= 0)// any line without the prescribed format wont enter this loop 
        {
            line = allTextLines[i].match(/^(\[)(\d*)(:)(.*)(\])(.*)/i);
            timestamps[actualCounter] = (parseInt(line[2]) * 60000) + multiplyByOneThousand(line[4]); // will give seconds 
            lyrics[actualCounter] = line[6]; //will give lyrics 
            // console.log(timestamps[actualCounter], lyrics[actualCounter]);
            actualCounter++;
        }
    }
    function multiplyByOneThousand(str) {
        return parseFloat(str) * 1000;
    }
}