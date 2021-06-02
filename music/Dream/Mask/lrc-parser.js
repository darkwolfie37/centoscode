const lyricsFile = `
[ti:Mask]
[ar:Dream]
[al:Mask - Single]
[la:EN]
[re:LRCgenerator.com]
[ve:3.00]

[00:08.60]I wear a mask with a smile for hours at a time
[00:12.68]Stare at the celing when I hold back whats on my mind
[00:16.88]When they Ask me how im doing
[00:18.69]I Say im just fine
[00:20.61]When they Ask me how im doing
[00:22.32]I Say im just fine

[00:24.93]But the Fact is...
[00:26.63]I can never get off my matress.
[00:30.92]But all they can ask is..
[00:35.11]"Why are you so sad kid?"
[00:39.94]That's what the Mask is.
[00:42.39]That's what the point of the mask is
[00:47.93]So you can see I'm tryin'
[00:50.21]You won't see me cryin'
[00:52.63]I'll just keep on smilin', I'm good (Yeah, I'm good)
[00:55.30]And it just keeps on pilin'
[00:58.93]It's so terrifying
[01:00.69]But I keep on smilin', I'm good (Yeah, I'm good)
[01:04.11]I've been carin' too much for so long
[01:08.73]Been comparin' myself for so long
[01:12.69]Been wearin' a smile for so long, it's real
[01:17.21]So long, it's rеal, so long, it's real
[01:22.94]Always bein' judged by a bunch of strangе faces
[01:26.56]Scared to go outside, haven't seen the light in ages
[01:30.69]But I've been places
[01:33:32]So I'm okay-ish, so I'm okay-ish
[01:35.75]Yeah, I'm okay, bitch
[01:37.11]But the fact is
[01:40.01]I need help, I'm failin' all my classes
[01:44.22]They think that I need glasses
[01:47.23]I just really wish that I could pass this (Wish that I could pass this)
[01:47.93]So you can see I'm tryin'
[01:53.23]That's what the mask is
[01:55.47]That's what the point of te mask is
[02:01.21]So you can see I'm trying
[02:04.21]You won't see me cryin'
[02:05.80]I'll just keep on smilin', I'm good (Yeah, I'm good)
[02:09.91]And it just keeps on pilin'
[02:12.12]It's so terrifying
[02:14.01]But I keep on smilin', I'm good (Yeah, I'm good)
[02:17.11]I've been carin' too much for so long
[02:22.73]Been comparin' myself for so long
[02:26.69]Been wearin' a smile for so long, it's real
[02:31.21]So long, it's rеal, so long, it's real
[02:50.00]Lyrics transcript by DarkWolfie Using (song-lyrics on GitHub)
`;

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