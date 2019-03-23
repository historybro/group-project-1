// // On load for instructions
// $(window).on('load',function(){
//     $('#myModal').modal('show');
// });

//Actual working code
var pokemon;
var idNum;
// Voice Api
var voiceData = function() {
    responsiveVoice.speak($('#info-screen').val(), "Uk English Male");
};

//function that clears the two main screens
function clear() {
    $("#screen").empty();
    $("#info-screen").empty();
}
$(document).ready(function(){
    $("#top-button-yellow").on("click", function(event) {
        $("#myModal").modal("show");
    });
});

function userInputInt(){
    let num = $("#nb").val().trim();
    let pNum = parseInt(num);
    if (Number.isInteger(pNum) == true) {
        console.log("true");
        idNum = pNum;
    } else {
        console.log("false");
    }
}

function idUp() {
    userInputInt();
    idNum++;
    $("#nb").val(idNum);
    clear();
    pokeapi();
}

function idDown() {
    userInputInt();
    idNum--;
    $("#nb").val(idNum);
    clear();
    pokeapi();
}

function idUp10() {
    userInputInt();
    idNum= idNum + 10;
    $("#nb").val(idNum);
    clear();
    pokeapi();
}

function idDown10() {
    userInputInt();
    idNum = idNum - 10;
    $("#nb").val(idNum);
    clear();
    pokeapi();
}

//  function to get evolution data
function evolutions() {
    let userInput = $("#nb").val().trim();
    var queryURL = "https://pokeapi.co/api/v2/evolution-chain/" + 
    userInput



    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        $("#info-screen").empty();
        console.log(queryURL);
        console.log(response);
        let pokeEvolution = response.evolves_to;
        
        let evolvesTo = $("<div>").append(
            $("<p>").text("Evolves to"+ pokeEvolution)
        );
        $("#info-screen").append(evolvesTo);

        
    })
}
// function to get Move list
function pokeMoveList() {
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
        let pokemoves = response.moves;
        
        let moveList = $("<div>").append(
            $("<p>").text("Moves"+ pokemoves)
        );
        $("#info-screen").append(moveList);

        
    })
}
//function that runs the complete pokeAPI call and data storage
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
        let pokename = response.name;
        let pokeid = response.id;
        let pokeheight = response.height;
        let pokeweight = response.weight;
        let poketype = response.types[0].type.name;
        let pokepic = response.sprites.front_default;

        let pokemon = {
            name: pokename,
            id: pokeid,
            height: pokeheight,
            weight: pokeweight,
            type: poketype,
            pic: pokepic
        };
        console.log(pokemon);
        let heightC = (pokeheight / 3.05).toFixed(2);
        let weightC = (pokeweight / 4.5).toFixed(2);
        
        let newPokemon = $("<div>").append(
            $("<p>").text("Name:" + pokemon.name.toUpperCase()),
            $("<p>").text("Number:" + pokemon.id),
            $("<p>").text('Height:' + heightC + '"'),
            $("<p>").text("Weight:" + weightC +"lbs"),
            $("<p>").text("Type:" + pokemon.type)
        );

            
        $("#info-screen").append(newPokemon);
        $("#screen").append('<img id="'+pokemon.name+'" src="'+pokepic+'" /> <video controls autoplay loop muted id="myVideo" class="seeVideo"><source src="images/intro.mp4" type="video/mp4"> Your browser does not support the video tag.</video>');
        voiceData();
        

    });    
};



//enter key does the same thing as blue-button-left press ie ajax call and display info
//WASD do the same thing as the dpad buttons on screen...theoretically
//=======================================================================================
$("#blue-button-left").on("click", function(event) {
    console.log("#blue-button-left pushed");
    clear();
    pokeapi();
});

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        console.log("Enter Key Pressed");
        clear();
        pokeapi();
    }
});

$("#upC").on("click", function(event) {
    console.log("#upC pushed");
    idUp();    
});

$("#rightC").on("click", function(event) {
    console.log("#rightC pushed");
    idUp10();    
});

$("#leftC").on("click", function(event) {
    console.log("#leftC pushed");
    idDown10();    
});

$("#downC").on("click", function(event) {
    console.log("#downC pushed");
    idDown();    
});

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which; 
    if(e.which == 38) {
        console.log("up arrow pushed");
        idUp();
    } else if(e.which == 39) {
        console.log("right arrow pushed");
        idUp10();
    } else if(e.which == 40) {
        console.log("down arrow pushed");
        idDown();
    } else if(e.which == 37) {
        console.log("left arrow pushed");
        idDown10();
    }
}


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

// $("#upC").on("click", function(event) {
//     console.log("#upC pushed");
// });

// $("#rightC").on("click", function(event) {
//     console.log("#rightC pushed");
// });

// $("#leftC").on("click", function(event) {
//     console.log("#leftC pushed");
// });

// $("#downC").on("click", function(event) {
//     console.log("#downC pushed");
// });

$("#key1").on("click", function(event) {
    cardapi();
    console.log("#key1 pushed");
});

$("#key2").on("click", function(event) {
    console.log("#key2 pushed");
    userInputInt();
    $("#nb").val(idNum);
    clear();
    pokeapi();
});

$("#key3").on("click", function(event) {
    console.log("#key3 pushed");
    userInputInt();
    $("#nb").val(idNum);
    clear();
    pokeMoveList();
});

$("#key4").on("click", function(event) {
    console.log("#key4 pushed");
    userInputInt(); 
    $("#nb").val(idNum);
    clear();   
    evolutions()
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

var maps =["https://cdn.bulbagarden.net/upload/2/25/LGPE_Kanto_Map.png","https://cdn.bulbagarden.net/upload/3/32/Sevii_Islands.png","https://cdn.bulbagarden.net/upload/6/64/JohtoMap.png","https://cdn.bulbagarden.net/upload/8/85/Hoenn_ORAS.png","https://cdn.bulbagarden.net/upload/7/74/Pt_Sinnoh.png","https://cdn.bulbagarden.net/upload/f/fc/Unova_B2W2_alt.png","https://cdn.bulbagarden.net/upload/8/8a/Kalos_alt.png","https://cdn.bulbagarden.net/upload/0/0b/Alola_USUM_artwork.png","https://cdn.bulbagarden.net/upload/c/ce/Galar_artwork.png","https://cdn.bulbagarden.net/upload/4/47/Orre.png","https://cdn.bulbagarden.net/upload/f/f0/Snap_Pok%C3%A9mon_Island.png","https://cdn.bulbagarden.net/upload/c/c8/TCG_Islands.png","https://cdn.bulbagarden.net/upload/4/41/Holon_City.jpg","https://cdn.bulbagarden.net/upload/3/36/Mystery_Dungeon_World_PSMD.png","https://cdn.bulbagarden.net/upload/4/48/Fiore_alt.png","https://cdn.bulbagarden.net/upload/f/f4/Almia.png","https://cdn.bulbagarden.net/upload/f/f5/Oblivia_artwork.png","https://cdn.bulbagarden.net/upload/4/4b/Ransei.png","https://cdn.bulbagarden.net/upload/f/fe/Ferrum.png"," https://cdn.bulbagarden.net/upload/d/d5/Tumblecube_Island.png"];