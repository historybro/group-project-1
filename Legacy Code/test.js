//first evo code
if (pokename != evoDetails.species.name) {
    console.log("evo");
    let name = evoDetails.species.name;
    let level = evoShort.min_level;
    let trigger = evoShort.trigger.name;
    let item = evoShort.item;

    console.log(evoDetails);
    console.log(evoShort);
    console.log(evoDetails.species.name);
    console.log(evoShort.min_level);
    console.log(evoShort.trigger.name);
    console.log(evoShort.item);
    console.log(name + level + trigger + item);

    do {
        evoChain.push({
            species_name: name,
            min_level: !evoDetails ? 1 : level,
            trigger_name: !evoDetails ? null : trigger,
            item: !evoDetails ? null : item
        });

    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
    console.log(evoChain);

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

} else if (pokename === evoDetails.species.name) {
    console.log("evo2");
    let name = evoDetails.evolves_to[0].species.name;
    let level = evoDetails.evolves_to[0].evolution_details[0].min_level;
    let trigger = evoDetails.evolves_to[0].evolution_details[0].trigger.name;
    let item = evoDetails.evolves_to[0].evolution_details[0].item;

    do {
        evoChain.push({
            species_name: name,
            min_level: !evoDetails ? 1 : level,
            trigger_name: !evoDetails ? null : trigger,
            item: !evoDetails ? null : item
        });

    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
    console.log(evoChain);

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

//second Evo Code
console.log("evo response: ", response);
var evoChain = [];
var evoData = response;
var evoDetails = evoData.chain['evolves_to'][0];
var evoShort = evoDetails['evolution_details'][0];

if (evoDetails === undefined || evoDetails.evolves_to[0] === undefined || pokename === evoDetails.evolves_to[0].species.name) {
    $("#info-screen").html("<p>Fully Evolved</p>");
    console.log("final evo");
} else if (evoData.chain.evolves_to.length !== 0) {
    evoChain.push(evoData.chain.evolves_to[0].species.name);
    console.log("if1");
    console.log("if1: " + evoChain);
    $("#info-screen").append(evoChain);
} else {
    console.log("else1");
    console.log("else1: " + evoChain);
    $("#info-screen").append(evoChain);
}
if (evoData.chain.evolves_to[0].evolves_to.length !== 0) {
    evoChain.push(evoData.chain.evolves_to[0].evolves_to[0].species.name);
    console.log("if2");
    console.log("if2: " + evoChain);
    $("#info-screen").append(evoChain);
} else {
    console.log("else2");
    console.log("else2: " + evoChain);
    $("#info-screen").append(evoChain);
}
console.log("outside");
console.log("outside: " + evoChain);

//third evo code
//if it doesn't/can't evolve final evo
//if it can evolve
if (pokename === evoDetails.evolves_to[0].species.name || evoDetails === undefined) {
    console.log("final evo");
    $("#info-screen").html("<p>Fully Evolved</p>");
}

if (evoData.chain.evolves_to.length !== 0) {
    console.log("first evolution");
    if (pokename === evoDetails.species.name) {
        console.log("Nope")
    } else {
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

}
if (evoData.chain.evolves_to[0].evolves_to.length !== 0) {
    console.log("second evolution");
    if (pokename === evoDetails.evolves_to[0].species.name) {
        console.log("wut");
    } else {
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


input onclick='responsiveVoice.speak("Search Button,This will search for the pokemon data after you put a name,
 or number that is a Pokemon. D-Pad, You can toggle through the next or previous Pokemon in the following way.
 Up, next pokemon.  Down, previous pokemon. Left, back by 10. Right, forward by 10. TCG Button. 
 This button will display card data for the current pokemon. Search Field. You enter a valid number, 
 or name to search for pokemon here. Red Power Button (top left) . Will power the BetterDex and open it, 
 or power it off and close the BetterDex. Yellow Instructions Button (top left). This will allow you to see the text instructions again. 
 Poke-Data Button. This will display the pokemon data for the current pokemon. Evo. Button. This will display the evolution forms of current pokemon. 
 Start Audio Button. This will play the instructions verbally while allowing the BetterDex to still be utilized. Stop Audio Button. 
 This will stop the audio instructions. Quiz Buttons. This will open a quiz with varied difficulty, in a new window. Map Button. 
 This will pull up the maps of the different regions. Left Arrow Button. This will go to the previous region map. Right Arrow Button. 
 This will go to the next region map. Moves Button. This will display the moves of the current pokemon.  
 ");' type='button' value='🔊 Play'><p><i class="fas fa-volume-up"></i></p></div>