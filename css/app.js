


$(document).on("onload", function() {


    var queryURL = "https://pokeapi.co/api/v2/" +
       userInput;


       $.ajax({
        url: queryURL,
        method: "GET"
      })




      .then(function(response) {
        console.log(queryURL);

        console.log(response);})
    
});