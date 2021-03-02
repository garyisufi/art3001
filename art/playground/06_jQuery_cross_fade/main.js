$(document).ready(function() {

  $("#image1").click(swapImages);
  
  function swapImages() {
    $(this).fadeOut(1000); // fade out over 1 second (1000 milliseconds)
    $('#image2').delay(1000).fadeIn(1000); // wait 1 second, fade in over 1 second
  }
  
});
