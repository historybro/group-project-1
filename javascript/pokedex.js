// // On load for instructions
// $(window).on('load',function(){
//     $('#myModal').modal('show');
// });
$(document).ready(function () {
    $("#top-button-yellow").on("click", function (event) {
        $("#myModal").modal("show");
    });
});

//Actual working code
var pokemon;
var idNum = 0;
let gifname = [];
// Voice Api
// function voiceData() {
//     responsiveVoice.speak($('#info-screen').val(), "Uk English Male");
// };


//function that clears the two main screens
function clear() {
    $("#screen").empty();
    $("#info-screen").empty();
}
$(document).ready(function(){
    $("#modal2").hide();

    $("#top-button-yellow").on("click", function(event) {
        $("#myModal").modal("show");
       
    });
});


function userInputInt() {
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
    speakFlavor();
}

function idDown() {
    userInputInt();
    idNum--;
    $("#nb").val(idNum);
    clear();
    pokeapi();
    speakFlavor();
}

function idUp10() {
    userInputInt();
    idNum = idNum + 10;
    $("#nb").val(idNum);
    clear();
    pokeapi();
    speakFlavor();
}

function idDown10() {
    userInputInt();
    idNum = idNum - 10;
    $("#nb").val(idNum);
    clear();
    pokeapi();
    speakFlavor();
}

//  function to get evolution data
function evolutions() {
    let userInput = $("#nb").val().trim();
    var queryURL = "https://pokeapi.co/api/v2/pokemon/" + userInput;
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            console.log(response);

            var url = response.species.url;
            let pokename = response.name;

            $.ajax({
                url: url,
                method: "GET"
            })
                .then(function (response) {
                    console.log(response);
                    var url = response.evolution_chain.url;

                    $.ajax({
                        url: url,
                        method: "GET"
                    })
                        .then(function (response) {
                            console.log("evo response: " , response);
                            var evoChain = [];
                            var evoData = response;
                            var evoDetails = evoData.chain['evolves_to'][0];

                            if (evoDetails === undefined || evoDetails.evolves_to[0] === undefined || pokename === evoDetails.evolves_to[0].species.name) {                                
                                $("#info-screen").html("<p>Fully Evolved</p>");
                                console.log("final evo");
                            } else if (evoData.chain.evolves_to.length !== 0) {
                                evoChain.push(evoData.chain.evolves_to[0].species.name);
                                console.log("if1");
                                console.log("if1: " + evoChain);
                            } else {
                                console.log("else1");
                                console.log("else1: " + evoChain);                                                                
                            }
                            if (evoData.chain.evolves_to[0].evolves_to.length !== 0) {
                                evoChain.push(evoData.chain.evolves_to[0].evolves_to[0].species.name);
                                console.log("if2");
                                console.log("if2: " + evoChain);
                            } else {
                                console.log("else2");
                                console.log("else2: " + evoChain);
                            }
                            console.log("outside");
                            console.log("outside: " + evoChain);
                            //if (pokename != evoDetails.species.name) {
                            //     console.log("evo");
                            //     let name = evoDetails.species.name;
                            //     let level = evoShort.min_level;
                            //     let trigger = evoShort.trigger.name;
                            //     let item = evoShort.item;

                            //     console.log(evoDetails);
                            //     console.log(evoShort);
                            //     console.log(evoDetails.species.name);
                            //     console.log(evoShort.min_level);
                            //     console.log(evoShort.trigger.name);
                            //     console.log(evoShort.item);
                            //     console.log(name + level + trigger + item);

                            //     do {
                            //         evoChain.push({
                            //             species_name: name,
                            //             min_level: !evoDetails ? 1 : level,
                            //             trigger_name: !evoDetails ? null : trigger,
                            //             item: !evoDetails ? null : item
                            //         });

                            //     } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
                            //     console.log(evoChain);                                

                            //     let evoInfo = $("<div>")
                            //     evoInfo.append($("<p>").attr('id', 'pokename').text("Evolves To:" + name.toUpperCase()));
                            //     if (item != null) {
                            //         evoItem = "Yes";
                            //         let item = evoShort.item.name;
                            //         evoInfo.append($("<p>").text('Use ' + item + ' to evolve!'));
                            //     } else {
                            //         evoItem = "No";
                            //         evoInfo.append($("<p>").text('at level ' + level));
                            //     }
                            //     $("#info-screen").append(evoInfo);

                            // } else if (pokename === evoDetails.species.name){
                            //     console.log("evo2");
                            //     let name = evoDetails.evolves_to[0].species.name;
                            //     let level = evoDetails.evolves_to[0].evolution_details[0].min_level;
                            //     let trigger = evoDetails.evolves_to[0].evolution_details[0].trigger.name;
                            //     let item = evoDetails.evolves_to[0].evolution_details[0].item;
                                
                            //     do {
                            //         evoChain.push({
                            //             species_name: name,
                            //             min_level: !evoDetails ? 1 : level,
                            //             trigger_name: !evoDetails ? null : trigger,
                            //             item: !evoDetails ? null : item
                            //         });

                            //     } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
                            //     console.log(evoChain);                     

                            //     let evoInfo = $("<div>")
                            //     evoInfo.append($("<p>").attr('id', 'pokename').text("Evolves To:" + name.toUpperCase()));
                            //     if (item != null) {
                            //         evoItem = "Yes";
                            //         let item = evoDetails.evolves_to[0].evolution_details[0].item.name;
                            //         evoInfo.append($("<p>").text('Use ' + item + ' to evolve!'));
                            //     } else {
                            //         evoItem = "No";
                            //         evoInfo.append($("<p>").text('at level ' + level));
                            //     }
                            //     $("#info-screen").append(evoInfo);
                            // }                            

                        })
                })
        });
};


