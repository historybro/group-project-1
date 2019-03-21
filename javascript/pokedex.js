//Actual working code
var pokemon;

function pokeapi() {
    let userInput = $("#nb").val().trim();
    var queryURL = "https://pokeapi.co/api/v2/pokemon/" +
    userInput
       
    $.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function(response) {
        $("#info-screen").empty();
        console.log(queryURL);
        console.log(response);
        pokename = response.name;
        pokeid = response.id;
        pokeheight = response.height;
        pokeweight = response.weight;
        poketype = response.types[0].type.name;
        pokepic = response.sprites.front_default;

        pokemon = {
            name: pokename,
            id: pokeid,
            height: pokeheight,
            weight: pokeweight,
            type: poketype,
            pic: pokepic
        };
        console.log(pokemon);
        
        let newPokemon = $("<div>").append(
            $("<p>").text("Name: " + pokemon.name.toUpperCase()),
            $("<p>").text("Number: " + pokemon.id),
            $("<p>").text("Height: " + pokemon.height),
            $("<p>").text("Weight: " + pokemon.weight),
            $("<p>").text("Type: " + pokemon.type)
        );

            
        $("#info-screen").append(newPokemon);
        $("#screen").html('<img id="'+pokemon.name+'" src="'+pokepic+'" />')

    });    
}


$("#blue-button-left").on("click", function(event) {
    console.log("#blue-button-left pushed");
    pokeapi();   
});


//ALL BUTTONS pre-coded to onclick
//=======================================================

$("#reflect").on("click", function(event) {
    console.log("#reflect pushed");
});

$("#top-button-red").on("click", function(event) {
    console.log("#top-button-red pushed");
});

$("#top-button-yellow").on("click", function(event) {
    console.log("#top-button-yellow pushed");
});

$("#top-button-green").on("click", function(event) {
    console.log("#top-button-green pushed");
});

$("#button-top1").on("click", function(event) {
    console.log("#button-top1 pushed");
});

$("#button-top2").on("click", function(event) {
    console.log("#button-top2 pushed");
});

$("#button-bottom").on("click", function(event) {
    console.log("#button-bottom pushed");
});

//commenting out for now because it's being used, will probably delete once our code is pretty set
// $("#blue-button-left").on("click", function(event) {
//     console.log("#blue-button-left pushed");
// });

$("#green-button-left").on("click", function(event) {
    console.log("#green-button-left pushed");
});

$("#orange-button-left").on("click", function(event) {
    console.log("#orange-button-left pushed");
});

$("#square-button-left").on("click", function(event) {
    console.log("#square-button-left pushed");
});

$("#upC").on("click", function(event) {
    console.log("#upC pushed");
});

$("#rightC").on("click", function(event) {
    console.log("#rightC pushed");
});

$("#leftC").on("click", function(event) {
    console.log("#leftC pushed");
});

$("#downC").on("click", function(event) {
    console.log("#downC pushed");
});

$("#key1").on("click", function(event) {
    cardapi();
    console.log("#key1 pushed");
});

$("#key2").on("click", function(event) {
    console.log("#key2 pushed");
});

$("#key3").on("click", function(event) {
    console.log("#key3 pushed");
});

$("#key4").on("click", function(event) {
    console.log("#key4 pushed");
});

$("#key5").on("click", function(event) {
    console.log("#key5 pushed");
});

$("#key6").on("click", function(event) {
    console.log("#key6 pushed");
});

$("#key7").on("click", function(event) {
    console.log("#key7 pushed");
});

$("#key8").on("click", function(event) {
    console.log("#key8 pushed");
});

$("#key9").on("click", function(event) {
    console.log("#key9 pushed");
});

$("#key10").on("click", function(event) {
    console.log("#key10 pushed");
});

$("#leaf-button-right").on("click", function(event) {
    console.log("#leaf-button-right pushed");
});


$("#yellow-button-right").on("click", function(event) {
    console.log("#yellow-button-right pushed");
});

$("#green-button-right").on("click", function(event) {
    console.log("#green-button-right pushed");
});

$("#orange-button-right").on("click", function(event) {
    console.log("#orange-button-right pushed");
});

$("#leftT").on("click", function(event) {
    console.log("#leftT pushed");
});

$("#rightT").on("click", function(event) {
    console.log("#rightT pushed");
});

$("#left-red-cross").on("click", function(event) {
    console.log("#left-red-cross pushed");
});

$("#square-button-right1").on("click", function(event) {
    console.log("#square-button-right1 pushed");
});

$("#square-button-right2").on("click", function(event) {
    console.log("#square-button-right2 pushed");
});

$("top-right1").on("click", function(event) {
    console.log("#top-right1 pushed");
});

$("#top-right2").on("click", function(event) {
    console.log("#top-right2 pushed");
});