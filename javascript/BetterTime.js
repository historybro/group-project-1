function clock() {
    var fullDate = new Date();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();
        
    document.getElementById('hour').innerHTML= hours;
    if (mins < 10){
        document.getElementById('minute').innerHTML= ":0" + mins;
    } else {
        document.getElementById('minute').innerHTML= ":" + mins;
    };
    
    if (secs < 10){
        document.getElementById('second').innerHTML= ":0" + secs;
    } else {
        document.getElementById('second').innerHTML= ":" + secs;
    };
}    
    
setInterval(clock, 100);