// function to get Move list
function pokeMoveList() {
    let userInput = $("#nb").val().trim();
    var queryURL = "https://pokeapi.co/api/v2/pokemon/" +
        userInput



    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
        $("#info-screen").empty();
        let pokepic = response.sprites.front_default;
        var data = response;
        var naturalMoves = [];
        for (var i = 0; i < 10; i++) {
          if (data.moves[i].version_group_details[0].level_learned_at === 0) {
            naturalMoves.push({
              name: data.moves[i].move.name,
              lvl: data.moves[i].version_group_details[0].level_learned_at
            })
          } else {
            console.log("Not level 0");
          }
        }
        var moveName = [];
        for (var i = 0; i < 4; i++) {
            moveName.push(naturalMoves[i].name);
        }
        let moveInfo = $("<div>").append(
            $("<p>").text("Moves:"),
            $("<p>").text(moveName[0]),
            $("<p>").text(moveName[1]),
            $("<p>").text(moveName[2]),
            $("<p>").text(moveName[3]),
        );
        $("#info-screen").append(moveInfo);
        $("#screen").append('<img src="'+pokepic+'" /> <video controls autoplay loop muted id="myVideo" class="seeVideo"><source src="images/intro.mp4" type="video/mp4"> Your browser does not support the video tag.</video>');
    });
};

//function that runs the complete pokeAPI call and data storage
function pokeapi() {
    let userInput = $("#nb").val().trim();

    if ( userInput < 1 || userInput > 802) {
        let newPokemon = $("<div>").append(
            $("<p>").attr('id', 'pokname').text("N̩̤̖͢a͙͔̥m̧̦̤̞ȩ͔̬̻͓͈:͍͔͝ ͈̟̻U̱̪̙͈n̜̹k͍̙̯͠ow̯͔̪̗̠͈͙n̛͇̱͔͔"),
            $("<p>").text("̦̬̱̭N̷u̟̩m̰̭̞b̳̣̯͖͙̮e̞̯̰͇͍̤̠r̟̹͜:̗͎̙͕̘ ̸͍Ḛ̶̫̣̳r҉͚͇r̷o̟̟͎͉̬̥͚r"),
            $("<p>").text("H̙͚͕̞̜̪e͢i̵̲̺̹̪̹g̬̬̤͖͉̩̻͝h̲̘t̠̙̗̦̱̤:͓̱͓͖͝ ̨̲̻e̛̠̘͚R͖̼̣o̯͈͍̼͚͟ͅr̛̜̻͍͎ ̝̱͚̖͈u͓̺̘͕͖͇̭N̠̝̬̮͖̦k̘͈̩͕͚̗o̺̮͓̘͙͓͍w̘̱̮̦̬͠n̘̱̭̥"),
            $("<p>").text("̢͈̗̼̹W̯ͅe̱̙͇̹ͅḭ̜̼͈̝͎g͉͉̮̟͔h͔̞̱͍t͍̥̜̤͔̺:̬̺̘ ̀ ̧̲̤̳̙̥̗͎12͚̺͙̤3͕e͓̜͞r̷͇̺̟r̗͉̪͔̗̪̕o͉͇͎̺r1̷̬̝͈͖̩̬ͅ2͇̝̹̦̥3͜u͇͎̞k̶͓̥͈̼͉̯̲n̨̥̥ow̷̪̯̖͉̹̩͍n̗̬"),
            $("<p>").text("T͔̬̮͍̜͓ͅT͖͓y̮̤͘p̬͇̜͍͚̝̕e̛͚̩̮̝͓̺̻:̟̥̗̹̙ ͈̺̹̯̠̺E̝̝̰̲̥͠R̪̼̞̙͖̖͙͜R͎or̴͈̗̘͔r͙̝̤͖͙ͅr̭ ̙U͔k͘n̳̜ó̳w̰͔̖̻̹n͖̜̼̯͈͠")
        );
        $("#info-screen").append(newPokemon);
        $("#screen").append('<img id="missigno" src="./images/missigno.png" />');
        idNum = 0;
        userInput = 0;


    } else {
    var queryURL = "https://pokeapi.co/api/v2/pokemon/" + userInput;

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
            gifname.push(pokemon.name);
            console.log(gifname);
            console.log(pokemon);
            let heightC = (pokeheight / 3.05).toFixed(2);
            let weightC = (pokeweight / 4.5).toFixed(2);

            let newPokemon = $("<div>").append(
                $("<p>").attr('id', 'pokname').text("Name:" + pokemon.name.toUpperCase()),
                $("<p>").text("Number:" + pokemon.id),
                $("<p>").text('Height:' + heightC + '"'),
                $("<p>").text("Weight:" + weightC + "lbs"),
                $("<p>").text("Type:" + pokemon.type)
            );
            $("#info-screen").append(newPokemon);
            $("#screen").append('<img id="' + pokemon.name + '" src="' + pokepic + '" /> <video controls autoplay loop muted id="myVideo" class="seeVideo"><source src="images/intro.mp4" type="video/mp4"> Your browser does not support the video tag.</video>');
            $(".modal-body2").append('<img id="modalimg" src="'+pokepic+'" />');
            voiceData();
        
        });
    }
};



