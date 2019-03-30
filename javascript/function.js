//Functions live here now

//document read functions combined
//Day-Night Cycle


$(document).ready(function(){
    $("#modal2").hide();
    var fullDate = new Date();
    var hours = fullDate.getHours();
    volumeon = true;
	if (hours > 19 || hours < 6) {
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
      document.body.className = "night";
    } else if (hours > 16 && hours < 19) {
	  // If time is between 4PM – 7PM sunset theme to ‘body’
      document.body.className = "sunset";
    } else{
	  // Else use ‘day’ theme
      document.body.className = "day";
    }
});

//initial variables
var pokemon;
var idNum = 0;
let gifname = [];
var volumeon;

//Better Time
//clock function
function clock() {
    var fullDate = new Date();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();
        
    document.getElementById('hour').innerHTML= hours;
    if (mins < 10){
        document.getElementById('minute').innerHTML= ":0" + mins;
    } else {
        document.getElementById('minute').innerHTML= ":" + mins;
    };
    
    if (secs < 10){
        document.getElementById('second').innerHTML= ":0" + secs;
    } else {
        document.getElementById('second').innerHTML= ":" + secs;
    };
}    
    
setInterval(clock, 100);

// volume off function
function soundOff() {
    if (volumeon != false) {
    responsiveVoice.cancel();
    volumeon = false;
    } else {
        console.log("volume is already off chief");
    }
}

//volume on function
function soundOn() {
    if (volumeon != true) {
    volumeon = true;
    } else {
        console.log("Volume is already on CHAMP");
    }
}

// Voice Api
function voiceData() {
    //responsiveVoice.cancel();
    let info = []
    console.log("volumeon? " + volumeon);
    //still not reading from pulled info correctly
    // if (volumeon != false) {    
    // info.push(pokemon);
    // console.log("voice info: " + info);
    // let readOff = info.toString();
    // console.log("readoff: " + readOff);
    // responsiveVoice.speak(readOff);
    // } else {
    //     console.log("Volume is off");
    // }
};

//instructions
function instructions() {
    responsiveVoice.speak("Search Button,",
    "This will search for the pokemon data after you put a name,or number that is a Pokemon.", 
    "D-Pad, You can toggle through the next or previous Pokemon in the following way. Up, next pokemon. Down, previous pokemon. Left, back by 10. Right, forward by 10.", 
    "TCG Button. This button will display card data for the current pokemon.", 
    "Search Field. You enter a valid number, or name to search for pokemon here.", 
    "Red Power Button (top left) . Will power the BetterDex and open it, or power it off and close the BetterDex.",
    "Yellow Instructions Button (top left). This will allow you to see the text instructions again.", 
    "Poke-Data Button. This will display the pokemon data for the current pokemon.",
    "Evo. Button. This will display the evolution forms of current pokemon.",
    "Moves Button. This will display the moves of the current pokemon.",
    "Map Button. This will pull up the maps of the different regions. Left Arrow Button. This will go to the previous region map. Right Arrow Button. This will go to the next region map.",    
    "Start Audio Button. This will turn the volume on.", 
    "Stop Audio Button. This will turn the volume off and stop all audio.",
    "Quiz Buttons. These will open a quiz with varied difficulty, in a new window." 
    );
   
}

//Card function
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
  
       $("#screen").html('<img id="'+pokemon.name+'" src="'+pokepic+'" /> <video controls autoplay loop muted id="myVideo" class="seeVideo"><source src="images/intro.mp4" type="video/mp4"> Your browser does not support the video tag.</video>');
       $(".modal-body2").empty();
       $(".modal-body2").append('<img id="modalimg" src="'+pokepic+'" />');
  
    });    
}

//Gif function

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

//Empty function
function emptygif() {
    //empty your array
    gifname.length = 0;
}

//function that clears the two main screens
function clear() {
    $("#screen").empty();
    $("#info-screen").empty();
}

//Voice Function
function speakFlavor() {
    if (volumeon != true) {
        console.log("Volume is off.");
    } else {
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
    }    
};

//grabs user input, checks if it is an integer
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

//function to go up a number
function idUp() {
    userInputInt();
    idNum++;
    $("#nb").val(idNum);
    clear();
    pokeapi();
    speakFlavor();
}


//function to go down a number
function idDown() {
    userInputInt();
    idNum--;
    $("#nb").val(idNum);
    clear();
    pokeapi();
    speakFlavor();
}

//function to go up 10 numbers
function idUp10() {
    userInputInt();
    idNum = idNum + 10;
    $("#nb").val(idNum);
    clear();
    pokeapi();
    speakFlavor();
}

//function to go down 10 numbers
function idDown10() {
    userInputInt();
    idNum = idNum - 10;
    $("#nb").val(idNum);
    clear();
    pokeapi();
    speakFlavor();
}

//Longboi functions

