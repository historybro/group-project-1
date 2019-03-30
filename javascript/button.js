// Argh, mateys, here be the buttons new home

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

$(document).on('keypress', function (e) {
    if (e.which == 13) {
        console.log("Enter Key Pressed");
        emptygif();
        clear();
        pokeapi();
        speakFlavor();
    }
});

$("#top-button-red").on("click", function(event) {
    console.log("#top-button-red pushed");
    $( "#right, #top-right1, #top-right2, #border-screen, #screen img, #cross, #blue-button-left, #green-button-left, #orange-button-left, #square-button-left, #selectDisable, #blah, .nes-bulbasaur, .nes-charmander, .nes-squirtle, #logo").toggleClass( "closed" );
    $( "#blah" ).removeClass( "selectDisable" );
    $( "#myVideo" ).toggleClass( "seeVideo" );
});

$("#top-button-yellow").on("click", function (event) {
    $("#myModal").modal("show");
});

//enter key does the same thing as blue-button-left press ie ajax call and display info
//WASD do the same thing as the dpad buttons on screen...theoretically
//=======================================================================================
$("#blue-button-left").on("click", function (event) {
    console.log("#blue-button-left pushed");
    emptygif();
    clear();
    pokeapi();
    speakFlavor();
});

$("#upC").on("click", function (event) {
    console.log("#upC pushed");
    emptygif();
    idUp();
});

$("#rightC").on("click", function (event) {
    console.log("#rightC pushed");
    emptygif();
    idUp10();
});

$("#leftC").on("click", function (event) {
    console.log("#leftC pushed");
    emptygif();
    idDown10();
});

$("#downC").on("click", function (event) {
    console.log("#downC pushed");
    emptygif();
    idDown();
});

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
    voiceData();
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
    getMap();
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
    soundOff();
});

$("#square-button-right2").on("click", function (event) {
    console.log("#square-button-right2 pushed");
    soundOn();
});

$("top-right1").on("click", function (event) {
    console.log("#top-right1 pushed");
});

$("#top-right2").on("click", function (event) {
    console.log("#top-right2 pushed");
});

$("#voiceinstructions").on("click", function (event) {
    instructions();
})