//enter key does the same thing as blue-button-left press ie ajax call and display info
//WASD do the same thing as the dpad buttons on screen...theoretically
//=======================================================================================
$("#blue-button-left").on("click", function (event) {
    console.log("#blue-button-left pushed");
    empty();
    clear();
    pokeapi();
    speakFlavor();
});

$(document).on('keypress', function (e) {
    if (e.which == 13) {
        console.log("Enter Key Pressed");
        empty();
        clear();
        pokeapi();
        speakFlavor();
    }
});

$("#upC").on("click", function (event) {
    console.log("#upC pushed");
    empty();
    idUp();
});

$("#rightC").on("click", function (event) {
    console.log("#rightC pushed");
    empty();
    idUp10();
});

$("#leftC").on("click", function (event) {
    console.log("#leftC pushed");
    empty();
    idDown10();
});

$("#downC").on("click", function (event) {
    console.log("#downC pushed");
    empty();
    idDown();
});

window.onkeyup = function (e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (e.which == 38) {
        console.log("up arrow pushed");
        idUp();
    } else if (e.which == 39) {
        console.log("right arrow pushed");
        idUp10();
    } else if (e.which == 40) {
        console.log("down arrow pushed");
        idDown();
    } else if (e.which == 37) {
        console.log("left arrow pushed");
        idDown10();
    }
}


//ALL BUTTONS pre-coded to onclick
//=======================================================

$("#reflect").on("click", function (event) {
    console.log("#reflect pushed");
});

$("#top-button-red").on("click", function (event) {
    console.log("#top-button-red pushed");
});

$("#top-button-yellow").on("click", function (event) {
    console.log("#top-button-yellow pushed");
});

$("#top-button-green").on("click", function (event) {
    console.log("#top-button-green pushed");
});

$("#button-top1").on("click", function (event) {
    console.log("#button-top1 pushed");
});

$("#button-top2").on("click", function (event) {
    console.log("#button-top2 pushed");

});

$("#button-bottom").on("click", function (event) {
    displayGifs();
    console.log("#button-bottom pushed");
});

//commenting out for now because it's being used, will probably delete once our code is pretty set
// $("#blue-button-left").on("click", function(event) {
//     console.log("#blue-button-left pushed");
// });

$("#green-button-left").on("click", function (event) {
    console.log("#green-button-left pushed");
    $("#modal2").modal("show");
    
});

$("#orange-button-left").on("click", function (event) {
    console.log("#orange-button-left pushed");
});

