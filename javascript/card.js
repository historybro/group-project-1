function cardapi() {
  let userInput = $("#nb").val().trim();
  var queryURL = "https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=" +
  userInput
     
  $.ajax({
      url: queryURL,
      method: "GET"
    })

    .then(function(response) {
      $("#info-screen").empty();
      console.log(queryURL);
      console.log(response);
      pokename = response.cards[1].name;
      console.log(pokename);
      pokepic = response.cards[1].imageUrl;
      console.log(pokepic);

      pokemon = {
        name: pokename,
        pic: pokepic
    };

     $("#screen").html('<img id="'+pokemon.name+'" src="'+pokepic+'" />')

  });    
}