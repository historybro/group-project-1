$("#top-button-red").on("click", function(event) {
    console.log("#top-button-red pushed");
    $( "#right, #top-right1, #top-right2, #border-screen, #screen img, #cross, #blue-button-left, #green-button-left, #orange-button-left, #square-button-left, #selectDisable, #blah" ).toggleClass( "closed" );
    $( "#top-left1" ).toggleClass( "closed1" );
    $( "#blah" ).removeClass( "selectDisable" );
});