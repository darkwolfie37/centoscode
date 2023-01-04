
function dateFormat(d) {
    var sec_num = parseInt(d, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (seconds < 10) {seconds = "0"+seconds;}

    return `${hours > 0 ? hours+':' : ''}${minutes}:${seconds}`;
}