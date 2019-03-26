function speakFlavor() {
    let userInput = $("#nb").val().trim();
    var queryURL = "https://pokeapi.co/api/v2/pokemon-species/" + userInput;
    
    $.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function(response) {
        console.log(response);

        let flavorText = [];
          if (response.flavor_text_entries[1].language.name === 'en') {
              flavorText.push(response.flavor_text_entries[1].flavor_text);
          } else if (response.flavor_text_entries[2].language.name === 'en') {
              flavorText.push(response.flavor_text_entries[2].flavor_text);
          }
        console.log(flavorText);
        var readOff = flavorText.toString();

        responsiveVoice.speak(readOff);

    });    
};