$("#square-button-left").on("click", function (event) {
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

$("#key1").on("click", function (event) {
    cardapi();
    console.log("#key1 pushed");
});

$("#key2").on("click", function (event) {
    console.log("#key2 pushed");
    userInputInt();
    $("#nb").val(idNum);
    clear();
    pokeapi();
});

$("#key3").on("click", function (event) {
    console.log("#key3 pushed");
    userInputInt();
    $("#nb").val(idNum);
    clear();
    pokeMoveList();
});

$("#key4").on("click", function (event) {
    console.log("#key4 pushed");
    userInputInt();
    $("#nb").val(idNum);
    $("#info-screen").empty();
    evolutions()
});

$("#key5").on("click", function (event) {
    console.log("#key5 pushed");
});

$("#key6").on("click", function (event) {
    console.log("#key6 pushed");
});

$("#key7").on("click", function (event) {
    console.log("#key7 pushed");
});

$("#key8").on("click", function (event) {
    console.log("#key8 pushed");
});

$("#key9").on("click", function (event) {
    console.log("#key9 pushed");
});

$("#key10").on("click", function (event) {
    console.log("#key10 pushed");
    getMap();
});

$("#leaf-button-right").on("click", function (event) {
    console.log("#leaf-button-right pushed");
});


$("#yellow-button-right").on("click", function (event) {
    console.log("#yellow-button-right pushed");
});

$("#green-button-right").on("click", function (event) {
    console.log("#green-button-right pushed");
});

$("#orange-button-right").on("click", function (event) {
    console.log("#orange-button-right pushed");
});

$("#leftT").on("click", function (event) {
    console.log("#leftT pushed");
    previousMap();
});

$("#rightT").on("click", function (event) {
    console.log("#rightT pushed");
    nextMap();
});

$("#left-red-cross").on("click", function (event) {
    console.log("#left-red-cross pushed");
});

$("#square-button-right1").on("click", function (event) {
    console.log("#square-button-right1 pushed");
});

$("#square-button-right2").on("click", function (event) {
    console.log("#square-button-right2 pushed");
});

$("top-right1").on("click", function (event) {
    console.log("#top-right1 pushed");
});

$("#top-right2").on("click", function (event) {
    console.log("#top-right2 pushed");
});

// MAP STUFF
var mapIn = 0;
var maps = ["https://cdn.bulbagarden.net/upload/2/25/LGPE_Kanto_Map.png",
    "https://cdn.bulbagarden.net/upload/3/32/Sevii_Islands.png",
    "https://cdn.bulbagarden.net/upload/6/64/JohtoMap.png",
    "https://cdn.bulbagarden.net/upload/8/85/Hoenn_ORAS.png",
    "https://cdn.bulbagarden.net/upload/7/74/Pt_Sinnoh.png",
    "https://cdn.bulbagarden.net/upload/f/fc/Unova_B2W2_alt.png",
    "https://cdn.bulbagarden.net/upload/8/8a/Kalos_alt.png",
    "https://cdn.bulbagarden.net/upload/0/0b/Alola_USUM_artwork.png",
    "https://cdn.bulbagarden.net/upload/c/ce/Galar_artwork.png",
    "https://cdn.bulbagarden.net/upload/4/47/Orre.png",
    "https://cdn.bulbagarden.net/upload/f/f0/Snap_Pok%C3%A9mon_Island.png",
    "https://cdn.bulbagarden.net/upload/c/c8/TCG_Islands.png",
    "https://cdn.bulbagarden.net/upload/4/41/Holon_City.jpg",
    "https://cdn.bulbagarden.net/upload/3/36/Mystery_Dungeon_World_PSMD.png",
    "https://cdn.bulbagarden.net/upload/4/48/Fiore_alt.png",
    "https://cdn.bulbagarden.net/upload/f/f4/Almia.png",
    "https://cdn.bulbagarden.net/upload/f/f5/Oblivia_artwork.png",
    "https://cdn.bulbagarden.net/upload/4/4b/Ransei.png",
    "https://cdn.bulbagarden.net/upload/f/fe/Ferrum.png",
    "https://cdn.bulbagarden.net/upload/d/d5/Tumblecube_Island.png"
];


function getMap() {
    clear();
    $("#screen").append('<img id="map.location' + mapIn + '" src="' + maps[mapIn] + '" />');
};

function previousMap() {
    if (mapIn === 0) {
        mapIn = 19;
    } else {
        mapIn--;
    }
    clear();
    $("#screen").append('<img id="map.location' + mapIn + '" src="' + maps[mapIn] + '" />');
};

function nextMap() {
    if (mapIn === 19) {
        mapIn = 0;
        } else {
            mapIn++;
        }
        clear();
    $("#screen").append('<img id="map.location'+ mapIn + '" src="' + maps[mapIn] + '" />');
};


