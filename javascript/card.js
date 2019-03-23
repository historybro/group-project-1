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

     $("#screen").html('<img id="'+pokemon.name+'" src="'+pokepic+'" /> <video controls autoplay loop muted id="myVideo" class="seeVideo"><source src="images/intro.mp4" type="video/mp4"> Your browser does not support the video tag.</video>')

  });    
}