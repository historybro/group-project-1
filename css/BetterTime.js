function clock() {
    var fullDate = new Date();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();
        
    document.getElementById('hour').innerHTML= hours;
    document.getElementById('minute').innerHTML= ":" + mins;
    document.getElementById('second').innerHTML= ":" + secs;

    
    }

    
    
    
setInterval(clock, 100);