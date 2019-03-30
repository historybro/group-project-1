$(document).ready(function(){
    var fullDate = new Date();
    var hours = fullDate.getHours();
	if (hours > 19 || hours < 6)
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";
	else if (hours > 16 && hours < 19)
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  document.body.className = "sunset";
	else
	  // Else use ‘day’ theme
	  document.body.className = "day";
});