//grabs/creates move list
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
            $("#screen").append('<img src="' + pokepic + '" /> <video controls autoplay loop muted id="myVideo" class="seeVideo"><source src="images/intro.mp4" type="video/mp4"> Your browser does not support the video tag.</video>');
        });
};

//Evolution will go here
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
                            console.log(response);
                            var evoChain = [];
                            var evoData = response;                            
                            var evoDetails = evoData.chain['evolves_to'][0];
                            var evoShort = evoDetails['evolution_details'][0];

                            if (evoData.chain.evolves_to.length !== 0 && pokename === evoDetails.species.name) {
                                if (pokename === evoDetails.evolves_to[0].species.name || pokename === evoData.chain.species.name) {
                                    $("#info-screen").html("<p>Fully Evolved</p>");                                                                        
                                } else if ( pokename === evoData.chain.evolves_to[0].species.name) {
                                    console.log("Fail Safe");                                                                                                                                                 
                                }
                            } else if (evoData.chain.evolves_to.length !== 0 && pokename !== evoDetails.species.name) {
                                console.log("first evolution");
                                let name = evoDetails.species.name;
                                let level = evoShort.min_level;
                                let trigger = evoShort.trigger.name;
                                let item = evoShort.item;

                                evoChain.push({
                                    species_name: name,
                                    min_level: !evoDetails ? 1 : level,
                                    trigger_name: !evoDetails ? null : trigger,
                                    item: !evoDetails ? null : item
                                });

                                let evoInfo = $("<div>")
                                evoInfo.append($("<p>").attr('id', 'pokename').text("Evolves To:" + name.toUpperCase()));
                                if (item != null) {
                                    evoItem = "Yes";
                                    let item = evoShort.item.name;
                                    evoInfo.append($("<p>").text('Use ' + item + ' to evolve!'));
                                } else {
                                    evoItem = "No";
                                    evoInfo.append($("<p>").text('at level ' + level));
                                }
                                $("#info-screen").append(evoInfo);

                            }
                            

                            if (evoData.chain.evolves_to[0].evolves_to.length !== 0) {
                                console.log("second evolution");
                                if (pokename === evoDetails.evolves_to[0].species.name) {
                                    console.log("wut");
                                    $("#info-screen").html("<p>Fully Evolved</p>");
                                    
                                } else if (pokename !== evoData.chain.species.name) {
                                    let name = evoDetails.evolves_to[0].species.name;
                                    let level = evoDetails.evolves_to[0].evolution_details[0].min_level;
                                    let trigger = evoDetails.evolves_to[0].evolution_details[0].trigger.name;
                                    let item = evoDetails.evolves_to[0].evolution_details[0].item;


                                    evoChain.push({
                                        species_name: name,
                                        min_level: !evoDetails ? 1 : level,
                                        trigger_name: !evoDetails ? null : trigger,
                                        item: !evoDetails ? null : item
                                    });

                                    let evoInfo = $("<div>")
                                    evoInfo.append($("<p>").attr('id', 'pokename').text("Evolves To:" + name.toUpperCase()));
                                    if (item != null) {
                                        evoItem = "Yes";
                                        let item = evoDetails.evolves_to[0].evolution_details[0].item.name;
                                        evoInfo.append($("<p>").text('Use ' + item + ' to evolve!'));
                                    } else {
                                        evoItem = "No";
                                        evoInfo.append($("<p>").text('at level ' + level));
                                    }
                                    $("#info-screen").append(evoInfo);
                                }
                            }
                        })
                })
        });
};



//function that runs the complete pokeAPI call and data storage
function pokeapi() {
    let userInput = $("#nb").val().trim();

    if (userInput < 1 || userInput > 802) {
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
            .then(function (response) {
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
                    $("<p id='pname'>").attr('id', 'pokname').text("Name:" + pokemon.name.toUpperCase()),
                    $("<p id='pid'>").text("Number:" + pokemon.id),
                    $("<p id='pheight'>").text('Height:' + heightC + '"'),
                    $("<p id='pweight'>").text("Weight:" + weightC + "lbs"),
                    $("<p id='ptype'>").text("Type:" + pokemon.type)
                );
                $("#info-screen").append(newPokemon);
                $("#screen").append('<img id="' + pokemon.name + '" src="' + pokepic + '" /> <video controls autoplay loop muted id="myVideo" class="seeVideo"><source src="images/intro.mp4" type="video/mp4"> Your browser does not support the video tag.</video>');
                $(".modal-body2").empty();
                $(".modal-body2").append('<img id="modalimg" src="'+pokepic+'" />');
                idNum = pokeid;
                console.log("idnum: " + idNum);
                $("#nb").empty();
                $("#nb").text(pokeid);
                
            });
    }
};

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
    $("#screen").append('<img id="map.location' + mapIn + '" src="' + maps[mapIn] + '" />');
};
