$( "#navtog" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotateX(180deg)");
    } else {
        $(this).css("transform","" );
    }
});