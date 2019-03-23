function empty() {
    //empty your array
    gifname.length = 0;
}

function displayGifs() {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifname + "&limit=1&api_key=dc6zaTOxFJmzC";

    // creates ajax call
    $.ajax({ url: queryURL, method: "GET" }).done(function (response) {
        console.log(response.data);
        // save results as a variable
        var results = response.data;

        let pokepic = results[0].images.fixed_height.url;


        $("#screen").html('<img src="'+pokepic+'" /> <video controls autoplay loop muted id="myVideo" class="seeVideo"><source src="images/intro.mp4" type="video/mp4"> Your browser does not support the video tag.</video>');

    });
}