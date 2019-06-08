//Used to rotate the navigation toggler on mobile devices so it flips horizontally
$( "#navtog" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotateX(180deg)");
    } else {
        $(this).css("transform","" );
    }
});