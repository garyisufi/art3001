$(document).ready(function() {

  $("body").click(moveBox);
  
  function moveBox(event) {
    
    console.log(event);
    
    $("#test").css("top", event.pageY);
    $("#test").css("left", event.pageX);
  }
});
