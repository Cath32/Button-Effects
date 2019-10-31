// show effect
$("#image1").hide();
$( "#show" ).click(function() {
    $( "#image1" ).show( "fast" );
  });

  // hide effect
$( "#hide" ).click(function() {
    $( "#image2" ).hide( "fast" );
  });

// hide/show toggle Effect
  $( "#toggle" ).click(function() {
    $( "#image3" ).toggle( "fast" );
  });

  // Fade out effect
  $( "#fadeout" ).click(function() {
    $( "#image4" ).fadeOut( "fast" );
  });

  // Fade in effect
  $("#image5").hide();
  $( "#fadein" ).click(function() {
    $( "#image5" ).fadeIn( "fast" );
  });

  // Slide up effect
  $( "#slideup" ).click(function() {
    $( "#image6" ).slideUp( "fast" );
  });

  // Slide down effect
  $("#image7").hide();
  $( "#slidedown" ).click(function() {
    $( "#image7" ).slideDown( "fast" );
  });

   // fade to effect
   
   $( "#fadeto" ).click(function() {
    $( "#image8" ).fadeTo( "fast", Math.random());
  });
