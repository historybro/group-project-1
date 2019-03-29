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