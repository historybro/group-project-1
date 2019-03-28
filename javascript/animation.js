$("#top-button-red").on("click", function(event) {
    console.log("#top-button-red pushed");
    $( "#right, #top-right1, #top-right2, #border-screen, #screen img, #cross, #blue-button-left, #green-button-left, #orange-button-left, #square-button-left, #selectDisable, #blah, .nes-bulbasaur, .nes-charmander, .nes-squirtle, #logo").toggleClass( "closed" );
    $( "#blah" ).removeClass( "selectDisable" );
    $( "#myVideo" ).toggleClass( "seeVideo" );
});
